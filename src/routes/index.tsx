import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bug,
  Search,
  FileText,
  ClipboardList,
  Send,
  MessageSquare,
  Github,
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
} from "lucide-react";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import { BugStep } from "@/components/BugStep";
import { IssueTemplates } from "@/components/IssueTemplates";

const REPO_URL = "https://github.com/0vethor0/BUMI";
const ISSUES_URL = `${REPO_URL}/issues/new`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Colabora en BUMI · Guía con GitHub Issue Forms",
      },
      {
        name: "description",
        content:
          "Reporta bugs, solicita features y mejora la documentación de BUMI usando nuestros formularios automatizados de GitHub (Issue Forms).",
      },
      { property: "og:title", content: "Colabora en BUMI como un profesional" },
      {
        property: "og:description",
        content:
          "Guía moderna para usar los Issue Forms de BUMI: 4 pasos clave y 4 plantillas listas para colaborar.",
      },
    ],
  }),
});

const steps = [
  {
    icon: Search,
    title: "Busca duplicados",
    description:
      "Antes de abrir un nuevo issue, revisa los existentes (abiertos y cerrados) para evitar duplicados y aportar contexto donde ya se está discutiendo.",
    bullets: [
      "Usa la barra de búsqueda en la pestaña Issues",
      "Filtra por etiquetas como 'bug', 'feature' o 'docs'",
      "Si ya existe, suma tu información en un comentario",
    ],
  },
  {
    icon: LayoutTemplate,
    title: "Elige la plantilla correcta",
    description:
      "BUMI ofrece Issue Forms para cada tipo de aporte. Elige la plantilla adecuada directamente en la interfaz de GitHub.",
    bullets: [
      "🐞 Bug Report — para errores reproducibles",
      "🚀 Feature Request — para nuevas funcionalidades",
      "📖 Documentación — para mejorar manuales o README",
      "💬 Reporte General — para dudas o temas abiertos",
    ],
  },
  {
    icon: ClipboardList,
    title: "Completa el formulario",
    description:
      "Los Issue Forms te guían paso a paso. Solo necesitas llenar los campos obligatorios, elegir opciones en los menús desplegables y describir el contexto.",
    bullets: [
      "Rellena los campos marcados como obligatorios",
      "Selecciona valores en los dropdowns (entorno, prioridad…)",
      "Adjunta capturas, logs o enlaces relevantes",
    ],
  },
  {
    icon: Send,
    title: "Envía y colabora",
    description:
      "Pulsa 'Submit new issue'. Las etiquetas se aplican automáticamente y los maintainers podrán contactarte para coordinar la solución.",
    bullets: [
      "Atento a labels automáticas (bug, feature, docs…)",
      "Responde con prontitud a comentarios y preguntas",
      "Cierra el issue si encuentras la solución por tu cuenta",
    ],
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Hero with infinite grid */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <InfiniteGrid />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8 animate-float">
            <Github className="w-4 h-4 text-[var(--brand-deep)]" />
            <span className="text-sm font-medium text-foreground">
              Guía oficial para el repositorio{" "}
              <span className="text-gradient font-bold">BUMI</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Colabora en <span className="text-gradient">BUMI</span>
            <br />
            como un profesional
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Aprende a reportar errores, solicitar funcionalidades y mejorar la
            documentación utilizando nuestros nuevos formularios automatizados
            de GitHub.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ISSUES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-button text-primary-foreground font-semibold shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Bug className="w-5 h-5" />
              Crear un nuevo issue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#guia"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card text-foreground font-semibold hover:-translate-y-0.5 transition-all duration-300"
            >
              Ver guía
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-deep)]" />
              4 pasos clave
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-deep)]" />
              Issue Forms automatizados
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-deep)]" />
              4 plantillas listas
            </div>
          </div>
        </motion.div>
      </section>

      {/* Steps */}
      <section id="guia" className="relative px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Un flujo moderno en{" "}
              <span className="text-gradient">4 pasos clave</span>
            </motion.h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los Issue Forms hacen la mayor parte del trabajo. Tú solo tienes
              que seguir estos cuatro pasos para colaborar como un profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <BugStep key={s.title} index={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Issue Forms templates */}
      <section className="relative px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-mint)]/60 text-[var(--brand-deep)] text-xs font-semibold mb-4">
                <FileText className="w-3.5 h-3.5" />
                Issue Forms · YAML
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3">
                Conoce nuestras{" "}
                <span className="text-gradient">Plantillas</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cuatro formularios automatizados que te guían para enviar
                aportes claros, completos y útiles desde el primer intento.
              </p>
            </div>

            <IssueTemplates />

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-button text-primary-foreground font-semibold hover:-translate-y-0.5 transition-all"
              >
                <Bug className="w-5 h-5" /> Abrir issue en BUMI
              </a>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-[var(--brand-mint)] text-foreground font-semibold hover:-translate-y-0.5 transition-all"
              >
                <Github className="w-5 h-5" /> Ver repositorio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-12 border-t border-[var(--brand-mint)]/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[var(--brand-primary)]" />
            <span>
              Hecho con cariño para la comunidad de{" "}
              <span className="text-gradient font-semibold">BUMI</span>
            </span>
          </div>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[var(--brand-deep)] transition-colors"
          >
            <Github className="w-4 h-4" /> github.com/0vethor0/BUMI
          </a>
        </div>
      </footer>
    </main>
  );
}
