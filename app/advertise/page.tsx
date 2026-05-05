"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  BarChart3, 
  Target, 
  Mail, 
  Layout, 
  Megaphone, 
  Newspaper, 
  Share2, 
  MessageSquareQuote,
  ArrowRight,
  Download,
  Send,
  CheckCircle2
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/footer";

export default function AdvertisePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    setSubmitted(true);
  };
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: "50,000+",
      label: "Unique Monthly Visitors",
      description: "A highly targeted audience of professionals."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      value: "200,000+",
      label: "Monthly Page Views",
      description: "Consistent engagement across our platform."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      value: "Decision-makers",
      label: "Engineers & Tech Enthusiasts",
      description: "Reach the people who make the buying decisions."
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      value: "10,000+",
      label: "Active Newsletter Subscribers",
      description: "Direct access to our community's inbox."
    }
  ];

  const options = [
    {
      icon: <Layout className="w-6 h-6 text-primary" />,
      title: "Banner Ads",
      description: "High-visibility display advertising across our most visited pages and category sections."
    },
    {
      icon: <Newspaper className="w-6 h-6 text-primary" />,
      title: "Sponsored Content",
      description: "Custom articles and features that showcase your products and expertise to our audience."
    },
    {
      icon: <Megaphone className="w-6 h-6 text-primary" />,
      title: "Newsletter Features",
      description: "Dedicated slots in our weekly newsletter reaching thousands of active subscribers."
    },
    {
      icon: <Share2 className="w-6 h-6 text-primary" />,
      title: "Social Media Promotion",
      description: "Strategic posts across our social channels to amplify your brand presence."
    }
  ];

  const testimonials = [
    {
      quote: "Partnering with Engitech Expo has significantly increased our brand visibility within the engineering sector. Their audience is exactly who we need to reach.",
      name: "Sanjay Patel",
      title: "Marketing Director",
      company: "Precision Tech Solutions"
    },
    {
      quote: "The quality of leads from our sponsored content on Engitech Expo was exceptional. It's a must-have platform for B2B engineering brands.",
      name: "Anita Sharma",
      title: "Brand Manager",
      company: "Innovate Engineering Corp"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-foreground),transparent)] opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Megaphone className="w-3 h-3" />
            <span>Partnership Opportunities</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Grow Your Brand with <span className="text-primary italic">Engitech Expo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Connect with thousands of industry professionals and decision-makers in the engineering and technology sector. Reach your target audience where they discover innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-400">
            <Link 
              href="#contact"
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="w-full sm:w-auto border border-primary text-primary px-8 py-4 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download Media Kit
            </button>
          </div>
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Platform in Numbers</h2>
            <p className="text-muted-foreground">The data behind our growing influence in the industry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="bg-background p-8 border border-border hover:border-primary transition-colors group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 text-foreground">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{stat.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Advertising Options</h2>
              <p className="text-muted-foreground">Choose the format that best aligns with your marketing goals and budget.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-border mx-8 mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {options.map((option, i) => (
              <div key={i} className="group relative bg-background p-8 border border-border overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/5 text-primary rounded-none group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{option.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-primary-foreground/70">What our partners say about working with Engitech Expo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="relative p-8 bg-white/10 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
                <MessageSquareQuote className="absolute top-4 right-4 w-12 h-12 text-white/10" />
                <p className="text-lg italic mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-sm text-primary-foreground/70">{t.title}, {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background border border-border shadow-2xl flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/3 bg-secondary p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our advertising team will get back to you with a customized proposal within 24 hours.
                </p>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>ads@engitechexpo.com</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Request Received!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest. Our advertising team will review your request and contact you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-bold text-sm uppercase tracking-widest hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Company Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Website URL</label>
                    <input 
                      required
                      type="url" 
                      placeholder="https://company.com" 
                      className="w-full bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">How can we help you?</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder="Tell us about your advertising goals..." 
                      className="w-full bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button className="w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group">
                    Request a Quote
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
