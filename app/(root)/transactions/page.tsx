"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TransactionForm, type TransactionFormData } from '@/components/transactions/TransactionForm';
import { addTransaction } from '@/lib/supabase/transactions';
import { supabase } from '@/lib/supabase/client';
import { useTransactionContext } from '@/contexts/TransactionContext';
import TransactionsView from './TransactionsView';

export default function Transactions() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { addTransactionToList } = useTransactionContext();

  const handleSubmit = async (formData: TransactionFormData) => {
    setIsLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login');
        return;
      }

      const result = await addTransaction(session.user.id, {
        amount: formData.amount,
        description: formData.description,
        category_id: formData.category_id,
        type: formData.type,
        date: formData.date,
        status: formData.status,
      });

      if (result.error) {
        throw result.error;
      }

      // Si la transacción se creó exitosamente, agregarla a la lista local
      if (result.data && !Array.isArray(result.data)) {
        addTransactionToList(result.data);
      }

    } catch (error: any) {
      console.error('Error al agregar la transacción:', error.message);
      alert('Error al agregar la transacción: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Gestión de Transacciones</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Registrar Nueva Transacción</h2>
          <TransactionForm 
            onSubmit={handleSubmit} 
            isLoading={isLoading}
          />
        </div>

        {/* Lista de transacciones */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Transacciones Recientes</h2>
          <TransactionsView />
        </div>
      </div>
    </div>
  );
}
