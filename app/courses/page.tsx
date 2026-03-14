'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { courses } from '@/lib/mockData';
import { X, Search } from 'lucide-react';

const categories = ['All', 'Web Development', 'Design', 'Data Science', 'Business', 'Cloud Computing', 'Mobile Development', 'Marketing'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter((course) => {
    const categoryMatch =
      selectedCategory === 'All' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || course.level === selectedLevel;
    const searchMatch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && levelMatch && searchMatch;
  });

  const hasActiveFilters =
    selectedCategory !== 'All' || selectedLevel !== 'All' || searchTerm !== '';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-br from-primary/10 to-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Explore Our Courses
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Choose from {courses.length} carefully curated courses taught by industry experts. Start your learning journey today.
              </p>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses by title, category, or skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Level
                </label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedLevel === level
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedLevel('All');
                      setSearchTerm('');
                    }}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <X className="h-4 w-4" />
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {filteredCourses.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} out of {courses.length}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[320px]">
                  {filteredCourses.map((course, idx) => (
                    <BentoCard
                      key={course.id}
                      title={course.title}
                      description={course.description}
                      image={course.image}
                      href={`/courses/${course.id}`}
                      badge={course.level}
                      rating={course.rating}
                      className={`${
                        idx === 0 ? 'lg:col-span-2 auto-rows-[400px]' : ''
                      }`}
                      stats={[
                        { label: 'Students', value: `${(course.students / 1000).toFixed(1)}k` },
                        { label: 'Duration', value: `${course.duration}h` },
                        { label: 'Price', value: `$${course.price}` },
                      ]}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-xl border border-border bg-card/50 py-20 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  No courses found
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Try adjusting your search terms or filters to find the courses you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedLevel('All');
                    setSearchTerm('');
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary text-primary px-6 py-3 font-semibold transition-all hover:bg-primary hover:text-white"
                >
                  <X className="h-4 w-4" />
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
