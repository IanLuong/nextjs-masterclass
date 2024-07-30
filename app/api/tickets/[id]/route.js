import { createClient } from '@/utils/supabase/client';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(_, { params }) {
  const id = params.id;
  const supabase = createClient();

  const { error } = await supabase.from('Tickets').delete().eq('id', id);

  return NextResponse.json({ error });
}
