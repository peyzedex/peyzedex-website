import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-card border border-card-border overflow-hidden group-hover:border-primary/50 transition-colors">
        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="font-display font-bold text-xl text-gradient relative z-10">PZ</span>
      </div>
      <span className="font-display font-semibold text-xl tracking-wide hidden sm:block">
        PeyZe<span className="text-primary">Dex</span>
      </span>
    </Link>
  );
}
