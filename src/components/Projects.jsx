import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Sparkles } from 'lucide-react';

const GITHUB = 'https://github.com/anuragyadav7905';

const PROJECTS = [
  {
    name: 'Ocean Intelligence',
    slug: 'ocean-intelligence',
    desc: 'AI-powered ocean intelligence system with real-time data visualization. Built with React on the frontend and Flask for the AI/ML backend pipeline.',
    tags: ['React', 'Flask', 'Python', 'AI', 'Data Viz'],
    category: 'Web · AI',
    featured: true,
    gradient: 'from-cyan-600/20 via-blue-600/15 to-indigo-600/10',
    border: 'border-cyan-500/25',
    accent: 'text-cyan-400',
    dot: 'bg-cyan-400',
  },
  {
    name: 'OCR + ChatGPT Answer App',
    slug: null,
    desc: 'Native Android app that captures on-screen text using OCR and feeds it to the ChatGPT API to generate intelligent answers — instantly. A genuine AI-meets-mobile showcase.',
    tags: ['Java', 'Android', 'OCR', 'ChatGPT API', 'Firebase'],
    category: 'Android · AI',
    featured: true,
    gradient: 'from-purple-600/20 via-violet-600/15 to-pink-600/10',
    border: 'border-purple-500/25',
    accent: 'text-purple-400',
    dot: 'bg-purple-400',
  },
  {
    name: 'AInterview',
    slug: 'AInterview',
    desc: 'Interview preparation platform with curated resources, practice questions, and progress tracking for developers gearing up for placements.',
    tags: ['JavaScript', 'React', 'Web'],
    category: 'Web',
    featured: false,
    gradient: 'from-indigo-600/15 to-purple-600/10',
    border: 'border-indigo-500/20',
    accent: 'text-indigo-400',
    dot: 'bg-indigo-400',
  },
  {
    name: 'todo',
    slug: 'todo',
    desc: 'Minimal yet powerful task management dashboard — dark mode, real-time statistics, and a clean developer-first UI. Built in TypeScript.',
    tags: ['TypeScript', 'React', 'Dark Mode'],
    category: 'Web',
    featured: false,
    gradient: 'from-emerald-600/15 to-teal-600/10',
    border: 'border-emerald-500/20',
    accent: 'text-emerald-400',
    dot: 'bg-emerald-400',
  },
  {
    name: 'DevSpace',
    slug: 'DevSpace',
    desc: 'A personal developer workspace for organizing projects, tools, and resources in one productivity-focused environment.',
    tags: ['JavaScript', 'Productivity'],
    category: 'Web',
    featured: false,
    gradient: 'from-orange-600/15 to-amber-600/10',
    border: 'border-orange-500/20',
    accent: 'text-orange-400',
    dot: 'bg-orange-400',
  },
  {
    name: 'Gym Progress Tracker',
    slug: null,
    desc: 'Native Android app for logging and tracking gym workouts over time with Firebase for persistent, real-time data syncing across sessions.',
    tags: ['Java', 'Android', 'Firebase'],
    category: 'Android',
    featured: false,
    gradient: 'from-yellow-600/15 to-amber-600/10',
    border: 'border-yellow-500/20',
    accent: 'text-yellow-400',
    dot: 'bg-yellow-400',
  },
  {
    name: 'Food Delivery App (E8)',
    slug: null,
    desc: 'Android food delivery app with modern UI, order management, and real-time order status — a full-featured CRUD app with Firebase backend.',
    tags: ['Java', 'Android', 'Firebase', 'UI/UX'],
    category: 'Android',
    featured: false,
    gradient: 'from-rose-600/15 to-pink-600/10',
    border: 'border-rose-500/20',
    accent: 'text-rose-400',
    dot: 'bg-rose-400',
  },
  {
    name: 'Strivers A2Z DSA',
    slug: 'Strivers-A2Z-DSA',
    desc: 'Comprehensive DSA solutions following the Strivers A2Z sheet. Clean, well-structured Java implementations — great reference for placement prep.',
    tags: ['Java', 'DSA', 'Algorithms'],
    category: 'DSA',
    featured: false,
    gradient: 'from-red-600/15 to-orange-600/10',
    border: 'border-red-500/20',
    accent: 'text-red-400',
    dot: 'bg-red-400',
  },
  {
    name: 'Bingooo2',
    slug: 'Bingooo2',
    desc: 'A Java-based project exploring game mechanics and backend logic — a fun dive into object-oriented design and state management.',
    tags: ['Java', 'Game Logic'],
    category: 'Java',
    featured: false,
    gradient: 'from-slate-600/15 to-gray-600/10',
    border: 'border-slate-500/20',
    accent: 'text-slate-400',
    dot: 'bg-slate-400',
  },
];

function ProjectCard({ project, index, featured }) {
  const delay = index * 0.08;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative p-6 rounded-2xl glass border ${project.border} glow-card
        bg-gradient-to-br ${project.gradient}
        ${featured ? 'p-7' : ''}
      `}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          {featured && (
            <div className="flex items-center gap-1.5 mb-2">
              <Star size={12} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-mono text-yellow-400 font-semibold">Featured</span>
            </div>
          )}
          <h3 className={`font-bold text-white leading-tight ${featured ? 'text-xl' : 'text-base'}`}>
            {project.name}
          </h3>
          <span className={`text-xs font-mono mt-0.5 block ${project.accent}`}>{project.category}</span>
        </div>

        {project.slug ? (
          <a
            href={`${GITHUB}/${project.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 ml-3 p-2 rounded-lg glass border border-white/10 text-slate-500 hover:text-white hover:border-white/20 transition-all"
          >
            <Github size={16} />
          </a>
        ) : (
          <div className="shrink-0 ml-3 p-2 rounded-lg text-slate-700">
            <Github size={16} />
          </div>
        )}
      </div>

      <p className={`leading-relaxed mb-4 ${featured ? 'text-slate-300 text-sm' : 'text-slate-400 text-xs'}`}>
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/8 ${project.accent}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Subtle section background */}
      <div className="absolute inset-0 bg-dark-800/40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-indigo-400 text-sm mb-3 block tracking-widest uppercase">// what I've built</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">Projects</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">From AI-powered mobile apps to full-stack web platforms — here's what I've shipped.</p>
        </motion.div>

        {/* Featured — 2-col */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} featured />
          ))}
        </div>

        {/* Rest — 3-col */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} featured={false} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full glass border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-300 group"
          >
            <Github size={18} />
            <span>View all repos on GitHub</span>
            <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
