'use client';

import { ArrowRight, Zap, Users, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { StatCard } from '@/components/StatCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { BlogCard } from '@/components/BlogCard';
import { courses, instructors, testimonials, blogPosts, stats } from '@/lib/mockData';

export default function Home() {
  const featuredCourses = courses.slice(0, 6);
  const topInstructors = instructors.slice(0, 4);
  const topTestimonials = testimonials.slice(0, 3);
  const recentBlogPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                  Master Skills That Matter
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Learn from industry experts and transform your career. Join over 125,000 students who trust SkillForge for their professional development.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                >
                  Explore Courses <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold transition-all hover:border-primary hover:shadow-lg">
                  View Learning Paths
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold">{stats.totalStudents.toLocaleString()}+</p>
                  <p className="text-sm text-muted-foreground">Active Students</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.totalCourses}+</p>
                  <p className="text-sm text-muted-foreground">Expert Courses</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.averageRating}</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 h-40 flex items-center justify-center">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
                <div className="rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 h-40 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-secondary" />
                </div>
              </div>
              <div className="space-y-4 pt-4">
                <div className="rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 h-40 flex items-center justify-center">
                  <Users className="h-12 w-12 text-accent" />
                </div>
                <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 h-40 flex items-center justify-center">
                  <Award className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Bento */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SkillForge</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              value={`${stats.successRate}%`}
              label="Success Rate"
              icon={<TrendingUp className="h-6 w-6" />}
              description="Students achieve their goals"
              trend={{ value: 12, direction: 'up' }}
            />
            <StatCard
              value={stats.totalCourses}
              label="Expert Courses"
              icon={<Award className="h-6 w-6" />}
              description="Carefully curated content"
            />
            <StatCard
              value={stats.totalInstructors}
              label="Expert Instructors"
              icon={<Users className="h-6 w-6" />}
              description="Industry professionals"
            />
            <StatCard
              value={stats.averageRating}
              label="Average Rating"
              icon={<Zap className="h-6 w-6" />}
              description="Trusted by learners"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses Bento Grid */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Courses</h2>
            <p className="text-lg text-muted-foreground">Discover our most popular and highly-rated courses</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px]">
            {featuredCourses.map((course, idx) => (
              <BentoCard
                key={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                href={`/courses/${course.id}`}
                badge={course.level}
                rating={course.rating}
                className={`${
                  idx === 0 ? 'lg:col-span-2 md:row-span-1 auto-rows-[400px]' : ''
                }`}
                stats={[
                  { label: 'Students', value: `${(course.students / 1000).toFixed(1)}k` },
                  { label: 'Duration', value: `${course.duration}h` },
                  { label: 'Price', value: `$${course.price}` },
                ]}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-lg border border-primary text-primary px-6 py-3 font-semibold transition-all hover:bg-primary hover:text-white"
            >
              View All Courses <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Learn From The Best</h2>
            <p className="text-lg text-muted-foreground">Our instructors are industry experts with proven track records</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topInstructors.map((instructor) => (
              <Link key={instructor.id} href={`/instructors/${instructor.id}`}>
                <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:shadow-lg hover:border-primary/50 h-full">
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg">{instructor.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{instructor.bio}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">{instructor.rating} ★</p>
                        <p className="text-xs text-muted-foreground">{instructor.students.toLocaleString()} students</p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/instructors"
              className="inline-flex items-center gap-2 rounded-lg border border-primary text-primary px-6 py-3 font-semibold transition-all hover:bg-primary hover:text-white"
            >
              View All Instructors <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">What Students Say</h2>
            <p className="text-lg text-muted-foreground">Real success stories from real learners</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                author={testimonial.author}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest From Our Blog</h2>
            <p className="text-lg text-muted-foreground">Industry insights and learning tips from our experts</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentBlogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-primary text-primary px-6 py-3 font-semibold transition-all hover:bg-primary hover:text-white"
            >
              Read More Articles <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 sm:p-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
            <p className="mb-8 text-lg text-white/90">Start learning from industry experts today. Join thousands of successful students.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-8 py-3 font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-lg border border-white text-white px-8 py-3 font-semibold transition-all hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
// Cache bust v2
