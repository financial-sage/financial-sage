"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CategoryForm, type CategoryFormData } from '@/components/categories/CategoryForm';
import { CategoryList } from '@/components/categories/CategoryList';
import { Button } from '@/components/common';
import {
  getUserCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  type Category
} from '@/lib/supabase/categories';
import { supabase } from '@/lib/supabase/client';

export default function Categories() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  useEffect(() => {
    const checkSessionAndLoadCategories = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login');
        return;
      }

      // Cargar categorías
      const result = await getUserCategories(session.user.id);
      if (result.data && Array.isArray(result.data)) {
        setCategories(result.data);
      }
    };
    
    checkSessionAndLoadCategories();
  }, [router]);

  const handleSubmit = async (formData: CategoryFormData) => {
    setIsLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login');
        return;
      }

      let result;
      if (editingCategory) {
        result = await updateCategory(editingCategory.id, session.user.id, formData);
      } else {
        result = await createCategory(session.user.id, formData);
      }

      if (result.error) {
        throw result.error;
      }

      // Actualizar lista de categorías
      const updatedResult = await getUserCategories(session.user.id);
      if (updatedResult.data && Array.isArray(updatedResult.data)) {
        setCategories(updatedResult.data);
      }

      // Resetear formulario
      setShowForm(false);
      setEditingCategory(null);

    } catch (error: any) {
      console.error('Error al gestionar la categoría:', error.message);
      alert('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleDelete = async (category: Category) => {
    if (!confirm('¿Estás seguro de que quieres eliminar esta categoría?')) {
      return;
    }

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login');
        return;
      }

      const result = await deleteCategory(category.id, session.user.id);
      if (result.error) {
        throw result.error;
      }

      // Actualizar lista de categorías
      const updatedResult = await getUserCategories(session.user.id);
      if (updatedResult.data && Array.isArray(updatedResult.data)) {
        setCategories(updatedResult.data);
      }

    } catch (error: any) {
      console.error('Error al eliminar la categoría:', error.message);
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Categorías</h1>
        {!showForm && (
          <Button onClick={() => setShowForm(true)}>
            Nueva Categoría
          </Button>
        )}
      </div>

      {showForm ? (
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {editingCategory ? 'Editar Categoría' : 'Nueva Categoría'}
            </h2>
            <Button
              variant="secondary"
              onClick={() => {
                setShowForm(false);
                setEditingCategory(null);
              }}
            >
              Cancelar
            </Button>
          </div>
          <CategoryForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            initialData={
              editingCategory
                ? {
                    ...editingCategory,
                    budget_limit: editingCategory.budget_limit ?? undefined
                  }
                : undefined
            }
            mode={editingCategory ? 'edit' : 'create'}
          />
        </div>
      ) : null}

      {categories.length > 0 ? (
        <CategoryList
          categories={categories.map(cat => ({
            ...cat,
            type: cat.type ?? 'expense' // Default to 'expense' if missing, adjust as needed
          }))}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">
            No hay categorías personalizadas. ¡Crea una!
          </p>
        </div>
      )}
    </div>
  );
}
