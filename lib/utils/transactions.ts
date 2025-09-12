/**
 * Formatea un monto para mostrar en la UI
 */
export function formatAmount(amount: number, type: 'income' | 'expense'): string {
  const formattedAmount = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);

  return type === 'income' ? `+ ${formattedAmount}` : `- ${formattedAmount}`;
}

/**
 * Formatea una fecha para mostrar en la UI
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

/**
 * Obtiene el icono apropiado basado en el tipo de transacción
 */
export function getTransactionIcon(type: 'income' | 'expense', description?: string | null): string {
  if (type === 'income') {
    if (description?.toLowerCase().includes('nómina') || description?.toLowerCase().includes('salario')) {
      return 'fas fa-money-check';
    }
    return 'fas fa-arrow-up';
  } else {
    // Para gastos, podrías agregar más lógica basada en la descripción
    if (description?.toLowerCase().includes('comida') || description?.toLowerCase().includes('restaurante')) {
      return 'fas fa-utensils';
    }
    if (description?.toLowerCase().includes('gasolina') || description?.toLowerCase().includes('combustible')) {
      return 'fas fa-gas-pump';
    }
    if (description?.toLowerCase().includes('casa') || description?.toLowerCase().includes('alquiler')) {
      return 'fas fa-home';
    }
    return 'fas fa-arrow-down';
  }
}

/**
 * Formatea el estado de la transacción para mostrar en español
 */
export function formatStatus(status: 'pending' | 'completed' | 'canceled'): string {
  const statusMap = {
    pending: 'Pendiente',
    completed: 'Completado',
    canceled: 'Cancelado',
  };
  return statusMap[status];
}
