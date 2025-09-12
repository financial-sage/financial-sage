"use client";

import { useState, useEffect } from 'react';
import { Transaction, getUserTransactions } from '@/lib/supabase/transactions';

interface UseTransactionsResult {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useTransactions(userId: string | null): UseTransactionsResult {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async () => {
    if (!userId) {
      setTransactions([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const result = await getUserTransactions(userId);
      
      if (result.error) {
        setError(result.error.message);
        setTransactions([]);
      } else if (result.data) {
        setTransactions(Array.isArray(result.data) ? result.data : [result.data]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar las transacciones');
      setTransactions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [userId]);

  return {
    transactions,
    loading,
    error,
    refetch: fetchTransactions,
  };
}
