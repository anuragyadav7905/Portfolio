import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Send } from 'lucide-react';

const CONTACTS = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@anuragyadav7905',
    href: 'https://github.com/anuragyadav7905',
    desc: 'Check out my projects and open-source contributions',
    border: 'hover:border-slate-400/35',
    iconColor: 'text-slate-300',
    accent: 'hover:bg-slate-500/5',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'anuragyadav7905',
    href: 'https://linkedin.com/in/anuragyadav7905',
    desc: 'Connect with me professionally and see my experience',
    border: 'hover:border-blue-400/35',
    iconColor: 'text-blue-400',
    accent: 'hover:bg-blue-500/5',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'anuragyadav22211@gmail.com',
    href: 'mailto:anuragyadav22211@gmail.com',
    desc: 'Best for project inquiries, collaborations, and opportunities',
    border: 'hover:border-indigo-400/35',
    iconColor: 'text-indigo-400',
    accent: 'hover:bg-indigo-500/5',
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-dark-800/40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="font-mono text-indigo-400 text-sm mb-3 block tracking-widest uppercase">// let's connect</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Get In Touch</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Open to new opportunities, collaborations, and interesting projects. I read every message — let's build something together.
          </p>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center my-12"
        >
          <a
            href="mailto:anuragyadav22211@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 active:translate-y-0 group"
          >
            <Send size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            Say Hello
            <ArrowUpRight size={18} className="opacity-70" />
          </a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {CONTACTS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className={`group p-6 rounded-2xl glass border border-white/8 ${c.border} ${c.accent} transition-all duration-300 hover:-translate-y-1.5 block`}
              >
                <Icon size={24} className={`${c.iconColor} mb-5`} />
                <div className="text-white font-bold text-base mb-1">{c.label}</div>
                <div className="text-slate-400 text-sm font-mono mb-3 truncate">{c.handle}</div>
                <div className="text-slate-600 text-xs leading-relaxed">{c.desc}</div>
                <ArrowUpRight
                  size={14}
                  className="text-slate-700 group-hover:text-slate-300 mt-5 transition-colors"
                />
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-slate-600 text-sm font-mono">
            Designed & built by{' '}
            <span className="gradient-text font-semibold">Anurag Singh Yadav</span>
            {' '}· {new Date().getFullYear()}
          </p>
          <p className="text-slate-700 text-xs mt-1 font-mono">
            "Ship fast, iterate faster."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
