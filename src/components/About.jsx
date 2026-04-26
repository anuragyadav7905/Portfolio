import { motion } from 'framer-motion';
import { Puzzle, Lightbulb, Users, Cpu, Smartphone, Globe } from 'lucide-react';

const STRENGTHS = [
  {
    icon: Puzzle,
    title: 'Problem Solving',
    desc: 'Breaking down complex challenges into clean, elegant solutions.',
    accent: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    desc: 'Bringing fresh perspectives and innovative ideas to every build.',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Users,
    title: 'Leadership',
    desc: 'Taking initiative, guiding teams, and shipping projects that matter.',
    accent: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
];

const DOMAINS = [
  { icon: Globe, label: 'Web', desc: 'MERN Stack, REST APIs, deployment' },
  { icon: Smartphone, label: 'Android', desc: 'Java, Kotlin, Firebase' },
  { icon: Cpu, label: 'AI / Data', desc: 'R, Tableau, ML pipelines' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-indigo-400 text-sm mb-3 block tracking-widest uppercase">// who I am</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm <span className="text-white font-semibold">Anurag Singh Yadav</span> — a full-stack developer, Android developer, and data enthusiast who loves working across the entire stack, from mobile experiences to AI-powered web platforms.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I bring a <span className="text-indigo-300">builder's mindset</span> to everything: ship something real, learn fast, iterate hard. Whether it's an OCR + AI answer app, a real-time ocean visualization system, or a developer productivity tool — I focus on projects that solve genuine problems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently exploring <span className="text-cyan-400">on-device AI</span> with Gemma, agentic Android development, and designing backend systems that scale without drama.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {['Open to Work', 'Building in Public', 'Always Learning', 'Ship Fast'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-mono bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                  {tag}
                </span>
              ))}
            </div>

            {/* Domains */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {DOMAINS.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="p-4 rounded-xl glass border border-white/8 text-center hover:border-indigo-500/30 transition-colors">
                  <Icon size={20} className="text-indigo-400 mx-auto mb-2" />
                  <div className="text-white text-sm font-semibold">{label}</div>
                  <div className="text-slate-500 text-xs mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Strengths */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {STRENGTHS.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={itemAnim}
                  className={`flex items-start gap-5 p-6 rounded-2xl glass border ${s.border} glow-card`}
                >
                  <div className={`shrink-0 p-3 rounded-xl ${s.bg}`}>
                    <Icon size={22} className={s.accent} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1.5">{s.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Stats */}
            <motion.div
              variants={itemAnim}
              className="grid grid-cols-3 gap-4 p-6 rounded-2xl glass border border-white/8"
            >
              {[
                { label: 'Projects', value: '9+' },
                { label: 'Languages', value: '6+' },
                { label: 'Domains', value: '3' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-black gradient-text mb-1">{value}</div>
                  <div className="text-slate-500 text-xs font-mono">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
