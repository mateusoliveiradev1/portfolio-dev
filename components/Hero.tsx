import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";
import { ChevronDown } from "lucide-react";

const text = "Olá, eu sou Mateus Oliveira";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 to-black text-zinc-100 px-6 py-20 md:py-32 font-sans overflow-hidden">
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
        className="relative z-10 text-center w-full max-w-5xl space-y-10 border border-zinc-800 bg-zinc-900/90 backdrop-blur-xl rounded-3xl px-4 sm:px-6 md:px-8 py-16 shadow-2xl shadow-black/60"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <TerminalSquare className="w-12 h-12 text-blue-500 drop-shadow-lg animate-pulse" />
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white flex justify-center items-center gap-1 leading-tight flex-wrap break-words max-w-full"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.035,
              },
            },
          }}
          aria-label="Olá, eu sou Mateus Oliveira"
        >
          <motion.span className="flex flex-wrap justify-center text-balance">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block hover:scale-125 hover:text-blue-400 transition-transform duration-200"
                variants={{
                  hidden: { opacity: 0, y: `0.25em` },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              className="text-blue-400 ml-1 inline-block"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              |
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Desenvolvedor full-stack apaixonado por transformar ideias em soluções
          digitais impactantes. Performance, automação e design funcional são
          meu playground.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="inline-flex gap-4 justify-center pt-6 flex-wrap"
        >
          <a
            href="#projects"
            className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-600 hover:to-blue-500 text-white rounded-xl shadow-xl transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 group overflow-hidden"
          >
            <span className="relative z-10">Ver Projetos</span>
            <span className="absolute inset-0 bg-blue-800/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
          </a>
          <a
            href="#contact"
            className="relative px-6 py-3 border border-blue-400 text-blue-300 rounded-xl hover:bg-blue-900/30 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 group overflow-hidden"
          >
            <span className="relative z-10">Contato</span>
            <span className="absolute inset-0 bg-blue-800/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
        }}
        className="mt-10 text-blue-400 z-10"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </section>
  );
}
