import React from 'react';
import { Button } from '../common';
import type { Category as SupabaseCategory } from '@/lib/supabase/categories';

interface Category extends SupabaseCategory {
  type: 'income' | 'expense';
  icon?: string;
}

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (category: Category) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onEdit,
  onDelete,
}) => {
  // Agrupar categorías por tipo
  const groupedCategories = categories.reduce(
    (
      acc: { income: Category[]; expense: Category[] },
      category: Category
    ) => {
      acc[category.type as 'income' | 'expense'].push(category);
      return acc;
    },
    { income: [] as Category[], expense: [] as Category[] }
  );

  const renderCategoryGroup = (type: 'income' | 'expense', title: string) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {groupedCategories[type].map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow p-4 border-l-4"
            style={{ borderLeftColor: category.color || '#3B82F6' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{category.icon || '📁'}</span>
                <span className="font-medium">{category.name}</span>
              </div>
              {!category.is_default && (
                <div className="flex space-x-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => onEdit(category)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(category)}
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderCategoryGroup('expense', 'Categorías de Gastos')}
      {renderCategoryGroup('income', 'Categorías de Ingresos')}
    </div>
  );
};

export default CategoryList;
