// app/signup/page.tsx
import { redirect } from 'next/navigation';
import { getSession } from '@/utils/supabase/server';
import { SignUpForm } from '@/components/authentication/SignupForm';
import { GgLoginButton } from '@/components/authentication/GgLoginButton';

export default async function SignupPage() {

  // No session? Show signup UI
  return (
    <div className="flex flex-col h-screen items-center justify-start py-8 px-4">
      {/* Top card: email/password */}
      <div className="bg-background/80 w-full max-w-md rounded-t-lg login-card-border backdrop-blur-[6px] overflow-hidden">
        <SignUpForm />
      </div>

      {/* Google OAuth */}
      <div className="my-4 w-full max-w-md">
        <GgLoginButton label="Sign up with Google" />
      </div>

      {/* Bottom card: login link */}
      <div className="bg-background/80 w-full max-w-md rounded-b-lg login-card-border backdrop-blur-[6px] py-4 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <a href="/login" className="text-white hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
