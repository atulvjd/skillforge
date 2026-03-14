'use client';

import Link from 'next/link';
import { Star, Users, BookOpen } from 'lucide-react';

interface InstructorCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  students: number;
  courses: number;
  expertise: string[];
}

export function InstructorCard({
  id,
  name,
  image,
  rating,
  students,
  courses,
  expertise,
}: InstructorCardProps) {
  return (
    <Link href={`/instructors/${id}`}>
      <div className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg hover:border-primary/50">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="font-medium text-foreground">{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span>{(students / 1000).toFixed(1)}k</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{courses} courses</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {expertise.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-accent/20 px-2 py-1 text-xs font-medium text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
