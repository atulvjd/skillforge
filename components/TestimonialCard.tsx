interface TestimonialCardProps {
  author: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  className?: string;
}

export function TestimonialCard({
  author,
  role,
  content,
  image,
  rating,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50 ${className}`}
    >
      {/* Stars */}
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-lg text-yellow-400">
            {i < rating ? "★" : "☆"}
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="mb-6 italic text-foreground leading-relaxed">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={author}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
