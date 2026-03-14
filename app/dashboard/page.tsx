'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { StatCard } from '@/components/StatCard';
import { currentUser, courses } from '@/lib/mockData';
import { BookOpen, Award, Clock, TrendingUp, Zap, Target } from 'lucide-react';

export default function DashboardPage() {
  const enrolledCourses = courses.filter((c) => currentUser.enrolledCourses.includes(c.id));
  const recommendedCourses = courses.filter((c) => !currentUser.enrolledCourses.includes(c.id)).slice(0, 3);

  const totalHoursLearned = Object.values(currentUser.progress).reduce((sum, progress) => {
    const course = enrolledCourses.find((c) => currentUser.progress[c.id] !== undefined);
    return sum + (course?.duration || 0) * (progress / 100);
  }, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/10 to-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Welcome back, {currentUser.name}!
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Continue your learning journey. You're making great progress. Keep it up!
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          {/* Stats Grid with Bento */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Your Progress</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatCard
                value={currentUser.enrolledCourses.length}
                label="Courses Enrolled"
                icon={<BookOpen className="h-6 w-6" />}
                description="Active courses"
              />
              <StatCard
                value={`${totalHoursLearned.toFixed(1)}h`}
                label="Hours Learned"
                icon={<Clock className="h-6 w-6" />}
                description="Total learning time"
              />
              <StatCard
                value={Object.values(currentUser.progress).reduce((a, b) => a + b, 0) / currentUser.enrolledCourses.length || 0}
                label="Average Progress"
                icon={<TrendingUp className="h-6 w-6" />}
                description={`${Math.round(Object.values(currentUser.progress).reduce((a, b) => a + b, 0) / currentUser.enrolledCourses.length || 0)}%`}
                trend={{ value: 12, direction: 'up' }}
              />
              <StatCard
                value="1"
                label="Certificates"
                icon={<Award className="h-6 w-6" />}
                description="Earned"
              />
            </div>
          </div>

          {/* In Progress Courses */}
          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Continue Learning
              </h2>
              <p className="text-lg text-muted-foreground">
                Pick up where you left off on these courses
              </p>
            </div>

            {enrolledCourses.length > 0 ? (
              <div className="space-y-4">
                {enrolledCourses.map((course) => {
                  const progress = currentUser.progress[course.id] || 0;
                  return (
                    <Link key={course.id} href={`/courses/${course.id}`}>
                      <div className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                        <div className="flex items-center justify-between p-6 gap-6">
                          <div className="flex items-center gap-4 flex-1 min-w-0">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <h3 className="font-semibold text-foreground truncate">
                                {course.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {course.instructor}
                              </p>
                              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary transition-all"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end flex-shrink-0">
                            <p className="text-2xl font-bold text-primary mb-2">{progress}%</p>
                            <span className="text-xs text-muted-foreground">Complete</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-xl border border-border bg-card/50 py-16 text-center">
                <Target className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No courses yet
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Start your learning journey by enrolling in a course
                </p>
                <Link href="/courses">
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-3 font-semibold transition-all hover:shadow-lg hover:scale-105">
                    <Zap className="h-4 w-4" />
                    Explore Courses
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* Recommended */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">
                Recommended for You
              </h2>
              <p className="text-lg text-muted-foreground">
                Personalized recommendations based on your learning history
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]">
              {recommendedCourses.map((course, idx) => (
                <BentoCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  href={`/courses/${course.id}`}
                  badge={course.level}
                  rating={course.rating}
                  stats={[
                    { label: 'Students', value: `${(course.students / 1000).toFixed(1)}k` },
                    { label: 'Duration', value: `${course.duration}h` },
                  ]}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg border border-primary text-primary px-6 py-3 font-semibold transition-all hover:bg-primary hover:text-white"
              >
                View All Courses <TrendingUp className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
