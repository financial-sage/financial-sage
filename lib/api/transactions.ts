export type NewTransaction = {
  amount: number;
  description: string;
  category: string;
  date?: string;
};

export type AddTransactionResult = {
  data?: any;
  error?: { message?: string } | Error | null;
};

/**
 * Añade una transacción para el usuario autenticado.
 * Usa la API route server-side para procesar la transacción.
 */
export async function addTransaction(tx: NewTransaction): Promise<AddTransactionResult> {
  try {
    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: tx.amount,
        description: tx.description,
        category: tx.category,
        date: tx.date ?? new Date().toISOString(),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return { error: { message: result.error || 'Error al procesar la transacción' } };
    }

    return { data: result.data };
  } catch (err: any) {
    return { error: { message: err?.message || 'Error de conexión' } };
  }
}
