import React, { useState } from 'react';
import { Button, Input, Select } from '../common';

interface CategoryFormProps {
  onSubmit: (data: CategoryFormData) => void;
  isLoading?: boolean;
  initialData?: CategoryFormData;
  mode?: 'create' | 'edit';
}

export interface CategoryFormData {
  name: string;
  color: string;
  budget_limit?: number;
}

const COLOR_OPTIONS = [
  { value: '#EF4444', label: 'Rojo' },
  { value: '#F59E0B', label: 'Naranja' },
  { value: '#10B981', label: 'Verde' },
  { value: '#3B82F6', label: 'Azul' },
  { value: '#6366F1', label: 'Índigo' },
  { value: '#8B5CF6', label: 'Violeta' },
  { value: '#EC4899', label: 'Rosa' },
  { value: '#000000', label: 'Negro' },
];

export const CategoryForm: React.FC<CategoryFormProps> = ({
  onSubmit,
  isLoading = false,
  initialData,
  mode = 'create',
}) => {
  const [formState, setFormState] = useState({
    name: initialData?.name || '',
    color: initialData?.color || '#3B82F6',
    budget_limit: initialData?.budget_limit || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      name: formState.name,
      color: formState.color,
      budget_limit: formState.budget_limit ? Number(formState.budget_limit) : undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        label="Nombre de la Categoría"
        required
        value={formState.name}
        onChange={handleChange}
        placeholder="ej. Supermercado, Alquiler, etc."
      />
      
      <div className="grid grid-cols-2 gap-4">
        <Select
          name="color"
          label="Color"
          options={COLOR_OPTIONS}
          value={formState.color}
          onChange={handleChange}
        />
        
        <Input
          name="budget_limit"
          type="number"
          label="Límite de Presupuesto"
          min="0"
          step="0.01"
          placeholder="(Opcional)"
          value={formState.budget_limit}
          onChange={handleChange}
          helpText="Deja vacío si no hay límite"
        />
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500 mb-2">Vista Previa:</p>
        <div className="p-3 rounded-lg border" style={{ borderLeftColor: formState.color, borderLeftWidth: '4px' }}>
          <p className="font-medium">{formState.name || 'Nombre de la Categoría'}</p>
          {formState.budget_limit && (
            <p className="text-sm text-gray-600">
              Límite: ${Number(formState.budget_limit).toFixed(2)}
            </p>
          )}
        </div>
      </div>
      
      <Button type="submit" isLoading={isLoading}>
        {mode === 'create' ? 'Crear Categoría' : 'Guardar Cambios'}
      </Button>
    </form>
  );
};

export default CategoryForm;
