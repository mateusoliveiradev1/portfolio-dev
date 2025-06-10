// Componente Projects com melhorias: filtro por tags, dark/light toggle, e navegação acessível
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: string;
  category: string;
  tags: string[];
  link: string;
  image: string;
}
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { LayoutGrid, ExternalLink, XCircle, Moon, Sun } from "lucide-react";

const projects: Project[] = [
  {
    title: "Painel SaaS Admin",
    description: "Dashboard com autenticação, gerenciamento e analytics.",
    tech: ["Next.js", "Tailwind", "Prisma"],
    status: "Em produção",
    category: "prod",
    tags: ["painel", "admin", "dashboard"],
    link: "#",
    image: "/project1.svg",
  },
  {
    title: "Landing Page Dev",
    description: "Página institucional responsiva e otimizada.",
    tech: ["React", "Framer Motion"],
    status: "Open Source",
    category: "oss",
    tags: ["landing", "marketing"],
    link: "#",
    image: "/project2.svg",
  },
  {
    title: "Automação com APIs",
    description: "Integração entre serviços com Node e cron jobs.",
    tech: ["Node.js", "Axios", "Supabase"],
    status: "Experimento",
    category: "exp",
    tags: ["api", "automação"],
    link: "#",
    image: "/project3.svg",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  const filtered = projects.filter((p) => {
    if (filter !== "all" && p.category !== filter) return false;
    if (tagFilter && !p.tags.includes(tagFilter)) return false;
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 to-zinc-900 text-zinc-100 px-6 py-24 font-sans overflow-hidden"
    >
      <motion.div
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: -200 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute inset-0 opacity-10 bg-[url('/code-lines.svg')] bg-cover bg-center pointer-events-none z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-8 py-12 shadow-2xl shadow-black/40"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="flex items-center gap-3 text-blue-400">
            <LayoutGrid className="w-6 h-6" />
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
              Projetos em Destaque
            </h2>
          </div>
          <div className="flex gap-2 text-sm items-center">
            {["all", "prod", "oss", "exp"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded border ${
                  filter === cat
                    ? "border-blue-400 text-blue-300 bg-zinc-800"
                    : "border-zinc-700 text-zinc-400"
                } hover:bg-zinc-800 transition`}
              >
                {cat === "all"
                  ? "Todos"
                  : cat === "prod"
                  ? "Produção"
                  : cat === "oss"
                  ? "Open Source"
                  : "Experimento"}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2 rounded border border-zinc-600 hover:bg-zinc-800 text-zinc-400"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filtered.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, rotate: "0.3deg" }}
              className="flex h-full"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#00f0ff"
                glarePosition="all"
                style={{ willChange: "transform" }}
                className="w-full h-full"
              >
                <div
                  onClick={() => setSelected(project)}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
                  tabIndex={0}
                  role="button"
                  className="group text-left bg-zinc-800/60 border border-zinc-700 rounded-lg hover:bg-blue-900/20 hover:border-blue-500 hover:text-blue-300 transition duration-300 flex flex-col h-full min-h-[360px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-36 object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                  />
                  <div className="p-5 space-y-2 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className="text-xs px-2 py-0.5 border border-blue-400 text-blue-300 rounded-md">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-1 text-xs pt-2">
                      {project.tech.map((tech, i) => (
                        <li
                          key={i}
                          title={tech}
                          className="bg-zinc-700/50 text-zinc-300 px-2 py-0.5 rounded cursor-pointer hover:bg-blue-800"
                          onClick={() => setTagFilter(tech)}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {tagFilter && (
          <div className="text-sm text-blue-400 mt-4">
            Filtro aplicado: <strong>{tagFilter}</strong>
            <button
              onClick={() => setTagFilter(null)}
              className="ml-2 underline text-red-400 hover:text-red-300"
            >
              remover
            </button>
          </div>
        )}

          {selected && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
              <div className="bg-zinc-900 border border-zinc-700 rounded-xl max-w-md w-full p-6 space-y-4 relative animate-in fade-in zoom-in-90">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-2 right-2 text-zinc-500 hover:text-red-500"
                >
                  <XCircle className="w-5 h-5" />
                </button>
                <img
                  src={selected!.image}
                  alt={selected!.title}
                  className="rounded w-full h-32 object-cover"
                />
                <h3 className="text-lg font-bold text-blue-300">
                  {selected!.title}
                </h3>
                <p className="text-zinc-300">{selected!.description}</p>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {selected!.tech.map((t, i) => (
                  <li
                    key={i}
                    className="bg-zinc-800 border border-zinc-600 px-2 py-0.5 rounded text-zinc-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
                <a
                  href={selected!.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
              >
                Ver projeto <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
