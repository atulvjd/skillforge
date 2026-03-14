'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { courses } from '@/lib/mockData';
import { X, Search, Filter, ArrowRight, Zap, Star, LayoutGrid, List } from 'lucide-react';
import Link from 'next/link';

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

  const featuredCourse = courses[0];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Header />
      <main>
        {/* Header/Search Section */}
        <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <div className="space-y-6 max-w-2xl">
                   <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-black text-primary animate-in fade-in slide-in-from-top-4 duration-700">
                      <Zap className="h-4 w-4" /> Discover Your Potential
                   </div>
                   <h1 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                      Our <span className="text-primary italic">Catalog.</span>
                   </h1>
                   <p className="text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                      Explore over {courses.length} courses designed to give you practical, job-ready skills in the most in-demand fields.
                   </p>
                </div>

                <div className="w-full lg:max-w-md animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                   <div className="relative group">
                      <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                      <input
                        type="text"
                        placeholder="What do you want to learn?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-14 pr-6 py-5 rounded-[2rem] border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-lg shadow-xl"
                      />
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Dynamic Bento Filter & Grid Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               
               {/* Filters Column */}
               <div className="lg:col-span-3 space-y-10">
                  <div className="flex items-center justify-between">
                     <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                        <Filter className="h-5 w-5 text-primary" /> Filters
                     </h3>
                     {(selectedCategory !== 'All' || selectedLevel !== 'All' || searchTerm !== '') && (
                        <button 
                           onClick={() => { setSelectedCategory('All'); setSelectedLevel('All'); setSearchTerm(''); }}
                           className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                        >
                           Reset All
                        </button>
                     )}
                  </div>

                  <div className="space-y-10">
                     <div className="space-y-4">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Category</label>
                        <div className="flex flex-col gap-2">
                           {categories.map(category => (
                              <button
                                 key={category}
                                 onClick={() => setSelectedCategory(category)}
                                 className={`px-5 py-3 rounded-2xl text-sm font-bold text-left transition-all ${
                                    selectedCategory === category 
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 translate-x-2' 
                                    : 'bg-muted/50 text-foreground hover:bg-muted hover:translate-x-1'
                                 }`}
                              >
                                 {category}
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-4">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Skill Level</label>
                        <div className="flex flex-col gap-2">
                           {levels.map(level => (
                              <button
                                 key={level}
                                 onClick={() => setSelectedLevel(level)}
                                 className={`px-5 py-3 rounded-2xl text-sm font-bold text-left transition-all ${
                                    selectedLevel === level 
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30 translate-x-2' 
                                    : 'bg-muted/50 text-foreground hover:bg-muted hover:translate-x-1'
                                 }`}
                              >
                                 {level}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Promotion Bento in Filter Column */}
                  <div className="rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white space-y-6 relative overflow-hidden group shadow-2xl">
                     <h4 className="text-2xl font-black relative z-10 leading-tight">Master Full Stack Development</h4>
                     <p className="text-white/70 text-sm relative z-10 leading-relaxed">Join 12,000+ others in our most comprehensive career track yet.</p>
                     <Link href="/learning-paths" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-black text-sm relative z-10 transition-transform hover:scale-105 active:scale-95">
                        View Path <ArrowRight className="h-4 w-4" />
                     </Link>
                     <Zap className="absolute -bottom-10 -right-10 h-40 w-40 text-white/10 transition-transform group-hover:scale-150 duration-1000" />
                  </div>
               </div>

               {/* Courses Grid Column */}
               <div className="lg:col-span-9">
                  {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                      
                      {/* Only show featured big card if no active filters or search */}
                      {selectedCategory === 'All' && selectedLevel === 'All' && searchTerm === '' && (
                         <BentoCard
                           key={featuredCourse.id}
                           title={featuredCourse.title}
                           description={featuredCourse.description}
                           image={featuredCourse.image}
                           href={`/courses/${featuredCourse.id}`}
                           badge="Course of the Month"
                           className="md:col-span-2 lg:col-span-2 md:row-span-2"
                           stats={[
                             { label: 'Rating', value: `${featuredCourse.rating} ★` },
                             { label: 'Students', value: `${(featuredCourse.students / 1000).toFixed(1)}k` },
                           ]}
                         />
                      )}

                      {filteredCourses.map((course, idx) => {
                         // If we are showing the featured card, we should skip it in the list
                         if (selectedCategory === 'All' && selectedLevel === 'All' && searchTerm === '' && course.id === featuredCourse.id) return null;
                         
                         return (
                            <BentoCard
                              key={course.id}
                              title={course.title}
                              description={course.description}
                              image={idx % 4 === 0 ? course.image : undefined}
                              href={`/courses/${course.id}`}
                              badge={course.level}
                              className="md:col-span-1 lg:col-span-1 md:row-span-1"
                              gradient={idx % 4 !== 0 ? (idx % 3 === 0 ? "bg-gradient-to-br from-emerald-500/10 to-teal-500/10" : "bg-gradient-to-br from-orange-500/10 to-red-500/10") : undefined}
                              stats={[
                                { label: 'Rating', value: `${course.rating} ★` },
                                { label: 'Price', value: `$${course.price}` },
                              ]}
                            />
                         );
                      })}

                      {/* No more courses message */}
                      <div className="md:col-span-2 lg:col-span-1 rounded-[2rem] border-2 border-dashed border-border flex flex-col items-center justify-center p-8 text-center space-y-4">
                         <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                            <Star className="h-6 w-6 text-muted-foreground" />
                         </div>
                         <h4 className="font-bold">New Courses Weekly</h4>
                         <p className="text-xs text-muted-foreground">Follow our social media for the latest announcements.</p>
                      </div>

                    </div>
                  ) : (
                    <div className="rounded-[3rem] border-2 border-dashed border-border bg-card/30 py-32 text-center space-y-8 animate-in zoom-in-95 duration-500">
                      <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mx-auto">
                         <Search className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="space-y-4">
                         <h3 className="text-3xl font-black text-foreground">
                           No courses matched your search.
                         </h3>
                         <p className="text-muted-foreground text-lg max-w-md mx-auto">
                           Try adjusting your filters or search term. We might have exactly what you need under a different name!
                         </p>
                      </div>
                      <button
                        onClick={() => { setSelectedCategory('All'); setSelectedLevel('All'); setSearchTerm(''); }}
                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-2xl font-black transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
                      >
                        <X className="h-5 w-5" /> Clear All Filters
                      </button>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 border-t border-border">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-foreground text-background rounded-[4rem] p-12 sm:p-24 text-center space-y-12 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
                 </div>
                 
                 <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <h2 className="text-5xl font-black tracking-tighter sm:text-7xl leading-tight">Can't find what you're <span className="text-primary">looking for?</span></h2>
                    <p className="text-xl text-background/70 leading-relaxed max-w-2xl mx-auto">We are constantly adding new courses and learning paths. Request a specific topic or talk to our advisors.</p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                       <Link href="/contact" className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:shadow-2xl hover:scale-105 active:scale-95">
                          Request a Course
                       </Link>
                       <Link href="/learning-paths" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:bg-white/20 active:scale-95">
                          View Learning Paths
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
