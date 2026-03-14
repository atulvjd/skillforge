'use client';

import Link from 'next/link';
import { Star, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  duration: number;
  category?: string;
}

export function CourseCard({
  id,
  title,
  image,
  instructor,
  price,
  rating,
  students,
  duration,
  category,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group h-full overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:border-primary/50">
        <div className="relative h-40 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          {category && (
            <div className="absolute top-2 right-2 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
              {category}
            </div>
          )}
        </div>

        <div className="flex flex-col p-4">
          <h3 className="mb-2 line-clamp-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="mb-3 text-sm text-muted-foreground">{instructor}</p>

          <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="font-medium text-foreground">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{(students / 1000).toFixed(1)}k</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{duration}h</span>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-lg font-bold text-primary">${price}</span>
            <Button
              size="sm"
              className="text-xs"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Enroll
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
