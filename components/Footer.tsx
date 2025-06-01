import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const year = new Date().getFullYear();
const profile = {
  name: "Mateus Oliveira",
  github: "https://github.com/mateusoliveira",
  linkedin: "https://linkedin.com/in/mateusoliveira",
  email: "warface01031999@gmail.com",
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-10 px-6 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {year} {profile.name}. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group relative"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]" />
          </a>
        </div>
      </div>
      <motion.a
        href="#top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute right-6 bottom-6 w-9 h-9 bg-zinc-800 border border-zinc-600 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-400 transition duration-300 shadow-md"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.a>
    </footer>
  );
}
