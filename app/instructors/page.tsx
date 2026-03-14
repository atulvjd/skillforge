'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InstructorCard } from '@/components/InstructorCard';
import { instructors } from '@/lib/mockData';

export default function InstructorsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="border-b border-border bg-muted/30 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                Our Instructors
              </h1>
              <p className="text-lg text-muted-foreground">
                Learn from industry experts with years of real-world experience.
              </p>
            </div>
          </div>
        </section>

        {/* Instructors Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructors.map((instructor) => (
                <InstructorCard key={instructor.id} {...instructor} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
