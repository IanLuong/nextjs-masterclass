'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTicket(formData) {
  const ticket = Object.fromEntries(formData);
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Insert the data
  const { error } = await supabase
    .from('Tickets')
    .insert({ ...ticket, user_email: user.email });

  revalidatePath('/');
  redirect('/tickets');
}
