'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

interface FormData {
  email: string;
  password: string;
}

/**
 * Traditional email/password login
 */
export async function login(data: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: true };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

/**
 * OAuth login via GitHub
 */
export async function signInWithGithub() {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}

/**
 * OAuth login via Google
 */
export async function signInWithGoogle() {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url);
  }
}

/**
 * Anonymous guest login, with transient email update
 */
export async function loginAnonymously() {
  const supabase = await createClient();
  const { error: signInError } = await supabase.auth.signInAnonymously();
  if (signInError) {
    return { error: true };
  }

  const randomEmail = `Drift+${Date.now().toString(36)}@paddle.com`;
  const { error: updateUserError } = await supabase.auth.updateUser({
    email: randomEmail,
  });

  if (updateUserError) {
    return { error: true };
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
