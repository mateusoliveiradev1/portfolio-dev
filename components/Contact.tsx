import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ArrowUpCircle,
  Github,
  Linkedin,
  Instagram,
  Loader2,
  User,
  MessageCircle,
} from "lucide-react";
import Confetti from "react-confetti";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mkndwnen", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("sent");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center gap-10 bg-gradient-to-br from-zinc-900 to-black text-zinc-100 px-6 py-24 font-sans overflow-hidden"
    >
      <div id="top" className="absolute top-0" />
      {showConfetti && (
        <Confetti recycle={false} numberOfPieces={300} gravity={0.3} />
      )}
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
        className="relative z-10 max-w-xl w-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl px-8 py-12 shadow-2xl shadow-black/40"
      >
        <div className="flex items-center gap-3 mb-6 text-blue-400">
          <Mail className="w-6 h-6" />
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Entre em Contato
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <motion.input
              layout
              whileFocus={{ scale: 1.02 }}
              name="name"
              type="text"
              placeholder="Seu nome"
              required
              className="pl-10 w-full bg-zinc-800/50 border border-zinc-700 rounded px-4 py-2 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <motion.input
              layout
              whileFocus={{ scale: 1.02 }}
              name="email"
              type="email"
              placeholder="Seu email"
              required
              className="pl-10 w-full bg-zinc-800/50 border border-zinc-700 rounded px-4 py-2 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 text-zinc-500 w-4 h-4" />
            <motion.textarea
              layout
              whileFocus={{ scale: 1.02 }}
              name="message"
              rows={4}
              placeholder="Sua mensagem"
              required
              className="pl-10 pt-3 w-full bg-zinc-800/50 border border-zinc-700 rounded px-4 py-2 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-blue-500 resize-none"
            ></motion.textarea>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-2 rounded text-white font-semibold flex items-center justify-center gap-2"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" /> Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </motion.button>
          <AnimatePresence>
            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-green-400"
              >
                Mensagem enviada com sucesso!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500"
              >
                Erro ao enviar. Tente novamente.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-zinc-400 gap-4"
      >
        <div className="flex gap-4 text-zinc-400">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-blue-400"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-400"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-blue-400"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-center">
          Obrigado por visitar meu portfólio. Vamos construir algo juntos!
        </p>
        <a
          href="#top"
          className="text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-2 z-50"
        >
          <ArrowUpCircle className="w-5 h-5" /> Voltar ao topo
        </a>
      </motion.div>
    </section>
  );
}
