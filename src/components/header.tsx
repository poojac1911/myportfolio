import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Pooja Choudhary</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu (Placeholder) - Could add Sheet component later if needed */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Download Resume button removed */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
