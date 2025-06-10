import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Code2,
  Cpu,
  Layers3,
  Sparkles,
  BookOpen,
  TerminalSquare,
  Lightbulb,
  Users,
  Trophy,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  badge: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2020",
    title: "Início na programação",
    desc: "Estudos com JavaScript, HTML e CSS, primeiros projetos pessoais",
    icon: BookOpen,
    color: "bg-blue-500",
    badge: "💡",
  },
  {
    year: "2021",
    title: "Primeiros freelas",
    desc: "Landing pages, automações no Zapier e n8n, sites para pequenos negócios",
    icon: TerminalSquare,
    color: "bg-purple-500",
    badge: "🚀",
  },
  {
    year: "2022",
    title: "Projetos reais em produção",
    desc: "Desenvolvimento full-stack com Next.js, APIs com Node.js, CI/CD",
    icon: Lightbulb,
    color: "bg-yellow-500",
    badge: "📦",
  },
  {
    year: "2023",
    title: "Mentorias e Open Source",
    desc: "Contribuições em libs e frameworks, apoio a comunidades dev",
    icon: Users,
    color: "bg-pink-500",
    badge: "🌍",
  },
  {
    year: "2024",
    title: "Stack sênior consolidada",
    desc: "Clean architecture, microsserviços, automações com pipelines e observabilidade",
    icon: Trophy,
    color: "bg-green-500",
    badge: "🏆",
  },
];

const valoresTimeline: TimelineItem[] = [
  {
    year: "Compromisso",
    title: "Excelência Técnica",
    desc: "Código limpo, testes automatizados, boas práticas sempre.",
    icon: Sparkles,
    color: "bg-indigo-500",
    badge: "🔧",
  },
  {
    year: "Eficiência",
    title: "Automação Inteligente",
    desc: "Integrações otimizadas para menos esforço e mais resultado.",
    icon: Cpu,
    color: "bg-cyan-500",
    badge: "⚙️",
  },
  {
    year: "Propósito",
    title: "Foco em Impacto",
    desc: "Soluções reais com performance, UX e escalabilidade em mente.",
    icon: CheckCircle,
    color: "bg-emerald-500",
    badge: "🎯",
  },
];

const stackTimeline: TimelineItem[] = [
  {
    year: "Frontend",
    title: "Stack Moderna",
    desc: "TypeScript, React, Next.js, Tailwind",
    icon: Code2,
    color: "bg-sky-500",
    badge: "🧩",
  },
  {
    year: "Backend",
    title: "APIs & Automação",
    desc: "Node.js, Prisma, n8n, Pipedream, Webhooks",
    icon: Cpu,
    color: "bg-fuchsia-500",
    badge: "🔗",
  },
  {
    year: "DevOps",
    title: "CI/CD & Deploy",
    desc: "Vercel, GitHub Actions, Docker, observabilidade",
    icon: Layers3,
    color: "bg-lime-500",
    badge: "🚢",
  },
];

export default function About() {
  const [tab, setTab] = useState("stack");
  const timelineRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [tab]);

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const renderTimeline = (items: TimelineItem[]) => (
    <motion.ol
      ref={timelineRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative mt-10 border-s border-blue-500/30 space-y-10 pl-6"
    >
      {items.map((item, index) => (
        <motion.li
          key={item.title + index}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 }}
          className="relative group"
        >
          <div
            className={`absolute -left-3 top-0 ${item.color} w-6 h-6 rounded-full border-4 border-zinc-950 shadow-md flex items-center justify-center text-white group-hover:scale-125 transition-transform duration-300`}
          >
            <item.icon className="w-3.5 h-3.5" />
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              {item.year} — {item.title}{" "}
              <span className="text-xl">{item.badge}</span>
            </h4>
            <p className="text-sm text-zinc-400 mt-1 group-hover:translate-x-1 transition-transform duration-300">
              {item.desc}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-black text-zinc-100 px-6 py-24 font-sans overflow-hidden"
    >
      <motion.div
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: -200 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute inset-0 opacity-5 bg-[url('/code-lines.svg')] bg-cover bg-center pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl w-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl px-10 py-16 shadow-2xl shadow-black/40"
      >
        <div className="flex items-center gap-3 mb-8 text-blue-400">
          <User className="w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Sobre Mim
          </h2>
        </div>
        <div className="flex gap-4 mb-10">
          {["stack", "valores", "experiencia"].map((t) => (
            <motion.button
              key={t}
              onClick={() => setTab(t)}
              whileHover={{ scale: 1.08 }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border relative overflow-hidden ${
                tab === t
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20"
                  : "bg-zinc-800 text-zinc-400 border-zinc-600 hover:border-blue-500 hover:text-white"
              }`}
            >
              <span className="z-10 relative">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
              {tab === t && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute inset-0 bg-blue-600/20 rounded-full blur-sm"
                />
              )}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            {tab === "stack" && renderTimeline(stackTimeline)}
            {tab === "valores" && renderTimeline(valoresTimeline)}
            {tab === "experiencia" && renderTimeline(timeline)}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
