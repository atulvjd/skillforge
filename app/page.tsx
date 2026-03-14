'use client';

import { 
  ArrowRight, 
  Zap, 
  Users, 
  Award, 
  TrendingUp, 
  BookOpen, 
  Play, 
  CheckCircle, 
  Star,
  Globe,
  Monitor,
  Rocket
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { courses, instructors, testimonials, blogPosts, stats, learningPaths, successStories } from '@/lib/mockData';

export default function Home() {
  const featuredCourses = courses.slice(0, 5);
  const topInstructors = instructors.slice(0, 4);
  const featuredPaths = learningPaths.slice(0, 3);
  const recentBlogPosts = blogPosts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Header />

      {/* Hero Section - Bento Style Visuals */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Abstract background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            {/* Hero Text Content */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary animate-in fade-in slide-in-from-left-4 duration-1000">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Trusted by 125,000+ Students Globally
                </div>
                <h1 className="text-6xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  Master Skills That <span className="text-primary">Matter.</span>
                </h1>
                <p className="max-w-xl text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                  Join the elite 1% of tech professionals. Learn from industry giants and transform your career with our hands-on, expert-led curriculum.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                <Link
                  href="/courses"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-primary px-8 py-4 font-bold text-white transition-all hover:shadow-2xl hover:shadow-primary/40 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore All Courses <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 transition-opacity group-hover:opacity-20" />
                </Link>
                <Link
                  href="/learning-paths"
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-border bg-background px-8 py-4 font-bold transition-all hover:border-primary hover:bg-primary/5 hover:shadow-xl active:scale-95"
                >
                  View Learning Paths
                </Link>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                <div>
                  <p className="text-3xl font-black">{stats.totalStudents.toLocaleString()}+</p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Students</p>
                </div>
                <div>
                  <p className="text-3xl font-black">{stats.successRate}%</p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-black">{stats.averageRating}</p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Avg Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Bento Visuals */}
            <div className="lg:col-span-6 grid grid-cols-4 grid-rows-4 gap-4 h-[600px] animate-in fade-in zoom-in-95 duration-1000 delay-300">
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden border border-border group relative">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop" alt="Collaborative learning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2 text-white">
                    <div className="rounded-full bg-primary p-2">
                      <Play className="h-4 w-4 fill-current" />
                    </div>
                    <span className="font-bold">Live Mentorship</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-1 bg-primary/10 rounded-3xl border border-primary/20 flex flex-col items-center justify-center p-6 group transition-colors hover:bg-primary/20">
                <Users className="h-10 w-10 text-primary mb-2 transition-transform group-hover:scale-110" />
                <span className="text-sm font-black uppercase tracking-widest text-primary">Community</span>
              </div>
              <div className="col-span-2 row-span-2 bg-card rounded-3xl border border-border p-8 flex flex-col justify-between hover:shadow-2xl transition-all group">
                <div className="space-y-2">
                  <h4 className="font-black text-xl leading-tight">Project-Based Learning</h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">Build a real-world portfolio that gets you noticed by top tech companies.</p>
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-4 border-background bg-muted overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                  <div className="h-10 w-10 rounded-full border-4 border-background bg-primary flex items-center justify-center text-[10px] font-black text-white">+8K</div>
                </div>
              </div>
              <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden border border-border group relative">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop" alt="Code editor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Monitor className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="col-span-4 row-span-1 bg-gradient-to-r from-secondary to-accent rounded-3xl p-1 flex items-center">
                 <div className="w-full h-full bg-background/90 rounded-[22px] flex items-center justify-between px-8">
                    <span className="font-bold flex items-center gap-3">
                      <Rocket className="h-5 w-5 text-secondary" />
                      Career Roadmap 2024
                    </span>
                    <button className="text-sm font-black text-secondary hover:underline flex items-center gap-1">
                      Download PDF <ArrowRight className="h-4 w-4" />
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Bento Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-card/30 border-y border-border/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Curated for <span className="text-primary italic">Excellence.</span></h2>
              <p className="text-lg text-muted-foreground">Our curriculum is designed by engineers from Google, Meta, and Netflix to give you the skills that the industry actually demands.</p>
            </div>
            <Link href="/courses" className="flex items-center gap-2 font-black text-primary hover:gap-4 transition-all">
              Browse Catalog <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[250px]">
             {/* Large featured course */}
             <BentoCard
                key={featuredCourses[0].id}
                title={featuredCourses[0].title}
                description={featuredCourses[0].description}
                image={featuredCourses[0].image}
                href={`/courses/${featuredCourses[0].id}`}
                badge="Bestseller"
                rating={featuredCourses[0].rating}
                className="md:col-span-2 lg:col-span-3 md:row-span-2"
                stats={[
                  { label: 'Students', value: `${(featuredCourses[0].students / 1000).toFixed(1)}k` },
                  { label: 'Level', value: featuredCourses[0].level },
                ]}
             />
             
             {/* Medium height course */}
             <BentoCard
                key={featuredCourses[1].id}
                title={featuredCourses[1].title}
                description={featuredCourses[1].description}
                href={`/courses/${featuredCourses[1].id}`}
                badge={featuredCourses[1].category}
                rating={featuredCourses[1].rating}
                icon={<BookOpen />}
                className="md:col-span-2 lg:col-span-3 md:row-span-1"
                gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
             />

             {/* Small visual card */}
             <div className="md:col-span-2 lg:col-span-3 row-span-1 rounded-2xl bg-primary flex flex-col items-center justify-center p-8 text-white text-center group overflow-hidden relative">
                <div className="relative z-10 space-y-4">
                   <h3 className="text-3xl font-black">Join 500+ Alumni at Fortune 500s</h3>
                   <div className="flex justify-center gap-6 opacity-80 grayscale invert contrast-200">
                      <Globe className="h-10 w-10" />
                      <Monitor className="h-10 w-10" />
                      <Rocket className="h-10 w-10" />
                   </div>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-150 group-hover:rotate-12 duration-500">
                  <TrendingUp className="h-32 w-32" />
                </div>
             </div>

             {/* Smaller course cards */}
             {featuredCourses.slice(2, 5).map((course, idx) => (
                <BentoCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  href={`/courses/${course.id}`}
                  badge={course.level}
                  className={`md:col-span-2 lg:col-span-2 md:row-span-1`}
                  stats={[
                    { label: 'Students', value: `${(course.students / 1000).toFixed(1)}k` },
                    { label: 'Rating', value: `${course.rating}` },
                  ]}
                />
             ))}
          </div>
        </div>
      </section>

      {/* Learning Paths & Expert Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Learning Paths Column */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-black tracking-tight">Structured <span className="text-primary italic">Learning Paths.</span></h2>
                <p className="text-lg text-muted-foreground">Follow a guided roadmap designed to take you from zero to job-ready in months, not years.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 {featuredPaths.map((path, idx) => (
                    <BentoCard
                       key={path.id}
                       title={path.title}
                       description={path.description}
                       image={idx === 0 ? path.image : undefined}
                       gradient={idx !== 0 ? (idx === 1 ? "bg-gradient-to-br from-purple-500 to-indigo-500" : "bg-gradient-to-br from-orange-500 to-pink-500") : undefined}
                       badge={path.level}
                       href={`/learning-paths`}
                       className={idx === 0 ? "md:col-span-2 row-span-1" : "col-span-1 row-span-1"}
                       stats={[
                         { label: 'Courses', value: `${path.courses.length}` },
                         { label: 'Duration', value: `${path.duration}h` },
                       ]}
                    />
                 ))}
              </div>
            </div>

            {/* Expert Highlight Column */}
            <div className="lg:col-span-4 bg-muted/50 rounded-3xl p-10 border border-border flex flex-col justify-between">
              <div className="space-y-8">
                <div className="space-y-4">
                   <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                   </div>
                   <h3 className="text-3xl font-black">Taught by the Industry's Best.</h3>
                   <p className="text-muted-foreground">Our instructors aren't just teachers; they are builders, founders, and engineering leads at top-tier tech organizations.</p>
                </div>

                <div className="space-y-4">
                   {topInstructors.map(instructor => (
                     <div key={instructor.id} className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border transition-all hover:shadow-lg hover:-translate-y-1 group">
                        <img src={instructor.image} alt={instructor.name} className="h-12 w-12 rounded-full object-cover" />
                        <div className="flex-1">
                           <p className="font-bold">{instructor.name}</p>
                           <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">{instructor.expertise[0]}</p>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                           <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <Link href="/instructors" className="mt-12 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-border py-4 font-bold transition-all hover:bg-background hover:shadow-xl">
                 Meet All Instructors <Users className="h-5 w-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Success Stories Wall (Bento Grid) */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-foreground text-background overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">Join the Hall of <span className="text-primary">Success.</span></h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Real people. Real results. Our alumni work at companies that build the future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={story.id} className={`group bg-white/5 border border-white/10 rounded-[2rem] p-8 transition-all hover:bg-white/10 hover:border-white/20 ${idx === 1 ? 'lg:translate-y-12' : ''}`}>
                <div className="flex items-center gap-4 mb-8">
                   <div className="relative">
                      <img src={story.image} alt={story.name} className="h-16 w-16 rounded-full object-cover border-2 border-primary" />
                      <div className="absolute -bottom-1 -right-1 bg-primary text-white p-1 rounded-full">
                         <CheckCircle className="h-3 w-3 fill-current" />
                      </div>
                   </div>
                   <div>
                      <p className="text-xl font-bold text-white">{story.name}</p>
                      <p className="text-sm text-white/50">{story.role}</p>
                   </div>
                </div>
                
                <p className="text-lg leading-relaxed text-white/80 mb-8 italic">"{story.story}"</p>
                
                <div className="space-y-3">
                   {story.results.map((result, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm font-bold text-primary">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        {result}
                     </div>
                   ))}
                </div>
              </div>
            ))}
            
            {/* CTA inside story wall */}
            <div className="bg-primary rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative lg:translate-y-12">
               <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl font-black text-white leading-tight">Your story starts here.</h3>
                  <p className="text-white/80">Become the professional you've always wanted to be. Start your journey today.</p>
               </div>
               <Link href="/courses" className="relative z-10 inline-flex items-center justify-center gap-2 bg-white text-primary rounded-2xl py-4 font-black transition-all hover:shadow-2xl hover:scale-105 active:scale-95">
                  Get Started Now <Zap className="h-5 w-5" />
               </Link>
               <Star className="absolute -top-10 -right-10 h-64 w-64 text-white/10 transition-transform group-hover:rotate-12 duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Insights Bento (Blog) */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-black tracking-tight">Latest <span className="text-primary italic">Insights.</span></h2>
            <Link href="/blog" className="font-bold text-muted-foreground hover:text-primary transition-colors">Read All Articles</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 auto-rows-[300px]">
             <BentoCard
                key={recentBlogPosts[0].id}
                title={recentBlogPosts[0].title}
                description={recentBlogPosts[0].excerpt}
                image={recentBlogPosts[0].image}
                href={`/blog/${recentBlogPosts[0].id}`}
                badge={recentBlogPosts[0].category}
                className="md:col-span-2 md:row-span-2"
                stats={[
                  { label: 'Read Time', value: `${recentBlogPosts[0].readTime} min` },
                  { label: 'Date', value: recentBlogPosts[0].date },
                ]}
             />
             
             {recentBlogPosts.slice(1, 4).map((post, idx) => (
                <BentoCard
                  key={post.id}
                  title={post.title}
                  description={post.excerpt}
                  href={`/blog/${post.id}`}
                  badge={post.category}
                  className="md:col-span-2 lg:col-span-2 md:row-span-1"
                  stats={[
                    { label: 'Read Time', value: `${post.readTime} min` },
                  ]}
                  gradient={idx % 2 === 0 ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20" : "bg-gradient-to-br from-orange-500/20 to-red-500/20"}
                />
             ))}
             
             <div className="md:col-span-2 lg:col-span-2 bg-muted/30 rounded-3xl border-2 border-dashed border-border flex flex-col items-center justify-center p-8 text-center space-y-4">
                <Globe className="h-10 w-10 text-muted-foreground" />
                <h4 className="font-bold text-xl">Join our Newsletter</h4>
                <p className="text-sm text-muted-foreground">Get the latest tech trends and course updates delivered to your inbox.</p>
                <div className="flex w-full gap-2">
                   <input type="email" placeholder="email@example.com" className="flex-1 bg-background border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                   <button className="bg-primary text-white rounded-xl px-4 py-2 font-bold text-sm">Join</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[3rem] bg-foreground p-12 sm:p-20 text-center text-background">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-5xl font-black tracking-tighter sm:text-7xl leading-tight">Ready to build your <span className="text-primary">future?</span></h2>
              <p className="text-xl text-background/70 leading-relaxed">Don't wait for the "right time". The best time to start was yesterday. The second best time is now.</p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/courses"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-primary px-10 py-5 font-black text-white transition-all hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] active:scale-95"
                >
                  Get Started For Free <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/20 bg-white/5 px-10 py-5 font-black text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
                >
                  Talk to an Advisor
                </Link>
              </div>

              <div className="pt-10 flex flex-wrap justify-center gap-8 text-white/40 font-bold uppercase tracking-widest text-xs">
                <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 7-Day Money Back</span>
                <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Lifetime Access</span>
                <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Certificate of Completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
