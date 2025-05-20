// app/login/page.tsx
import { redirect } from 'next/navigation';
import { getSession } from '@/utils/supabase/server';
import { LoginForm } from '@/components/authentication/LoginForm';
import { GgLoginButton } from '@/components/authentication/GgLoginButton';

export default async function LoginPage() {

  // No session? Render the login UI
  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4">
      <div className="flex flex-col w-full max-w-md space-y-2">
        {/* Top card: email/password */}
        <div className="bg-background/80 rounded-t-lg login-card-border backdrop-blur-[6px] overflow-hidden">
          <LoginForm hideSignUpLink />
        </div>

        {/* Google OAuth */}
        <GgLoginButton label="Log in with Google" />

        {/* Bottom card: signup link */}
        <div className="bg-background/80 backdrop-blur-[6px] rounded-b-lg flex items-center justify-center py-4">
          <p className="text-sm text-muted-foreground">
            Don’t have an account?{' '}
            <a href="/signup" className="text-white hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
