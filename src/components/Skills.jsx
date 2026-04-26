import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    label: 'Languages',
    bar: 'from-indigo-500 to-violet-500',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'R'],
  },
  {
    label: 'Frontend',
    bar: 'from-cyan-500 to-blue-500',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    bar: 'from-emerald-500 to-teal-500',
    skills: ['Node.js', 'Express', 'Spring', 'REST APIs', 'Flask'],
  },
  {
    label: 'Mobile',
    bar: 'from-violet-500 to-purple-600',
    skills: ['Android (Java)', 'Android (Kotlin)', 'Android Studio', 'XML UI', 'Fragments', 'RecyclerView'],
  },
  {
    label: 'Databases',
    bar: 'from-orange-500 to-amber-500',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase Firestore'],
  },
  {
    label: 'DevOps & Cloud',
    bar: 'from-rose-500 to-pink-500',
    skills: ['Docker', 'AWS', 'Firebase', 'Vercel', 'Render'],
  },
  {
    label: 'Data & Analytics',
    bar: 'from-amber-500 to-orange-500',
    skills: ['Excel', 'Tableau', 'ggplot2', 'dplyr', 'Pandas', 'Statistical Analysis'],
  },
  {
    label: 'Tools & Platforms',
    bar: 'from-slate-400 to-slate-600',
    skills: ['Git & GitHub', 'Linux', 'Figma', 'VS Code', 'Android Studio'],
  },
];

const SOFT_SKILLS = [
  'Critical Thinking', 'Team Collaboration', 'Self-Motivated', 'Fast Learner',
  'System Design', 'ML Pipelines', 'Cloud Architecture', 'Data Analytics',
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-indigo-400 text-sm mb-3 block tracking-widest uppercase">// what I work with</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">Skills</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">From mobile to cloud — a full-spectrum stack built for shipping real products.</p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
              className="p-5 rounded-2xl glass border border-white/8 hover:border-white/15 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`h-5 w-1 rounded-full bg-gradient-to-b ${cat.bar} shrink-0`} />
                <h3 className="text-white text-sm font-bold">{cat.label}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/5 border border-white/8 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other interests / soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 rounded-2xl glass border border-indigo-500/15 text-center"
        >
          <h3 className="text-white font-bold mb-6 text-lg">Interests & Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {SOFT_SKILLS.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
