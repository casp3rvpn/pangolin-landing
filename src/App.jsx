import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Mail, 
  Send, 
  Linkedin, 
  Github,
  ChevronRight,
  Zap,
  ShieldCheck,
  Users,
  ExternalLink,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-all">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Pangolin<span className="text-blue-500">Dev</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-blue-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-blue-400 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-blue-400 transition-colors">Process</button>
              <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium hover:text-blue-400 transition-colors">Benefits</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
              >
                Let's Talk
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-800 rounded-md">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-800 rounded-md">Portfolio</button>
              <button onClick={() => scrollToSection('process')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-800 rounded-md">Process</button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-800 rounded-md">Benefits</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-3 text-base font-medium text-blue-400 hover:bg-slate-800 rounded-md">Contact Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Open to new projects</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Building Complex <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">IT Solutions for Business</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
            Full-cycle development: from MVP to Enterprise systems. We turn your ideas into reliable code, scalable architecture, and real profit.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2"
            >
              Get an Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 rounded-xl text-lg font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center"
            >
              Our Work
            </button>
          </div>

          {/* Tech Stack Preview */}
          <div className="mt-20 pt-10 border-t border-slate-800/50">
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider font-semibold">Powered by modern stack</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['React', 'Node.js', 'Python', 'Flutter', 'PostgreSQL', 'AWS'].map((tech) => (
                <span key={tech} className="text-xl font-bold text-slate-400 hover:text-white transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Zap className="w-8 h-8 text-yellow-400" />}
              title="Development Speed"
              desc="MVP launch in 4-8 weeks. Fast start allows you to test hypotheses and start earning sooner."
            />
            <BenefitCard 
              icon={<ShieldCheck className="w-8 h-8 text-green-400" />}
              title="Code Quality"
              desc="Strict TypeScript, testing, Code Review, and CI/CD pipelines. We write code that is easy to maintain and scale."
            />
            <BenefitCard 
              icon={<Users className="w-8 h-8 text-blue-400" />}
              title="Transparency"
              desc="Daily reports, Jira/Trello access, weekly demos. You always know the project status."
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We handle all technical aspects so you can focus on business growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Globe className="w-10 h-10 text-blue-500" />}
              title="Web Development"
              features={['Corporate portals', 'SaaS solutions', 'SPA & PWA', 'E-commerce platforms']}
            />
            <ServiceCard 
              icon={<Smartphone className="w-10 h-10 text-purple-500" />}
              title="Mobile Development"
              features={['iOS & Android (Flutter/RN)', 'Store publication', 'Performance optimization', 'Adaptive UI/UX']}
            />
            <ServiceCard 
              icon={<Database className="w-10 h-10 text-emerald-500" />}
              title="Backend & DevOps"
              features={['Microservices', 'High-load architecture', 'Cloud solutions (AWS/GCP)', 'CI/CD setup']}
            />
            <ServiceCard 
              icon={<Code2 className="w-10 h-10 text-pink-500" />}
              title="Outstaffing"
              features={['Team augmentation', 'Middle/Senior developers', 'Fast onboarding', 'Transparent hour tracking']}
            />
             <ServiceCard 
              icon={<Users className="w-10 h-10 text-orange-500" />}
              title="IT Consulting"
              features={['Architecture audit', 'Tech stack selection', 'Timeline & budget estimation', 'Technical specification']}
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-10 h-10 text-cyan-500" />}
              title="Support & QA"
              features={['24/7 monitoring', 'Manual & Auto testing', 'Legacy refactoring', 'SLA guarantees']}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
              <Code2 size={16} />
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Portfolio</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Real problems we've solved for our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Burger King Unified Platform"
              category="FoodTech / Enterprise"
              description="A unified digital platform to power mobile, kiosk, and delivery experiences across multiple regions. Centralized orders, menus, and payments."
              impact={['+15% delivery order volume', '-20% food waste', 'Zero downtime during holidays']}
              tags={['High-load', 'Mobile', 'Kiosks']}
              color="text-orange-500"
            />
            <ProjectCard 
              title="Lendflow Infrastructure"
              category="Fintech / SaaS"
              description="Embedded lending platform for vertical-specific SaaS. We accelerated development to help them onboard new financial partners faster."
              impact={['-30% integration time', '40% improved reliability', 'Scalable architecture']}
              tags={['Fintech', 'SaaS', 'API']}
              color="text-blue-500"
            />
            <ProjectCard 
              title="Dodo Pizza AI Inventory"
              category="Retail / AI"
              description="AI-powered inventory system to predict demand in real-time and automate restocking across a large franchise network."
              impact={['Accurate demand forecasting', 'Reduced stock shortages', 'Automated supply chain']}
              tags={['AI', 'Predictive Analytics', 'Retail']}
              color="text-amber-500"
            />
            <ProjectCard 
              title="Credit Fraud Detection"
              category="Security / AI"
              description="Cloud-based fraud detection platform for a European credit aggregator. Real-time analysis of loan applications using ML."
              impact={['35% reduction in fraud', 'Faster credit approvals', 'Real-time monitoring']}
              tags={['Machine Learning', 'Security', 'Cloud']}
              color="text-emerald-500"
            />
             <ProjectCard 
              title="HealthMatch Patient Portal"
              category="Healthcare / HIPAA"
              description="Secure patient portal for appointment scheduling and telemedicine. Fully compliant with HIPAA and GDPR regulations."
              impact={['Secure data encryption', 'Telemedicine integration', '24/7 patient access']}
              tags={['Healthcare', 'React Native', 'WebRTC']}
              color="text-red-500"
            />
            <ProjectCard 
              title="Logistics Fleet Manager"
              category="Logistics / IoT"
              description="Real-time fleet tracking dashboard with IoT sensor integration for temperature monitoring and route optimization."
              impact={['-15% fuel costs', 'Real-time cargo tracking', 'Driver behavior analytics']}
              tags={['IoT', 'Google Maps API', 'Big Data']}
              color="text-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How We Work</h2>
              <p className="text-slate-400 mb-8 text-lg">
                We work using Agile/Scrum methodology. This allows us to react flexibly to market changes and requirements during development while maintaining budget control.
              </p>
              
              <div className="space-y-6">
                <ProcessStep number="01" title="Analytics & Estimation" desc="Diving into business goals, creating technical specs and estimates." />
                <ProcessStep number="02" title="Design & Prototyping" desc="Creating UI/UX mockups, approving interface logic." />
                <ProcessStep number="03" title="Development Sprints" desc="Coding in 2-week iterations. Demo results at the end of each sprint." />
                <ProcessStep number="04" title="Release & Support" desc="Launch assistance, monitoring, and feature development." />
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>
               <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                 <div className="space-y-6">
                   <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                     <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     <span className="text-xs text-slate-500">project_dashboard.tsx</span>
                   </div>
                   
                   <div className="space-y-4">
                     <div className="h-2 w-1/3 bg-slate-800 rounded"></div>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="h-24 bg-slate-800/50 rounded border border-slate-800 p-4">
                         <div className="h-2 w-8 bg-blue-500/50 rounded mb-2"></div>
                         <div className="h-8 w-16 bg-slate-700 rounded"></div>
                       </div>
                       <div className="h-24 bg-slate-800/50 rounded border border-slate-800 p-4">
                         <div className="h-2 w-8 bg-purple-500/50 rounded mb-2"></div>
                         <div className="h-8 w-16 bg-slate-700 rounded"></div>
                       </div>
                     </div>
                     <div className="h-32 bg-slate-800/30 rounded border border-slate-800 flex items-center justify-center text-slate-600 text-sm">
                       Architecture Diagram Preview
                     </div>
                   </div>
                   
                   <div className="pt-4 flex justify-between items-center">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-[10px]">Dev</div>
                        ))}
                      </div>
                      <span className="text-xs text-green-400 font-mono">Build Passing</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to discuss your project?</h2>
              <p className="text-slate-400">Leave a request, and we will contact you within one business day for a free consultation and estimate.</p>
            </div>

            <ContactForm />
            
            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-slate-400">
              <a href="mailto:v.kozlov@pangolindev.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={18} />
                v.kozlov@pangolindev.com
              </a>
              <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                NDA on request
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="text-blue-600 w-5 h-5" />
                <span className="font-bold text-xl text-white">PangolinDev</span>
              </div>
              <p className="text-slate-500 text-sm">Professional web and mobile development.</p>
            </div>
            
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
            
            <div className="text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} PangolinDev. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components

