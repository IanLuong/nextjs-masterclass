import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
  const ticket = await request.json();

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('Tickets')
    .insert({ ...ticket, user_email: user.email })
    .select()
    .single();

  return NextResponse.json({ data, error });
}
