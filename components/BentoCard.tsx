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
  gradient?: string;
  darkOverlay?: boolean;
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
  gradient,
  darkOverlay = true,
}: BentoCardProps) {
  const content = (
    <div className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 ${className}`}>
      {/* Background Gradient */}
      {gradient && (
        <div className={`absolute inset-0 z-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${gradient}`} />
      )}

      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {darkOverlay && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />}
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 flex h-full flex-col ${image ? "p-8 text-white" : "p-8"} justify-between`}>
        {/* Header */}
        <div>
          <div className="flex items-start justify-between">
            {badge && (
              <div className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${image ? 'bg-white/20 backdrop-blur-md' : 'bg-primary/10 text-primary'}`}>
                {badge}
              </div>
            )}
            {icon && <div className={`mb-4 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${image ? 'text-white' : 'text-primary'}`}>{icon}</div>}
          </div>

          <h3 className={`text-xl font-bold leading-tight tracking-tight sm:text-2xl ${image ? 'text-white' : 'text-foreground'}`}>
            {title}
          </h3>

          {description && (
            <p className={`mt-3 text-sm leading-relaxed line-clamp-3 transition-colors duration-300 ${image ? "text-gray-200" : "text-muted-foreground group-hover:text-foreground"}`}>
              {description}
            </p>
          )}
        </div>

        {/* Stats or Rating */}
        <div className="mt-6">
          {rating !== undefined && (
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">{i < Math.round(rating) ? "★" : "☆"}</span>
                ))}
              </div>
              <span className={`text-sm font-bold ${image ? 'text-white' : 'text-foreground'}`}>{rating.toFixed(1)}</span>
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${image ? "text-gray-300" : "text-muted-foreground"}`}>{stat.label}</span>
                  <span className={`text-sm font-bold ${image ? 'text-white' : 'text-foreground'}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action button style indicator */}
        {href && (
          <div className={`mt-6 inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 ${image ? 'text-white/80 group-hover:text-white' : 'text-primary group-hover:gap-3'}`}>
            Explore Now <ArrowRight className="h-4 w-4" />
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
