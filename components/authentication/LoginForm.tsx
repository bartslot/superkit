'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { login, loginAnonymously } from '@/app/auth/login/actions';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, LogIn, User } from 'lucide-react';

//
// 1) Zod schema for email/password
//
const signInFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type SignInFormValues = z.infer<typeof signInFormSchema>;

interface LoginFormProps {
  hideSignUpLink?: boolean;
}

export function LoginForm({ hideSignUpLink = false }: LoginFormProps) {
  //
  // 2) Form + loading + toast state
  //
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: { email: '', password: '' },
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);
  const [toastVariant, setToastVariant] = React.useState<'default' | 'destructive'>('default');

  // auto-dismiss toast
  React.useEffect(() => {
    if (toastMessage) {
      const t = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(t);
    }
  }, [toastMessage]);

  //
  // 3) Handlers
  //
  async function onSubmit(data: SignInFormValues) {
    setIsLoading(true);
    const res = await login(data);
    setIsLoading(false);

    if (res?.error) {
      setToastVariant('destructive');
      setToastMessage('Invalid email or password');
    }
  }

  async function handleAnonymous() {
    setIsLoading(true);
    const res = await loginAnonymously();
    setIsLoading(false);

    if (res?.error) {
      setToastVariant('destructive');
      setToastMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      {/** Header with wave **/}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 pb-10 relative">
        <div className="absolute w-full left-0 bottom-0 text-background">
          <svg viewBox="0 0 1440 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C240,60 480,100 720,100 C960,100 1200,60 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
        <div className="flex flex-col items-center relative z-10">
          <h1 className="text-bold text-2xl">⚡uperKit</h1>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Welcome back
          </h2>
          <p className="text-muted-foreground mt-1 text-center text-sm">
            Log in to your account to continue your workflow
          </p>
        </div>
      </div>

      {/** Form Area **/}
      <div className="relative px-6 py-4 bg-background">
        {/** Toast **/}
        {toastMessage && (
          <div
            className={`
              absolute top-2 left-1/2 transform -translate-x-1/2
              px-4 py-2 rounded-md shadow-md text-sm font-medium
              flex items-center gap-2 z-50 animate-fade-in
              ${toastVariant === 'destructive' ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'}
            `}
          >
            {toastVariant === 'destructive' && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {toastMessage}
          </div>
        )}

        {/** Anonymous Login **/}
        <button
          type="button"
          onClick={handleAnonymous}
          className="w-full mb-4 flex items-center justify-center px-4 py-2 bg-background border border-border rounded-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          Log in as Guest
        </button>

        {/** Divider **/}
        <div className="relative flex items-center justify-center w-full mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative z-10 px-3 bg-background">
            <span className="text-xs text-muted-foreground">or with email</span>
          </div>
        </div>

        {/** Email/Password Form **/}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <LogIn className="mr-2 h-4 w-4" />
              )}
              Log in
            </Button>
          </form>
        </Form>

        {/** Sign‑Up Link **/}
        {!hideSignUpLink && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Don’t have an account?{' '}
            <Link href="/signup" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
