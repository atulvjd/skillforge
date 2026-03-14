'use client';

import { ArrowRight, BookOpen, Zap, TrendingUp, CheckCircle, Star, Rocket, Target, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { learningPaths, courses } from '@/lib/mockData';

export default function LearningPathsPage() {
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
               <Target className="h-4 w-4" /> Career-First Education
            </div>
            <h1 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl max-w-5xl mx-auto leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Architect Your <span className="text-primary italic">Success.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Stop wandering through random tutorials. Our guided learning paths are blueprints designed by industry leads to take you from absolute zero to job-ready professional.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                <Link
                  href="/courses"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-primary px-10 py-5 font-black text-white transition-all hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] active:scale-95"
                >
                  Start Your Roadmap <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
          </div>
        </section>

        {/* Bento Learning Paths Grid */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 auto-rows-[300px]">
              
              {/* Featured Full Stack Path */}
              <BentoCard
                key={learningPaths[0].id}
                title={learningPaths[0].title}
                description={learningPaths[0].description}
                image={learningPaths[0].image}
                href={`/courses`}
                badge="Most Popular"
                className="md:col-span-4 lg:col-span-4 md:row-span-2"
                stats={[
                  { label: 'Total Duration', value: `${learningPaths[0].duration}h` },
                  { label: 'Skills Included', value: '12+' },
                  { label: 'Level', value: learningPaths[0].level },
                ]}
              />

              {/* Quick Win Feature */}
              <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-secondary rounded-[2.5rem] p-10 text-white flex flex-col justify-between group overflow-hidden">
                 <div className="relative z-10 flex justify-between items-start">
                    <Rocket className="h-10 w-10 text-white/80" />
                    <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Accelerated</span>
                 </div>
                 <h3 className="relative z-10 text-2xl font-black">Zero to Hired in 6 Months.</h3>
                 <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-white/10 rounded-full transition-transform group-hover:scale-150 duration-700" />
              </div>

              {/* Verification Feature */}
              <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-card rounded-[2.5rem] p-10 border border-border flex flex-col justify-between group overflow-hidden">
                 <div className="relative z-10 flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs">
                    <ShieldCheck className="h-5 w-5" /> Verified Curriculum
                 </div>
                 <p className="relative z-10 text-xl font-bold">Updated weekly to match the latest industry trends and tech stacks.</p>
                 <div className="absolute -top-10 -left-10 h-40 w-40 bg-primary/5 rounded-full transition-transform group-hover:scale-150 duration-700" />
              </div>

              {/* Other Paths */}
              {learningPaths.slice(1).map((path, idx) => (
                <BentoCard
                  key={path.id}
                  title={path.title}
                  description={path.description}
                  image={idx === 1 ? path.image : undefined}
                  href={`/courses`}
                  badge={path.level}
                  className="md:col-span-2 lg:col-span-2 md:row-span-1"
                  gradient={idx !== 1 ? (idx === 0 ? "bg-gradient-to-br from-purple-500/20 to-indigo-500/20" : "bg-gradient-to-br from-orange-500/20 to-red-500/20") : undefined}
                  stats={[
                    { label: 'Courses', value: `${path.courses.length}` },
                    { label: 'Duration', value: `${path.duration}h` },
                  ]}
                />
              ))}

              {/* New "Build Your Own" Bento */}
              <div className="md:col-span-4 lg:col-span-4 md:row-span-1 bg-foreground text-background rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 group overflow-hidden relative">
                 <div className="space-y-4 max-w-xl relative z-10">
                    <h3 className="text-3xl font-black tracking-tight">Custom <span className="text-primary italic">Roadmaps.</span></h3>
                    <p className="text-background/70 text-lg">Work with our career advisors to build a personalized learning path tailored to your specific background and dream role.</p>
                 </div>
                 <Link href="/contact" className="relative z-10 inline-flex items-center gap-3 bg-white text-foreground px-10 py-5 rounded-2xl font-black transition-all hover:shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap">
                    Build My Path <Zap className="h-5 w-5 fill-current text-primary" />
                 </Link>
                 <TrendingUp className="absolute -bottom-10 right-10 h-64 w-64 text-white/5 transition-transform group-hover:translate-x-10 group-hover:-translate-y-10 duration-[2000ms]" />
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Path Features (Bento Style) */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black tracking-tight mb-20 text-center">The SkillForge <span className="text-primary">Standard.</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 {
                   icon: <BookOpen className="h-10 w-10" />,
                   title: 'Cohesive Learning',
                   description: 'Courses within a path are designed to work together, ensuring no overlapping content or missing prerequisites.',
                   color: 'bg-blue-500'
                 },
                 {
                   icon: <TrendingUp className="h-10 w-10" />,
                   title: 'Progress Tracking',
                   description: 'Visualize your journey with detailed milestones. Know exactly what you know, and what you need to learn next.',
                   color: 'bg-emerald-500'
                 },
                 {
                   icon: <Zap className="h-10 w-10" />,
                   title: 'Capstone Projects',
                   description: 'Each path culminates in a significant, real-world project that proves your mastery to potential employers.',
                   color: 'bg-orange-500'
                 }
               ].map((feature, idx) => (
                 <div key={idx} className="bg-card rounded-[2.5rem] p-10 border border-border transition-all hover:shadow-2xl hover:-translate-y-2 group">
                    <div className={`h-16 w-16 rounded-2xl ${feature.color} text-white flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                       {feature.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-40">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
              <h2 className="text-5xl font-black tracking-tighter sm:text-7xl">Ready to <span className="text-primary italic">Transform?</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Join the 125,000+ students who have already accelerated their careers with SkillForge.</p>
              <div className="flex flex-wrap justify-center gap-6">
                 <Link href="/courses" className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] hover:scale-105 active:scale-95">
                    Explore All Paths
                 </Link>
                 <Link href="/success-stories" className="bg-foreground text-background px-12 py-5 rounded-2xl font-black text-lg transition-all hover:bg-foreground/90 active:scale-95">
                    Read Alumni Stories
                 </Link>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
