'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signup } from '@/app/auth/signup/actions';
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
import { Loader2, UserPlus } from 'lucide-react';

const signUpSchema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });
type SignUpData = z.infer<typeof signUpSchema>;

export function SignUpForm() {
  const form = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: '', password: '', confirmPassword: '' },
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [toast, setToast] = React.useState<{ message: string; variant: 'default' | 'destructive' } | null>(null);

  React.useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  async function onSubmit(data: SignUpData) {
    setIsLoading(true);
    const res = await signup({ email: data.email, password: data.password });
    setIsLoading(false);
    if (res?.error) {
      setToast({ message: 'Something went wrong.', variant: 'destructive' });
    } else {
      setToast({ message: 'Account created successfully!', variant: 'default' });
      // form.reset();
    }
  }

  return (
    <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 pb-14 relative">
        <div className="absolute w-full left-0 bottom-0 text-background">
          <svg viewBox="0 0 1440 120" fill="currentColor">
            <path d="M0,0 C240,60 480,100 720,100 C960,100 1200,60 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
        <div className="flex flex-col items-center relative z-10">
          <h1 className="text-bold text-2xl">⚡uperKit</h1>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Join SuperKit</h2>
          <p className="text-muted-foreground mt-2 text-center text-sm">
            Create an account to start your journey
          </p>
        </div>
      </div>

      <div className="relative px-8 py-6 bg-background">
        {/* Toast */}
        {toast && (
          <div
            className={`
              absolute top-2 left-1/2 transform -translate-x-1/2
              px-4 py-2 rounded-md shadow-md text-sm font-medium flex items-center gap-2 z-50 animate-fade-in
              ${toast.variant === 'destructive' ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'}
            `}
          >
            {toast.variant === 'destructive' && (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            {toast.message}
          </div>
        )}

        {/* Sign Up Form */}
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <UserPlus className="mr-2 h-4 w-4" />}
              Create Account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
