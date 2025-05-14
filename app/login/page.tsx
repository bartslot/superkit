import { LoginForm } from '@/components/authentication/login-form';
import { GgLoginButton } from '@/components/authentication/gg-login-button';

export default function LoginPage() {
  return (
    <div>
      <div className="flex flex-col">
        <div
          className={
            'mx-auto mt-[112px] bg-background/80 w-[343px] md:w-[488px] gap-5 flex-col rounded-lg rounded-b-none login-card-border backdrop-blur-[6px]'
          }
        >
          <LoginForm />
        </div>

        {/* Google OAuth button */}
        <GgLoginButton label="Log in with Google" />

        <div
          className={
            'mx-auto w-[343px] md:w-[488px] bg-background/80 backdrop-blur-[6px] px-6 md:px-16 pt-0 py-8 gap-6 flex flex-col items-center justify-center rounded-b-lg'
          }
        >
          <div className="text-center text-muted-foreground text-sm mt-4 font-medium">
            Don’t have an account?{' '}
            <a href="/signup" className="text-white">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
