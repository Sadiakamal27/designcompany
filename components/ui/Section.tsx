interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 lg:py-32 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-6 lg:px-8">{children}</div>
      )}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 lg:mb-24 max-w-3xl ${className}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
