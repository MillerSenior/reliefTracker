import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Data sourced from public and verified resources. Built with 💻 + ☕ by <a href="https://www.linkedin.com/in/anthony-miller-sr-a38bb02b9/" target="_blank" rel="noopener noreferrer" className="hover:underline">Anthony Miller</a>
        </p>
      </div>
    </footer>
  );
}
