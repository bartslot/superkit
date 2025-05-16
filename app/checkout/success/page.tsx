import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';

export default async function SuccessPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 px-6 flex items-center justify-center">
          <div className="flex flex-col items-center text-white text-center">
            <Image
              className="pb-12"
              src="/assets/icons/logo/aeroedit-success-icon.svg"
              alt="Success icon"
              height={96}
              width={96}
            />
            <h1 className="text-4xl md:text-[80px] leading-9 md:leading-[80px] font-medium pb-6">
              Payment successful
            </h1>
            <p className="text-lg pb-16">
              Success! Your payment is complete, and you’re all set.
            </p>
            <Link
              href="/"
              className="
                inline-block
                px-6 py-3
                text-base font-medium
                text-gray-900 bg-white
                rounded-lg
                hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
              "
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
