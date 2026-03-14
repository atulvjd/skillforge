'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { instructors } from '@/lib/mockData';
import { Award, Star, Users, MessageSquare, Zap, Globe, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function InstructorsPage() {
  const featuredInstructor = instructors[0];
  const otherInstructors = instructors.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-32">
          <div className="absolute top-0 right-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 h-96 w-96 bg-secondary/5 rounded-full blur-3xl -ml-48 -mb-48" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">
                 <Users className="h-4 w-4" /> Global Expert Network
              </div>
              <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-6">
                Learn from the <span className="text-primary italic">Best.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Our instructors are active practitioners at top-tier companies. They don't just teach code; they teach the professional standards of the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Instructors Bento Grid */}
        <section className="py-24 sm:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 auto-rows-[300px]">
              
              {/* Featured Mentor of the Month */}
              <div className="md:col-span-4 lg:col-span-4 md:row-span-2 rounded-[3rem] overflow-hidden bg-foreground text-background group relative border border-white/10">
                 <div className="absolute inset-0 z-0">
                    <img src={featuredInstructor.image} alt={featuredInstructor.name} className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
                 </div>
                 
                 <div className="relative z-10 h-full p-10 flex flex-col justify-end gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white">
                       Instructor of the Month
                    </div>
                    <div className="space-y-2">
                       <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{featuredInstructor.name}</h2>
                       <p className="text-xl text-white/70 max-w-lg">{featuredInstructor.bio}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10">
                       <div>
                          <p className="text-2xl font-black text-white">{featuredInstructor.rating}</p>
                          <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Avg Rating</p>
                       </div>
                       <div>
                          <p className="text-2xl font-black text-white">{(featuredInstructor.students / 1000).toFixed(1)}k+</p>
                          <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Active Students</p>
                       </div>
                       <div className="flex items-center gap-4 ml-auto">
                          <Link href={`/instructors/${featuredInstructor.id}`} className="rounded-2xl bg-white text-foreground px-8 py-4 font-black transition-all hover:scale-105 active:scale-95">
                             View Portfolio
                          </Link>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Quick Stats Bento */}
              <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-primary rounded-[2rem] p-8 text-white flex flex-col justify-between group overflow-hidden">
                 <div className="relative z-10 flex justify-between items-start">
                    <Award className="h-10 w-10 text-white/80" />
                    <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Elite Badge</span>
                 </div>
                 <h3 className="relative z-10 text-2xl font-black">All instructors verified by industry.</h3>
                 <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white/10 rounded-full transition-transform group-hover:scale-150 duration-700" />
              </div>

              <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-card rounded-[2rem] p-8 border border-border flex flex-col justify-between group overflow-hidden">
                 <div className="relative z-10 flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                    <MessageSquare className="h-4 w-4" /> 1-on-1 Mentorship
                 </div>
                 <p className="relative z-10 text-lg font-bold">Access to private Slack communities and live Q&A sessions.</p>
                 <div className="absolute -top-10 -left-10 h-40 w-40 bg-primary/5 rounded-full transition-transform group-hover:scale-150 duration-700" />
              </div>

              {/* Grid of other instructors */}
              {otherInstructors.map((instructor, idx) => (
                <BentoCard
                  key={instructor.id}
                  title={instructor.name}
                  description={instructor.bio}
                  image={idx % 2 === 0 ? instructor.image : undefined}
                  href={`/instructors/${instructor.id}`}
                  badge={instructor.expertise[0]}
                  className="md:col-span-2 lg:col-span-2 md:row-span-1"
                  gradient={idx % 2 !== 0 ? (idx === 1 ? "bg-gradient-to-br from-purple-500/20 to-indigo-500/20" : "bg-gradient-to-br from-emerald-500/20 to-teal-500/20") : undefined}
                  stats={[
                    { label: 'Rating', value: `${instructor.rating} ★` },
                    { label: 'Students', value: `${(instructor.students / 1000).toFixed(1)}k` },
                  ]}
                />
              ))}

              {/* Call to Action for new instructors */}
              <div className="md:col-span-4 lg:col-span-6 md:row-span-1 rounded-[2.5rem] bg-muted/50 border-2 border-dashed border-border p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">
                 <div className="space-y-4 max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-black tracking-tight">Become an <span className="text-primary italic">Instructor.</span></h3>
                    <p className="text-muted-foreground text-lg">Share your knowledge with a global community and build your personal brand as an industry leader.</p>
                 </div>
                 <Link href="/apply" className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-2xl font-black transition-all hover:shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap">
                    Apply to Teach <Zap className="h-5 w-5 fill-current text-primary" />
                 </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Trust/Social Section */}
        <section className="py-24 border-t border-border">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h3 className="text-sm font-black text-muted-foreground uppercase tracking-[0.3em] mb-12">Instructors from the world's best companies</h3>
              <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale contrast-150">
                 <span className="text-2xl font-black">AIRBNB</span>
                 <span className="text-2xl font-black">GOOGLE</span>
                 <span className="text-2xl font-black">APPLE</span>
                 <span className="text-2xl font-black">SPOTIFY</span>
                 <span className="text-2xl font-black">TESLA</span>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
