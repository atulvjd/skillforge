import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  className?: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
  className = "col-span-1",
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <div
        className={`group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50 ${className}`}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4">
            <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="line-clamp-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Author & CTA */}
          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="text-xs font-medium text-foreground">{author}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
