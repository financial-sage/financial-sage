"use client";
import { useState } from 'react';
import { addTransaction } from '@/lib/api/transactions';

export default function Transactions() {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Comida');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await addTransaction({
      amount: parseFloat(amount),
      description,
      category,
    });

    if (result.error) {
      console.error('Error adding transaction:', (result.error as any)?.message ?? result.error);
      alert('Error al agregar la transacción');
    } else {
      alert('Transacción agregada!');
      setAmount('');
      setDescription('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Registrar Transacción - FinancialSage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Monto (ej. 29.99)"
          step="0.01"
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción (ej. Café)"
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        >
          <option value="Comida">Comida</option>
          <option value="Transporte">Transporte</option>
          <option value="Entretenimiento">Entretenimiento</option>
        </select>
        <button
          type="submit"
          style={{ padding: '8px 16px', margin: '10px 5px' }}
        >
          Agregar Transacción
        </button>
      </form>
    </div>
  );
}
