'use client';

import { ArrowRight, Award, Zap } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BentoCard } from '@/components/BentoCard';
import { certifications } from '@/lib/mockData';

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/10 to-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary">Professional Certifications</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  Earn Industry-Recognized Certificates
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Boost your career with credentials that employers value. Our certifications are recognized by leading companies worldwide and validate your expertise.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
                  >
                    Start Learning <ArrowRight className="h-5 w-5" />
                  </Link>
                  <button className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold transition-all hover:border-primary hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Certified Students</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Companies Hiring</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-8 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Jobs Filled</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Available Certifications</h2>
              <p className="text-lg text-muted-foreground">Choose from our suite of professionally recognized certifications</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-[350px]">
              {certifications.map((cert, idx) => (
                <div key={cert.id} className="group relative rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 z-0"
                    style={{
                      backgroundImage: `url(${cert.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                    <div>
                      <div className="mb-4 inline-block rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                        {cert.duration}
                      </div>
                      <h3 className="text-xl font-bold leading-tight mb-2">{cert.name}</h3>
                      <p className="text-sm text-gray-200 line-clamp-2">{cert.description}</p>
                    </div>

                    <div>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {cert.skills.slice(0, 2).map((skill) => (
                          <span key={skill} className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 2 && (
                          <span className="inline-block text-xs text-gray-300">+{cert.skills.length - 2} more</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-white/20">
                        <span className="text-2xl font-bold">${cert.price}</span>
                        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold transition-all hover:bg-primary/90">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 bg-card/50 border-y border-border">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Get Certified?</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Award className="h-8 w-8" />,
                  title: 'Career Advancement',
                  description: 'Certifications validate your skills and help you advance to senior roles with higher compensation.',
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: 'Industry Recognition',
                  description: 'Earn credentials recognized by leading companies and industry bodies worldwide.',
                },
                {
                  icon: <ArrowRight className="h-8 w-8" />,
                  title: 'Job Placement',
                  description: 'Our certification holders have access to our job board with 1000+ active listings.',
                },
              ].map((benefit, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-background p-8 transition-all hover:shadow-lg">
                  <div className="mb-4 rounded-lg bg-primary/10 w-fit p-3 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-12 sm:p-16 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">Start Your Certification Journey</h2>
              <p className="mb-8 text-lg text-white/90">Choose your path and join thousands of certified professionals.</p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-white text-primary px-8 py-3 font-semibold transition-all hover:shadow-lg hover:scale-105"
              >
                Explore Certifications <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
