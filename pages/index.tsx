import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mateus Oliveira - Dev Portfólio</title>
        <meta
          name="description"
          content="Portfólio de desenvolvedor com estilo técnico e visual refinado."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black text-white">
        <div id="top" />
        {/* Ensure all components exist and are named correctly */}
        {/* Consider wrapping sections in error boundaries or dynamic imports to help diagnose future issues */}
        {/* Add test components to verify successful rendering */}
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
