import type { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  icon?: LucideIcon;
  className?: string;
}

export function SectionTitle({ title, icon: Icon, className }: SectionTitleProps) {
  return (
    <div className={`flex items-center mb-6 ${className}`}>
      {Icon && <Icon className="h-8 w-8 mr-3 text-primary" />}
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
