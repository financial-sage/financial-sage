"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TransactionForm, type TransactionFormData } from '@/components/transactions/TransactionForm';
import { addTransaction, getUserTransactions, type Transaction } from '@/lib/supabase/transactions';
import { getUserCategories, type Category } from '@/lib/supabase/categories';
import { supabase } from '@/lib/supabase/client';

export default function Transactions() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login');
        return;
      }

      // Cargar transacciones y categorías en paralelo
      const [transactionsResult, categoriesResult] = await Promise.all([
        getUserTransactions(session.user.id),
        getUserCategories(session.user.id)
      ]);

      if (transactionsResult.data && Array.isArray(transactionsResult.data)) {
        setTransactions(transactionsResult.data);
      }

      if (categoriesResult.data && Array.isArray(categoriesResult.data)) {
        setCategories(categoriesResult.data);
      }
    };
    
    loadData();
  }, [router]);

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

      // Actualizar la lista de transacciones
      const updatedResult = await getUserTransactions(session.user.id);
      if (updatedResult.data && Array.isArray(updatedResult.data)) {
        setTransactions(updatedResult.data);
      }

    } catch (error: any) {
      console.error('Error al agregar la transacción:', error.message);
      alert('Error al agregar la transacción: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Registrar Transacción</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <TransactionForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>

      {transactions.length > 0 && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Últimas Transacciones</h2>
          <div className="space-y-4">
            {transactions.map((tx) => {
              const category = categories.find(cat => cat.id === tx.category_id);
              return (
                <div
                  key={tx.id}
                  className={`p-4 rounded-lg border ${
                    tx.type === 'income' ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  } ${tx.status === 'canceled' ? 'opacity-60' : ''}`}
                  style={{
                    borderLeftColor: category?.color || (tx.type === 'income' ? '#10B981' : '#EF4444'),
                    borderLeftWidth: '4px'
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{tx.description || 'Sin descripción'}</p>
                        {tx.status !== 'completed' && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            tx.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {tx.status === 'pending' ? 'Pendiente' : 'Cancelada'}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <span>{category?.name || 'Sin categoría'}</span>
                        <span>•</span>
                        <span>{new Date(tx.date).toLocaleDateString()}</span>
                        {tx.source !== 'manual' && (
                          <>
                            <span>•</span>
                            <span className="italic">Via {tx.source}</span>
                          </>
                        )}
                      </p>
                    </div>
                    <p className={`font-bold ${
                      tx.type === 'income' ? 'text-green-600' : 'text-red-600'
                    } ${tx.status === 'canceled' ? 'line-through' : ''}`}>
                      {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
