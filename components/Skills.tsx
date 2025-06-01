import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiPostgresql,
  SiDocker,
  SiGraphql,
} from "react-icons/si";

const skills = {
  "Front-end": [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" />,
      description: "Linguagem de programação base para web.",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-400" />,
      description: "Superset do JavaScript com tipagem.",
    },
    {
      name: "React",
      icon: <SiReact className="text-cyan-400" />,
      description: "Biblioteca para criação de interfaces reativas.",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      description: "Framework React para SSR e SSG.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-300" />,
      description: "Framework utilitário para estilos CSS.",
    },
  ],
  "Back-end": [
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-500" />,
      description: "Ambiente de execução JavaScript no servidor.",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-300" />,
      description: "Banco de dados relacional avançado.",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql className="text-pink-400" />,
      description: "Linguagem de query para APIs flexíveis.",
    },
  ],
  "DevOps & Ferramentas": [
    {
      name: "Git & GitHub",
      icon: <SiGithub className="text-white" />,
      description: "Controle de versão e colaboração em código.",
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-300" />,
      description: "Contêineres para empacotamento e deploy.",
    },
    {
      name: "CI/CD",
      icon: "🚀",
      description: "Integração contínua e entrega contínua.",
    },
    {
      name: "Automação",
      icon: "🤖",
      description: "Automação de tarefas e workflows.",
    },
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black text-zinc-100 px-6 py-24 font-sans overflow-hidden"
    >
      <motion.div
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: -200 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute inset-0 opacity-5 bg-[url('/code-lines.svg')] bg-cover bg-center pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-md border border-zinc-800 rounded-3xl px-6 py-14 shadow-2xl shadow-black/50"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12 text-blue-400"
        >
          <Code2 className="w-6 h-6 animate-pulse" />
          <h2 className="text-xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tecnologias e Skills
          </h2>
        </motion.div>

        <div className="space-y-14">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg md:text-xl text-zinc-100 font-semibold mb-6 border-l-4 border-blue-500 pl-5 tracking-wide uppercase">
                {category}
              </h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-sm text-zinc-300"
              >
                {items.map(({ name, icon, description }, index) => (
                  <motion.li
                    key={name}
                    className="group relative flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-zinc-800/70 to-zinc-700/60 rounded-xl px-5 py-6 border border-zinc-600 hover:border-blue-400 transition duration-300 text-center shadow-lg backdrop-blur-sm overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-300 bg-blue-500 blur-lg rounded-xl" />
                    <span className="text-3xl drop-shadow-sm">{icon}</span>
                    <span className="text-base font-medium tracking-wide z-10">
                      {name}
                    </span>
                    <div className="absolute bottom-2 z-20 hidden group-hover:flex text-xs px-2 py-1 rounded bg-zinc-800/90 text-zinc-200 border border-zinc-700 shadow-md animate-fade-in">
                      {description}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
