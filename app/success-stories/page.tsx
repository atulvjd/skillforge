'use client';

import { ArrowRight, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { successStories, courses } from '@/lib/mockData';

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/10 to-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">Success Stories</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Real Results from Real Students
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how SkillForge has transformed careers. From career changers to entrepreneurs, see how our students achieved their goals.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                >
                  Start Your Journey <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground">Inspiring journeys of transformation and achievement</p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {successStories.map((story) => (
                <div key={story.id} className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                  {/* Header with Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl font-bold text-white mb-1">{story.name}</h3>
                      <p className="text-gray-100 font-semibold">{story.role}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Company */}
                    <div className="mb-6 pb-6 border-b border-border">
                      <p className="text-sm text-muted-foreground mb-2">Currently working at</p>
                      <p className="text-lg font-semibold text-primary">{story.company}</p>
                    </div>

                    {/* Story */}
                    <p className="text-foreground leading-relaxed mb-6">"{story.story}"</p>

                    {/* Results */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Key Results</p>
                      <div className="space-y-2">
                        {story.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              <TrendingUp className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-sm text-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="pt-6 border-t border-border">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Courses Completed</p>
                      <div className="flex flex-wrap gap-2">
                        {story.coursesTaken.map((courseId) => {
                          const course = courses.find((c) => c.id === courseId);
                          return course ? (
                            <span
                              key={courseId}
                              className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {course.title.split(':')[0]}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">By The Numbers</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { value: '1000+', label: 'Career Transitions' },
                { value: '500+', label: 'Promotions Achieved' },
                { value: '2000+', label: 'Salary Increases' },
                { value: '300+', label: 'Startups Founded' },
              ].map((stat, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-background p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 sm:p-16 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Your Success Story Starts Here</h2>
              <p className="mb-8 text-lg text-white/90">Join thousands of successful students and transform your career with SkillForge.</p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-8 py-3 font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                Start Learning Now <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
