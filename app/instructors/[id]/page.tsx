'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/CourseCard';
import { instructors, courses } from '@/lib/mockData';
import { ArrowLeft, Star, Users, BookOpen } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function InstructorDetailPage() {
  const params = useParams();
  const instructorId = params.id as string;
  const instructor = instructors.find((i) => i.id === instructorId);
  const instructorCourses = courses.filter((c) => c.instructorId === instructorId);

  if (!instructor) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Instructor not found</h1>
            <Link href="/instructors">
              <Button>Back to Instructors</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-background py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/instructors"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Instructors
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  {instructor.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                  {instructor.bio}
                </p>

                <div className="flex flex-wrap gap-6 text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <div>
                      <div className="font-semibold text-foreground">{instructor.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <div>
                      <div className="font-semibold text-foreground">
                        {(instructor.students / 1000).toFixed(1)}k
                      </div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <div>
                      <div className="font-semibold text-foreground">{instructor.courses}</div>
                      <div className="text-xs text-muted-foreground">Courses</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-full bg-accent/20 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-lg border border-border overflow-hidden bg-card sticky top-20">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <Button className="w-full mb-3">Follow</Button>
                    <Button variant="outline" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 sm:py-16 lg:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
            <div className="max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {instructor.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a passion for education and expertise in their field, {instructor.name} has
                dedicated themselves to helping thousands of students succeed. Their courses are
                designed to be practical, engaging, and filled with real-world examples that you can
                apply immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Courses by {instructor.name}
              </h2>
              <p className="text-muted-foreground">
                {instructorCourses.length} course{instructorCourses.length !== 1 ? 's' : ''}
              </p>
            </div>

            {instructorCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {instructorCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No courses available yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
