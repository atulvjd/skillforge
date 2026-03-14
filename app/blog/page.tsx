'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { blogPosts } from '@/lib/mockData';
import { Search, Filter, ArrowRight, Zap, Star, Globe, TrendingUp, Sparkles, X } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'Web Development', 'Design', 'Programming', 'Data Science', 'Cloud Computing', 'Business'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Header />
      <main>
        {/* Header/Search Section */}
        <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-card/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                <div className="space-y-6 max-w-2xl">
                   <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-black text-primary animate-in fade-in slide-in-from-top-4 duration-700">
                      <Sparkles className="h-4 w-4" /> Latest Industry Insights
                   </div>
                   <h1 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                      SkillForge <span className="text-primary italic">Blog.</span>
                   </h1>
                   <p className="text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                      Expert advice, career roadmaps, and the latest trends in tech and business to keep you ahead of the curve.
                   </p>
                </div>

                <div className="w-full lg:max-w-md animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                   <div className="relative group">
                      <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                      <input
                        type="text"
                        placeholder="Search for articles..."
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
                        <Filter className="h-5 w-5 text-primary" /> Topics
                     </h3>
                     {(selectedCategory !== 'All' || searchTerm !== '') && (
                        <button 
                           onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                           className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                        >
                           Reset All
                        </button>
                     )}
                  </div>

                  <div className="space-y-4">
                     {categories.map(category => (
                        <button
                           key={category}
                           onClick={() => setSelectedCategory(category)}
                           className={`w-full px-5 py-3 rounded-2xl text-sm font-bold text-left transition-all ${
                              selectedCategory === category 
                              ? 'bg-primary text-white shadow-lg shadow-primary/30 translate-x-2' 
                              : 'bg-muted/50 text-foreground hover:bg-muted hover:translate-x-1'
                           }`}
                        >
                           {category}
                        </button>
                     ))}
                  </div>

                  {/* Newsletter Bento in Filter Column */}
                  <div className="rounded-[2.5rem] bg-foreground text-background p-8 space-y-6 relative overflow-hidden group shadow-2xl">
                     <h4 className="text-2xl font-black relative z-10 leading-tight text-white">Never miss an <span className="text-primary italic">update.</span></h4>
                     <p className="text-white/70 text-sm relative z-10 leading-relaxed">Get our weekly roundup of the best tech insights.</p>
                     <div className="relative z-10 space-y-3">
                        <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                        <button className="w-full bg-primary text-white py-3 rounded-xl font-black text-sm transition-transform hover:scale-105 active:scale-95">
                           Subscribe
                        </button>
                     </div>
                     <TrendingUp className="absolute -bottom-10 -right-10 h-40 w-40 text-white/5 transition-transform group-hover:scale-150 duration-1000" />
                  </div>
               </div>

               {/* Blog Grid Column */}
               <div className="lg:col-span-9">
                  {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                      
                      {/* Only show featured big card if no active filters or search */}
                      {selectedCategory === 'All' && searchTerm === '' && (
                         <BentoCard
                           key={featuredPost.id}
                           title={featuredPost.title}
                           description={featuredPost.excerpt}
                           image={featuredPost.image}
                           href={`/blog/${featuredPost.id}`}
                           badge="Featured Article"
                           className="md:col-span-2 lg:col-span-2 md:row-span-2"
                           stats={[
                             { label: 'Read Time', value: `${featuredPost.readTime} min` },
                             { label: 'Date', value: featuredPost.date },
                           ]}
                         />
                      )}

                      {filteredPosts.map((post, idx) => {
                         // If we are showing the featured card, we should skip it in the list
                         if (selectedCategory === 'All' && searchTerm === '' && post.id === featuredPost.id) return null;
                         
                         return (
                            <BentoCard
                              key={post.id}
                              title={post.title}
                              description={post.excerpt}
                              image={idx % 4 === 0 ? post.image : undefined}
                              href={`/blog/${post.id}`}
                              badge={post.category}
                              className="md:col-span-1 lg:col-span-1 md:row-span-1"
                              gradient={idx % 4 !== 0 ? (idx % 3 === 0 ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/10" : "bg-gradient-to-br from-emerald-500/10 to-teal-500/10") : undefined}
                              stats={[
                                { label: 'Read Time', value: `${post.readTime} min` },
                                { label: 'By', value: post.author },
                              ]}
                            />
                         );
                      })}

                      {/* No more articles message */}
                      <div className="md:col-span-1 lg:col-span-1 rounded-[2rem] border-2 border-dashed border-border flex flex-col items-center justify-center p-8 text-center space-y-4">
                         <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                            <Star className="h-6 w-6 text-muted-foreground" />
                         </div>
                         <h4 className="font-bold">Write for us?</h4>
                         <p className="text-xs text-muted-foreground">Share your expertise with our 125k+ students.</p>
                         <Link href="/contact" className="text-xs font-black text-primary underline">Learn More</Link>
                      </div>

                    </div>
                  ) : (
                    <div className="rounded-[3rem] border-2 border-dashed border-border bg-card/30 py-32 text-center space-y-8 animate-in zoom-in-95 duration-500">
                      <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mx-auto">
                         <Search className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="space-y-4">
                         <h3 className="text-3xl font-black text-foreground">
                           No articles match your search.
                         </h3>
                         <p className="text-muted-foreground text-lg max-w-md mx-auto">
                           Try adjusting your search or topics.
                         </p>
                      </div>
                      <button
                        onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 rounded-2xl font-black transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
                      >
                        <X className="h-5 w-5" /> Reset Filters
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
              <div className="bg-primary text-white rounded-[4rem] p-12 sm:p-24 text-center space-y-12 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
                 </div>
                 
                 <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <h2 className="text-5xl font-black tracking-tighter sm:text-7xl leading-tight">Enough reading. <span className="text-foreground">Start building.</span></h2>
                    <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">Turn these insights into reality. Choose a course and start your hands-on learning journey today.</p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                       <Link href="/courses" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg transition-all hover:shadow-2xl hover:scale-105 active:scale-95">
                          Explore Catalog
                       </Link>
                       <Link href="/learning-paths" className="bg-foreground text-background px-12 py-5 rounded-2xl font-black text-lg transition-all hover:bg-foreground/90 active:scale-95">
                          Career Roadmaps
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
