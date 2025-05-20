
import Link from 'next/link';
import { Wrench } from 'lucide-react'; 
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity">
          <Wrench className="h-6 w-6" />
          <span>Toolbox</span>
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden sm:flex items-center gap-1">
            <Button variant="ghost" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
            {/* Add more navigation links here if needed */}
          </nav>
          
          <div className="flex items-center gap-2">
             <Button variant="outline" size="sm" asChild className="hidden xs:inline-flex">
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>

          <ThemeToggle />
          
          {/* For smaller screens, consider a mobile menu (e.g., using Sheet component) later */}
          {/* <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/pricing" className="text-lg">Pricing</Link>
                  <Link href="/auth/signin" className="text-lg">Sign In</Link>
                  <Link href="/auth/signup" className="text-lg">Sign Up</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div> */}
        </div>
      </div>
    </header>
  );
}

