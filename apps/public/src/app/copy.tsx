import { cn } from '@/utils/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Lead({ children, className }: Props) {
  return (
    <p className={cn('text-xl md:text-2xl font-light', className)}>
      {children}
    </p>
  );
}

export function Lead2({ children, className }: Props) {
  return (
    <p className={cn('text-lg md:text-xl font-light', className)}>{children}</p>
  );
}

export function Paragraph({ children, className }: Props) {
  return <p className={cn('text-lg', className)}>{children}</p>;
}

export function Heading1({ children, className }: Props) {
  return (
    <h1
      className={cn(
        'text-4xl md:text-5xl font-bold text-slate-800 !leading-tight',
        className
      )}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: Props) {
  return (
    <h2
      className={cn('text-4xl md:text-5xl font-bold text-slate-800', className)}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className }: Props) {
  return (
    <h3
      className={cn('text-2xl md:text-3xl font-bold text-slate-800', className)}
    >
      {children}
    </h3>
  );
}
