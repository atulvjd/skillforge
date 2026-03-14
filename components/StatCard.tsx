interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  trend?: { value: number; direction: "up" | "down" };
  className?: string;
}

export function StatCard({
  value,
  label,
  icon,
  description,
  trend,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50 ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>

          {description && (
            <p className="mt-2 text-xs text-muted-foreground">{description}</p>
          )}
        </div>

        {icon && (
          <div className="rounded-lg bg-primary/10 p-3 text-primary transition-all group-hover:bg-primary/20">
            {icon}
          </div>
        )}
      </div>

      {trend && (
        <div className={`mt-4 flex items-center gap-2 text-sm ${trend.direction === "up" ? "text-green-600" : "text-red-600"}`}>
          <span>{trend.direction === "up" ? "↑" : "↓"}</span>
          <span>{trend.value}%</span>
        </div>
      )}
    </div>
  );
}
