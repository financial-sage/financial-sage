import React, { useEffect, useState } from 'react';
import { Button, Input, Select } from '../common';
import type { Category } from '@/lib/supabase/categories';
import { getUserCategories, createCategory } from '@/lib/supabase/categories';
import { supabase } from '@/lib/supabase/client';

// Modal para nueva categoría
const NewCategoryModal = ({ 
  isOpen, 
  onClose, 
  onSave 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSave: (category: Category) => void; 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    color: '#3B82F6'
  });
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      color: '#3B82F6'
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('No hay sesión');

      const result = await createCategory(session.user.id, {
        name: formData.name,
        color: formData.color,
      });

      if (result.error) throw result.error;
      if (result.data && !Array.isArray(result.data)) {
        onSave(result.data);
        handleClose();
      }
    } catch (error) {
      console.error('Error al crear categoría:', error);
      alert('Error al crear la categoría');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Nueva Categoría</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            label="Nombre"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            placeholder="ej. Supermercado, Gasolina, etc."
          />
          <Select
            name="color"
            label="Color"
            value={formData.color}
            onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
            options={[
              { value: '#EF4444', label: 'Rojo' },
              { value: '#F59E0B', label: 'Naranja' },
              { value: '#10B981', label: 'Verde' },
              { value: '#3B82F6', label: 'Azul' },
              { value: '#6366F1', label: 'Índigo' },
              { value: '#8B5CF6', label: 'Violeta' },
              { value: '#EC4899', label: 'Rosa' },
            ]}
          />
          <div className="flex justify-end space-x-2 mt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              isLoading={isLoading}
            >
              Crear Categoría
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface TransactionFormProps {
  onSubmit: (data: TransactionFormData) => void;
  isLoading?: boolean;
}

export interface TransactionFormData {
  amount: number;
  description: string;
  category_id: string;
  type: 'income' | 'expense';
  date: string;
  status: 'pending' | 'completed' | 'canceled';
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedType, setSelectedType] = useState<'income' | 'expense'>('expense');
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);

  const loadCategories = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const result = await getUserCategories(session.user.id);
      if (result.data && Array.isArray(result.data)) {
        setCategories(result.data);
      }
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleNewCategory = (category: Category) => {
    setCategories(prev => [...prev, category]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    onSubmit({
      amount: Number(formData.get('amount')),
      description: String(formData.get('description')),
      category_id: String(formData.get('category')),
      type: selectedType,
      date: String(formData.get('date')),
      status: 'completed',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="amount"
            type="number"
            label="Monto"
            required
            min="0"
            step="0.01"
            placeholder="0.00"
          />
          
          <Select
            name="type"
            label="Tipo"
            options={[
              { value: 'expense', label: 'Gasto' },
              { value: 'income', label: 'Ingreso' },
            ]}
            value={selectedType}
            onChange={e => setSelectedType(e.target.value as 'income' | 'expense')}
            required
          />
        
        <Input
          name="description"
          label="Descripción"
          required
          maxLength={100}
          placeholder="Descripción de la transacción"
        />
        
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Select
                name="category"
                options={categories.map(cat => ({
                  value: cat.id,
                  label: cat.name,
                  style: { borderLeftColor: cat.color, borderLeftWidth: 3, paddingLeft: 8 }
                }))}
                required
                disabled={isLoadingCategories}
                helpText={isLoadingCategories ? 'Cargando categorías...' : undefined}
              />
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => setShowNewCategoryModal(true)}
            >
              + Nueva
            </Button>
          </div>
        </div>
        
        <Input
          name="date"
          type="date"
          label="Fecha"
          required
          defaultValue={new Date().toISOString().split('T')[0]}
        />
        
        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoadingCategories}
        >
          Guardar Transacción
        </Button>
      </form>

      {showNewCategoryModal && (
        <NewCategoryModal
          isOpen={showNewCategoryModal}
          onClose={() => setShowNewCategoryModal(false)}
          onSave={handleNewCategory}
        />
      )}
    </>
  );
};

export default TransactionForm;
