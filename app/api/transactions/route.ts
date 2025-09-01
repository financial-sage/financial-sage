import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { NewTransaction } from '@/lib/api/transactions';
import { createClient } from '@/lib/supabaseServer';

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    
    // Verificar si el usuario está autenticado
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    // Obtener los datos de la transacción del cuerpo de la petición
    const transaction: NewTransaction = await request.json();

    // Insertar la transacción en la base de datos
    const { data, error } = await supabase
      .from('transactions')
      .insert([
        {
          user_id: user.id,
          amount: transaction.amount,
          description: transaction.description,
          category: transaction.category,
          date: transaction.date || new Date().toISOString(),
        }
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error al procesar la transacción:', error);
    return NextResponse.json(
      { error: 'Error al procesar la transacción' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const supabase = await createClient();
    
    // Verificar si el usuario está autenticado
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    // Obtener las transacciones del usuario
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('user_id', user.id)
      .order('date', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error al obtener las transacciones:', error);
    return NextResponse.json(
      { error: 'Error al obtener las transacciones' },
      { status: 500 }
    );
  }
}