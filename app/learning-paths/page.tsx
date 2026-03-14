'use client';

import { ArrowRight, BookOpen, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { learningPaths, courses } from '@/lib/mockData';

export default function LearningPathsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/10 to-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">Structured Learning</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Guided Learning Paths to Mastery
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Follow expertly designed learning paths that take you from beginner to expert. Each path includes everything you need to master a skill or become proficient in a new career.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Available Paths</h2>
              <p className="text-lg text-muted-foreground">Choose a path that aligns with your goals and expertise level</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {learningPaths.map((path) => (
                <div key={path.id} className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                  {/* Background */}
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `url(${path.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col h-full min-h-[400px] justify-between text-white">
                    <div>
                      <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                        {path.level}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{path.title}</h3>
                      <p className="text-gray-200 leading-relaxed mb-6">{path.description}</p>

                      {/* Courses in Path */}
                      <div className="mb-6">
                        <p className="text-sm font-semibold mb-3 text-gray-300">Includes {path.courses.length} courses:</p>
                        <div className="space-y-2">
                          {path.courses.map((courseId) => {
                            const course = courses.find((c) => c.id === courseId);
                            return course ? (
                              <div key={courseId} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span>{course.title}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Zap className="h-4 w-4" />
                          <span className="text-sm">{path.duration} hours</span>
                        </div>
                      </div>
                      <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold transition-all hover:bg-primary/90"
                      >
                        Start Path <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Path Features */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">What You Get</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: 'Structured Curriculum',
                  description: 'Follow a logical progression from fundamentals to advanced concepts.',
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: 'Track Progress',
                  description: 'Monitor your advancement with clear milestones and completion metrics.',
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: 'Expert Guidance',
                  description: 'Learn from industry professionals who designed these paths.',
                },
              ].map((feature, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-background p-8 transition-all hover:shadow-lg">
                  <div className="mb-4 rounded-lg bg-primary/10 w-fit p-3 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 sm:p-16 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Ready to Choose Your Path?</h2>
              <p className="mb-8 text-lg text-white/90">Pick the learning path that matches your ambitions and start mastering new skills today.</p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-8 py-3 font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                Explore All Paths <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
