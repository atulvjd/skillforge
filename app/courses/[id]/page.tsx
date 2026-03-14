'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/mockData';
import { ArrowLeft, Clock, Star, Users, CheckCircle } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id as string;
  const course = courses.find((c) => c.id === courseId);
  const [selectedLesson, setSelectedLesson] = useState(course?.lessons[0]);

  if (!course) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Course not found</h1>
            <Link href="/courses">
              <Button>Back to Courses</Button>
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
        <section className="border-b border-border bg-muted/30 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {course.category}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{course.rating}</span>
                    <span className="text-muted-foreground">(4.9 rating)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-muted-foreground">
                      {(course.students / 1000).toFixed(1)}k students
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-muted-foreground">{course.duration} hours</span>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-muted-foreground mb-2">Instructor</p>
                  <p className="text-lg font-semibold text-foreground">{course.instructor}</p>
                </div>
              </div>

              <div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-4">${course.price}</div>
                  <Button className="w-full mb-3">Enroll Now</Button>
                  <Button variant="outline" className="w-full">
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Video Player */}
                <div className="rounded-lg border border-border overflow-hidden mb-8">
                  <div className="aspect-video bg-black flex items-center justify-center">
                    {selectedLesson && (
                      <div className="text-center">
                        <div className="text-white text-xl font-semibold mb-2">
                          {selectedLesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          Click to play video
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Lesson Info */}
                {selectedLesson && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      {selectedLesson.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {selectedLesson.description}
                    </p>

                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Resources</h3>
                      <ul className="space-y-2">
                        {selectedLesson.resources.map((resource) => (
                          <li
                            key={resource}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* About Section */}
                <div className="border-t border-border pt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">About this course</h2>
                  <p className="text-muted-foreground mb-4">
                    This comprehensive course covers all the essential concepts you need to master
                    {course.category.toLowerCase()}. Through hands-on projects and real-world examples,
                    you will develop practical skills that you can immediately apply to your work.
                  </p>
                  <h3 className="font-semibold text-foreground mb-3">What you will learn</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Master core concepts and best practices
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Build real-world projects
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Get certified upon completion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Access lifetime resources and updates
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar - Lessons */}
              <div>
                <div className="rounded-lg border border-border bg-card sticky top-20">
                  <div className="border-b border-border p-4">
                    <h3 className="font-semibold text-foreground">Course Lessons</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {course.lessons.length} lessons
                    </p>
                  </div>

                  <div className="max-h-96 overflow-y-auto">
                    {course.lessons.map((lesson, index) => (
                      <button
                        key={lesson.id}
                        onClick={() => setSelectedLesson(lesson)}
                        className={`w-full p-4 border-b border-border text-left transition-colors ${
                          selectedLesson?.id === lesson.id
                            ? 'bg-primary/10'
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 text-xs font-semibold text-muted-foreground">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground text-sm">
                              {lesson.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {lesson.duration} min
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
