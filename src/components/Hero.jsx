import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';

const ROLES = ['Full-Stack Developer', 'Android Developer', 'Data Enthusiast'];

const SOCIALS = [
  { icon: Github, href: 'https://github.com/anuragyadav7905', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/anuragyadav7905', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:anuragyadav7905@gmail.com', label: 'Email' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/5 w-[420px] h-[420px] bg-cyan-500/12 rounded-full filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-[380px] h-[380px] bg-purple-600/12 rounded-full filter blur-[100px] animate-blob animation-delay-4000" />
        <div className="absolute top-2/3 right-1/3 w-[300px] h-[300px] bg-blue-500/10 rounded-full filter blur-[80px] animate-blob animation-delay-6000" />

        {/* Dot grid */}
        <div className="absolute inset-0 grid-bg opacity-100" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/90" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">

        {/* Status badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass border border-indigo-500/25 mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-sm font-mono text-slate-300">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.1)} className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-5 tracking-tight">
          <span className="gradient-text">Anurag</span>
          <br />
          <span className="text-white">Singh Yadav</span>
        </motion.h1>

        {/* Role chips */}
        <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-2.5 mb-6">
          {ROLES.map((role) => (
            <span
              key={role}
              className="px-4 py-1.5 rounded-full text-sm font-medium glass border border-white/10 text-slate-300"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.3)} className="text-2xl md:text-3xl font-mono text-indigo-400 mb-4">
          "Ship fast, iterate faster."
        </motion.p>

        {/* Sub-tagline */}
        <motion.p {...fadeUp(0.35)} className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Building full-stack web apps, native Android experiences, and AI-powered systems — one commit at a time.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.45)} className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full glass border border-white/15 text-white font-semibold text-base hover:border-indigo-500/40 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.55)} className="flex justify-center gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full glass border border-white/10 text-slate-400 hover:text-indigo-300 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Terminal hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/5 text-slate-600 text-xs font-mono"
        >
          <Terminal size={12} />
          <span>git clone https://github.com/anuragyadav7905</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
      >
        <a href="#about" className="flex flex-col items-center gap-1.5">
          <span className="text-xs font-mono">scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
