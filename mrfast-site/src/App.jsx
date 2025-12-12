import React, { useState, useEffect } from 'react';

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Projects', 'About', 'Contact'];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <button onClick={() => setCurrentPage('Home')} className="flex items-center gap-3 group">
          <div className="relative">
            <svg width="44" height="44" viewBox="0 0 100 100" className="transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
              <path d="M55 5 L25 50 L40 50 L35 95 L75 45 L55 45 L65 5 Z" fill="url(#bolt-gradient)" />
              <defs>
                <linearGradient id="bolt-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 bg-cyan-400/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-left">
            <div className="font-black text-white text-xl tracking-tight">MR. FAST</div>
            <div className="text-[10px] text-cyan-400 font-bold tracking-[0.3em]">DIGITAL MARKETING</div>
          </div>
        </button>
        
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`relative px-5 py-2 font-semibold text-sm tracking-wide transition-all duration-300 rounded-full ${
                currentPage === item 
                  ? 'text-black bg-cyan-400' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Animated Background Component
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow-delay" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full" />

  </div>
);

// Homepage Component
const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        <AnimatedBackground />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-sm font-medium text-white/80">Northeast Florida's Local Marketing Partner</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 animate-slide-up">
              <span className="block text-white">MARKETING</span>
              <span className="block text-white">THAT MOVES</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                FAST.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl leading-relaxed animate-slide-up-delay font-light">
              No account managers. No overpromising. No "set it and forget it" contracts. 
              Just honest work from someone who actually delivers.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up-delay-2">
              <button 
                onClick={() => setCurrentPage('Contact')}
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-1"
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button 
                onClick={() => setCurrentPage('Projects')}
                className="group px-8 py-4 rounded-full font-bold text-lg border-2 border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all hover:-translate-y-1"
              >
                See My Work
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-cyan-400 font-bold tracking-widest text-sm mb-4 block">WHAT I DO</span>
            <h2 className="text-4xl md:text-6xl font-black">
              Full-Service Digital
              <span className="block text-white/40">Marketing</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                icon: '🔍', 
                title: 'SEO & Local Search', 
                desc: 'Get found by customers actively searching for what you offer. Deep expertise in Northeast Florida local SEO—because I live here too.',
                gradient: 'from-emerald-500/20 to-teal-500/20'
              },
              { 
                icon: '📱', 
                title: 'Social Media Management', 
                desc: 'Strategic content that builds your brand and engages your community. Not just posts for the sake of posting—real strategy with real results.',
                gradient: 'from-pink-500/20 to-rose-500/20'
              },
              { 
                icon: '💻', 
                title: 'Web Design & Development', 
                desc: 'Clean, fast websites that convert visitors into customers. No cookie-cutter templates—built specifically for your business needs.',
                gradient: 'from-violet-500/20 to-purple-500/20'
              },
              { 
                icon: '🎬', 
                title: 'Video Production & AI Video', 
                desc: 'From concept to final cut—traditional video production, professional editing, plus cutting-edge generative AI video creation for next-level content.',
                gradient: 'from-orange-500/20 to-amber-500/20'
              },
            ].map((service, idx) => (
              <div 
                key={idx}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-cyan-400 font-bold tracking-widest text-sm mb-4 block">WHY WORK WITH ME</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Built for Local Business.
            </h2>
            <p className="text-2xl text-white/40 font-light">Run by a Fast Thinker.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Direct Access',
                desc: "Work directly with me—not an account manager who has to 'check with the team.'",
                icon: '👤',
                number: '01'
              },
              {
                title: 'Local Expert',
                desc: "I live in Ponte Vedra. I know your customers because they're my neighbors.",
                icon: '📍',
                number: '02'
              },
              {
                title: 'No Overpromising',
                desc: "I won't sell you magic beans. Honest expectations, real results, actual effort.",
                icon: '🤝',
                number: '03'
              },
              {
                title: 'Hands-On Work',
                desc: "No 'set it and forget it' here. I stay engaged and keep things moving.",
                icon: '⚡',
                number: '04'
              },
            ].map((prop, idx) => (
              <div key={idx} className="group text-center p-8">
                <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-300">{prop.icon}</div>
                <div className="text-cyan-400/50 font-mono text-sm mb-2">{prop.number}</div>
                <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                <p className="text-white/50 leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[40px] p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Move Fast?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                No long-term contracts. No inflated promises. Just a real conversation about what I can do for your business.
              </p>
              <button 
                onClick={() => setCurrentPage('Contact')}
                className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Get In Touch →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Projects Page Component
const ProjectsPage = () => {
  const projects = [
    {
      name: 'Best Yet Resume',
      status: 'Live',
      statusColor: 'bg-emerald-500',
      url: 'bestyetresume.com',
      description: 'AI-powered resume tailoring that helps job seekers optimize their applications ethically—improving keyword alignment and formatting without fabricating experience.',
      tags: ['React', 'AI Integration', 'Stripe Payments'],
      emoji: '📄'
    },
    {
      name: 'NanaBooks',
      status: 'Coming Soon',
      statusColor: 'bg-amber-500',
      url: 'nanabooks.com',
      description: "Transform grandmothers' life stories into beautifully illustrated children's storybooks. Preserving precious family memories for kids ages 3-8.",
      tags: ['Bubble.io', 'Claude AI', 'Print-on-Demand'],
      emoji: '📚'
    },
    {
      name: 'GrandpaBooks',
      status: 'Coming Soon',
      statusColor: 'bg-amber-500',
      url: 'grandpabooks.com',
      description: "The companion to NanaBooks—turning grandfathers' adventures and wisdom into magical storybooks for the next generation.",
      tags: ['Bubble.io', 'Claude AI', 'Print-on-Demand'],
      emoji: '📖'
    },
    {
      name: 'ReplyMed AI',
      status: 'In Development',
      statusColor: 'bg-cyan-500',
      url: null,
      description: 'AI-powered appointment booking for medspas. Instant, intelligent responses 24/7 across Instagram DMs, SMS, and email.',
      tags: ['Make.com', 'Claude AI', 'Zenoti Integration'],
      emoji: '🏥'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-cyan-400 font-bold tracking-widest text-sm mb-4 block">PORTFOLIO</span>
          <h1 className="text-5xl md:text-7xl font-black mb-4">Projects</h1>
          <p className="text-xl text-white/50 max-w-xl mx-auto">
            Products and platforms I'm building—from live applications to works in progress.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <span className={`${project.statusColor} text-black text-xs font-bold px-3 py-1 rounded-full`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {project.url && (
                    <a 
                      href={`https://${project.url}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 text-sm font-medium hover:underline mb-3 inline-block"
                    >
                      {project.url} ↗
                    </a>
                  )}
                  
                  <p className="text-white/60 leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="bg-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold tracking-widest text-sm mb-4 block">ABOUT</span>
          <h1 className="text-5xl md:text-7xl font-black mb-4">Jason Refling</h1>
          <p className="text-xl text-white/50">
            15+ years of marketing experience, now focused on helping small businesses grow.
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                My career started in film and television—working as an Assistant Director on 
                <span className="text-cyan-400"> "Ready or Not," </span> 
                a weekly Disney Channel series produced in Toronto. That's where I learned how to 
                coordinate multiple departments, keep complex productions on schedule, and communicate 
                effectively under pressure.
              </p>
              <p>
                From there, I transitioned to Disney's corporate side, spending years in product 
                development and promotional campaigns. I learned how the world's most iconic brand 
                thinks about storytelling and customer experience. Eventually, I worked with major 
                entertainment studios and Fortune 500 companies, managing high-value client relationships 
                and creative campaigns.
              </p>
              <p>
                Then came a decade at Ideal Image, where I served as Operations Manager for 4 franchise 
                locations. That experience taught me the reality of running a small business from behind 
                the scenes—wearing many hats to keep things running, from marketing and vendor management 
                to day-to-day operations. It's where I truly understood what local business owners face.
              </p>
              <p>
                After all those years, I realized something: small businesses deserve access to the 
                same strategic thinking and modern tools that big companies use—without the big 
                company price tag. That's why I launched 
                <span className="text-cyan-400"> Mr Fast Digital Marketing.</span>
              </p>
              <p>
                When you work with me, you get me—someone who actually picks up the phone and gets 
                things done. No account managers. No runaround. No overpromising or "set it and forget it" 
                contracts while I collect a check. I stay engaged, I do the work, and I keep it honest.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-10 text-center">
            <span className="text-cyan-400">Career</span> Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />
            
            {[
              { years: '2024 – Present', role: 'Founder', company: 'Mr Fast Digital Marketing', desc: 'Full-service digital marketing for Northeast Florida small businesses.' },
              { years: '2014 – 2024', role: 'Operations Manager', company: 'Ideal Image (4 Locations)', desc: 'Managed operations for 4 franchise locations—learned the reality of running a small business from behind the scenes.' },
              { years: '2002 – 2010', role: 'Account Executive', company: 'Beyond Zebra', desc: 'Led campaigns for Disney, Warner Bros., and Fortune 500 clients.' },
              { years: '1998 – 2002', role: 'Product Development', company: 'Disney Store & Promotional Products', desc: 'Developed products and promotional items for premium Disney properties.' },
              { years: '1996 – 1997', role: 'Assistant Director', company: '"Ready or Not" - Disney Channel', desc: 'Coordinated production departments for weekly TV series in Toronto.' },
            ].map((exp, idx) => (
              <div key={idx} className={`relative flex items-start gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1 md:-translate-x-1.5 mt-2 ring-4 ring-black" />
                
                <div className={`flex-1 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="text-cyan-400 font-mono text-sm mb-1">{exp.years}</div>
                  <div className="text-xl font-bold text-white">{exp.role}</div>
                  <div className="text-white/60 font-medium mb-2">{exp.company}</div>
                  <div className="text-white/40 text-sm">{exp.desc}</div>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-4 text-center">
            <span className="text-cyan-400">AI</span> Certifications
          </h2>
          <p className="text-center text-white/50 mb-10">University of North Florida</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'AI for Professionals Certificate',
              'AI Business Innovator',
              'AI for Enhanced Collaboration & Communication',
              'AI Exploration for Professionals',
            ].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <span className="text-white/80 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold mb-10 text-center">
            <span className="text-cyan-400">Skills</span> & Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'SEO & Local Search', 'Social Media Strategy', 'Content Creation', 
              'Video Production', 'Video Editing', 'AI Video Generation', 'Web Design', 
              'Email Marketing', 'AI Tools', 'Campaign Management', 'Brand Development'
            ].map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:border-cyan-400/50 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold tracking-widest text-sm mb-4 block">CONTACT</span>
          <h1 className="text-5xl md:text-7xl font-black mb-4">Let's Talk</h1>
          <p className="text-xl text-white/50 max-w-xl mx-auto">
            Have a project in mind? Questions about how I can help? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all hover:-translate-y-0.5"
                >
                  Send Message →
                </button>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/60">I'll be in touch soon—I respond FAST.</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-6">Direct Contact</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:jason@mrfastmarketing.com"
                  className="group flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400/50 hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Email</div>
                    <div className="text-cyan-400 font-medium">jason@mrfastmarketing.com</div>
                  </div>
                </a>

                <a 
                  href="tel:904-818-8228"
                  className="group flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400/50 hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Phone</div>
                    <div className="text-cyan-400 font-medium">904-818-8228</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-6">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Speedy Response</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Email or Call Me. Either way, I respond—FAST.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/40">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Ponte Vedra, FL • Northeast Florida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 100 100">
              <path d="M55 5 L25 50 L40 50 L35 95 L75 45 L55 45 L65 5 Z" fill="url(#bolt-footer)" />
              <defs>
                <linearGradient id="bolt-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div className="font-black tracking-tight">MR. FAST</div>
              <div className="text-[10px] text-cyan-400 tracking-[0.2em]">DIGITAL MARKETING</div>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm text-white/50">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => setCurrentPage(item)}
                className="hover:text-cyan-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="text-sm text-white/30">
            © 2025 Mr Fast Digital Marketing
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-white/5">
          <p className="text-white/30 text-sm">
            Built for Local Business. Run by a Fast Thinker.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function MrFastWebsite() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'Home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'Projects': return <ProjectsPage />;
      case 'About': return <AboutPage />;
      case 'Contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="antialiased">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
