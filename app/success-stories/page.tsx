'use client';

import { ArrowRight, Award, TrendingUp, Star, Quote, CheckCircle, Globe, Zap, Users } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { successStories, courses } from '@/lib/mockData';

export default function SuccessStoriesPage() {
  const featuredStory = successStories[0];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32 bg-card/30 border-b border-border">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.2),transparent_70%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-black text-primary animate-in fade-in slide-in-from-top-4 duration-700">
               <Award className="h-4 w-4" /> Proof of Excellence
            </div>
            <h1 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl max-w-5xl mx-auto leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              The SkillForge <span className="text-primary italic">Alumni.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Real results from real people. Our students don't just learn skills—they transform their entire career trajectory.
            </p>
          </div>
        </section>

        {/* Bento Stories Grid */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 auto-rows-[300px]">
              
              {/* Featured Success Story */}
              <div className="md:col-span-4 lg:col-span-4 md:row-span-2 rounded-[3rem] overflow-hidden bg-foreground text-background group relative border border-white/10 shadow-2xl">
                 <div className="absolute inset-0 z-0">
                    <img src={featuredStory.image} alt={featuredStory.name} className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
                 </div>
                 
                 <div className="relative z-10 h-full p-12 flex flex-col justify-end gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white">
                       Featured Career Transition
                    </div>
                    <div className="space-y-4">
                       <h2 className="text-4xl font-black tracking-tight sm:text-6xl">{featuredStory.name}</h2>
                       <p className="text-xl text-white/70 max-w-xl font-medium italic leading-relaxed">"{featuredStory.story}"</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                       {featuredStory.results.map((result, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-black text-primary uppercase tracking-widest">
                            <CheckCircle className="h-4 w-4" /> {result}
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Quick Stat Bento */}
              <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-primary rounded-[2.5rem] p-10 text-white flex flex-col justify-between group overflow-hidden">
                 <div className="relative z-10 flex justify-between items-start">
                    <TrendingUp className="h-10 w-10 text-white/80" />
                    <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Impact</span>
                 </div>
                 <h3 className="relative z-10 text-3xl font-black">45% Average Salary Increase.</h3>
                 <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white/10 rounded-full transition-transform group-hover:scale-150 duration-700" />
              </div>

              {/* Company Logo Bento */}
              <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-card rounded-[2.5rem] p-10 border border-border flex flex-col justify-between group overflow-hidden shadow-xl">
                 <div className="relative z-10 flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                    <Globe className="h-5 w-5" /> Global Reach
                 </div>
                 <p className="relative z-10 text-xl font-bold">Alumni working at Google, Meta, and hundreds of high-growth startups.</p>
                 <div className="absolute -top-10 -left-10 h-40 w-40 bg-primary/5 rounded-full transition-transform group-hover:scale-150 duration-700" />
              </div>

              {/* Other Stories as Bento Cards */}
              {successStories.slice(1).map((story, idx) => (
                <BentoCard
                  key={story.id}
                  title={story.name}
                  description={story.story}
                  image={idx % 2 === 0 ? story.image : undefined}
                  href={`/courses`}
                  badge={story.role}
                  className="md:col-span-2 lg:col-span-2 md:row-span-1"
                  gradient={idx % 2 !== 0 ? (idx === 1 ? "bg-gradient-to-br from-purple-500/10 to-indigo-500/10" : "bg-gradient-to-br from-emerald-500/10 to-teal-500/10") : undefined}
                  stats={[
                    { label: 'Company', value: story.company },
                    { label: 'Outcome', value: story.results[0] },
                  ]}
                />
              ))}

              {/* Join the Hall of Fame Bento */}
              <div className="md:col-span-4 lg:col-span-6 md:row-span-1 rounded-[3rem] bg-muted/50 border-2 border-dashed border-border p-12 flex flex-col md:flex-row items-center justify-between gap-8 group overflow-hidden relative">
                 <div className="space-y-4 max-w-xl relative z-10">
                    <h3 className="text-3xl font-black tracking-tight">Become our next <span className="text-primary italic">Success Story.</span></h3>
                    <p className="text-muted-foreground text-lg">Don't just watch from the sidelines. Start building the career you deserve today.</p>
                 </div>
                 <Link href="/courses" className="relative z-10 inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-2xl font-black transition-all hover:shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap">
                    Start Learning <Zap className="h-5 w-5 fill-current text-primary" />
                 </Link>
                 <Users className="absolute -bottom-10 right-10 h-64 w-64 text-primary/5 transition-transform group-hover:-translate-x-10 duration-[2000ms]" />
              </div>

            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 border-t border-border">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-foreground text-background rounded-[4rem] p-12 sm:p-24 text-center space-y-12 relative overflow-hidden shadow-[0_0_100px_rgba(var(--primary),0.1)]">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
                 </div>
                 
                 <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <h2 className="text-5xl font-black tracking-tighter sm:text-7xl leading-tight">Ready to build your <span className="text-primary">future?</span></h2>
                    <p className="text-xl text-background/70 leading-relaxed max-w-2xl mx-auto">Join thousands of others who have transformed their lives with SkillForge. Your journey starts now.</p>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                       <Link href="/courses" className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:shadow-2xl hover:scale-105 active:scale-95">
                          Explore Catalog
                       </Link>
                       <Link href="/learning-paths" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:bg-white/20 active:scale-95">
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