function ProjectCard({ title, category, description, impact, tags, color }) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all hover:shadow-xl group flex flex-col">
      <div className="p-8 flex-1">
        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${color}`}>{category}</div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-slate-400 mb-6">{description}</p>
        
        <div className="mb-6 space-y-2">
          {impact.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-slate-300">
              <TrendingUp size={16} className={`mt-0.5 ${color}`} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-slate-950/50 p-6 border-t border-slate-800">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all hover:shadow-lg group">
      <div className="mb-6 bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function ServiceCard({ icon, title, features }) {
  return (
    <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:bg-slate-900 transition-colors group">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-400">
            <CheckCircle2 className="w-5 h-5 text-blue-500/50 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-6 border-t border-slate-800/50 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
        Learn more <ChevronRight size={16} />
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-500 font-bold border border-slate-700">
        {number}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/mdalkqan', {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          console.error(data.errors.map(error => error.message).join(", "));
        }
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400">Thanks for reaching out. We will contact you at {formState.email || 'your email'} shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-slate-500 hover:text-white underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">About Project</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formState.message}
          onChange={handleChange}
          className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          placeholder="We need to develop a mobile app for..."
        ></textarea>
      </div>

      {status === 'error' && (
         <div className="text-red-500 text-sm text-center">
            Oops! There was a problem submitting your form. Please try again later.
         </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/25 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Request
            <Send size={18} />
          </>
        )}
      </button>
      
      <p className="text-center text-xs text-slate-500">
        By clicking the button, you agree to our Privacy Policy.
      </p>
    </form>
  );
}
