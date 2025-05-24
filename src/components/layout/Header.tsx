import { siteConfig } from '@/config/site';
import { Tornado } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Tornado className="h-8 w-8 mr-2 text-primary" />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </div>
        {/* Future navigation links can go here */}
      </div>
    </header>
  );
}
