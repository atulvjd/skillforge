import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BentoCardProps {
  title: string;
  description?: string;
  className?: string;
  image?: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: string;
  rating?: number;
  stats?: { label: string; value: string }[];
  children?: React.ReactNode;
}

export function BentoCard({
  title,
  description,
  className = "col-span-1 row-span-1",
  image,
  icon,
  href,
  badge,
  rating,
  stats,
  children,
}: BentoCardProps) {
  const content = (
    <div className={`relative h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/50 ${className}`}>
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 flex h-full flex-col ${image ? "p-6 text-white" : "p-6"} justify-between`}>
        {/* Header */}
        <div>
          {badge && (
            <div className="mb-3 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {badge}
            </div>
          )}

          {icon && <div className="mb-4 text-4xl">{icon}</div>}

          <h3 className="text-lg font-bold leading-tight">{title}</h3>

          {description && (
            <p className={`mt-2 text-sm leading-relaxed ${image ? "text-gray-100" : "text-muted-foreground"}`}>
              {description}
            </p>
          )}
        </div>

        {/* Stats or Rating */}
        <div>
          {rating !== undefined && (
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < Math.round(rating) ? "★" : "☆"}</span>
                ))}
              </div>
              <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="mt-4 space-y-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className={image ? "text-gray-200" : "text-muted-foreground"}>{stat.label}</span>
                  <span className="font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Arrow indicator */}
        {href && (
          <div className="absolute bottom-4 right-4 rounded-full bg-primary/20 p-2 transition-all group-hover:bg-primary/30">
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>

      {children && <div className="relative z-10">{children}</div>}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
