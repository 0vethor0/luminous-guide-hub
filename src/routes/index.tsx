import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bug,
  Search,
  FileText,
  ListChecks,
  Camera,
  Tag,
  Send,
  MessageSquare,
  Github,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import { BugStep } from "@/components/BugStep";

const REPO_URL = "https://github.com/0vethor0/BUMI";
const ISSUES_URL = `${REPO_URL}/issues/new`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Reportar un Bug · Guía paso a paso para BUMI",
      },
      {
        name: "description",
        content:
          "Aprende a reportar bugs en el repositorio BUMI siguiendo las mejores prácticas de GitHub: pasos claros, plantillas y consejos.",
      },
      { property: "og:title", content: "Reportar un Bug · BUMI" },
      {
        property: "og:description",
        content:
          "Guía visual y moderna para crear issues efectivos en GitHub siguiendo los estándares oficiales.",
      },
    ],
  }),
});

const steps = [
  {
    icon: Search,
    title: "Busca antes de reportar",
    description:
      "Antes de crear un nuevo issue, revisa los existentes (abiertos y cerrados) para evitar duplicados. GitHub recomienda buscar por palabras clave del error.",
    bullets: [
      "Usa la barra de búsqueda en la pestaña Issues",
      "Filtra por etiquetas como 'bug' o 'help wanted'",
      "Si ya existe, añade un comentario con tu información",
    ],
  },
  {
    icon: FileText,
    title: "Elige la plantilla correcta",
    description:
      "BUMI puede ofrecer plantillas de issue. Selecciona 'Bug report' para errores. Las plantillas guían los datos requeridos.",
    bullets: [
      "Bug report: para errores del software",
      "Feature request: para nuevas funcionalidades",
      "Question: para dudas generales",
    ],
  },
  {
    icon: Tag,
    title: "Escribe un título claro y específico",
    description:
      "Un buen título resume el problema en una línea. Empieza con el área afectada y describe el síntoma observable.",
    bullets: [
      "✅ '[UI] Botón de login no responde en Safari 17'",
      "❌ 'No funciona' o 'Bug urgente'",
    ],
  },
  {
    icon: ListChecks,
    title: "Describe los pasos para reproducir",
    description:
      "Lista numerada y en orden de cómo llegar al error. Este es el dato más valioso para quien va a corregirlo.",
    bullets: [
      "1. Ir a '...'",
      "2. Hacer clic en '...'",
      "3. Desplazarse hasta '...'",
      "4. Ver el error",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Comportamiento esperado vs actual",
    description:
      "Explica qué debería suceder y qué sucede en realidad. Esta separación ayuda a confirmar el bug rápidamente.",
    bullets: [
      "Esperado: 'Al pulsar Guardar, el formulario se envía'",
      "Actual: 'Aparece un error 500 en consola'",
    ],
  },
  {
    icon: Camera,
    title: "Adjunta capturas, logs o vídeos",
    description:
      "Los recursos visuales aceleran el diagnóstico. GitHub permite arrastrar imágenes y vídeos directamente al editor.",
    bullets: [
      "Capturas de pantalla del error",
      "Logs de consola o stack traces dentro de bloques ```",
      "GIFs cortos si el bug es interactivo",
    ],
  },
  {
    icon: Bug,
    title: "Incluye información del entorno",
    description:
      "El contexto técnico es esencial para reproducir. Sé lo más preciso posible con versiones y plataformas.",
    bullets: [
      "Sistema operativo y versión",
      "Navegador / runtime y versión",
      "Versión de BUMI o commit hash",
    ],
  },
  {
    icon: Sparkles,
    title: "Aplica labels y asignaciones",
    description:
      "Si tienes permisos, añade labels relevantes (bug, priority, area). Si no, los maintainers lo harán por ti.",
    bullets: [
      "Etiqueta 'bug' para errores confirmados",
      "Menciona @ a personas relacionadas si procede",
    ],
  },
  {
    icon: Send,
    title: "Envía y mantente disponible",
    description:
      "Pulsa 'Submit new issue'. Mantente atento a comentarios: pueden pedirte aclaraciones o pasos adicionales.",
    bullets: [
      "Activa las notificaciones del issue",
      "Responde con prontitud a las preguntas",
      "Cierra el issue si encuentras una solución por tu cuenta",
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
            Reporta un <span className="text-gradient">bug</span>
            <br />
            como un profesional
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Aprende paso a paso cómo crear issues efectivos en GitHub siguiendo
            las indicaciones oficiales. Bugs claros = soluciones rápidas.
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
              Ver guía completa
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-deep)]" />
              9 pasos claros
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-deep)]" />
              Estándares GitHub
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-deep)]" />
              Plantilla incluida
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
              La guía completa en{" "}
              <span className="text-gradient">9 pasos</span>
            </motion.h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sigue cada paso para que tu reporte sea claro, accionable y útil
              para los maintainers de BUMI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <BugStep key={s.title} index={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Template section */}
      <section className="relative px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-button flex items-center justify-center text-primary-foreground">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bonus</p>
                <h3 className="text-2xl font-bold">
                  Plantilla recomendada de Bug Report
                </h3>
              </div>
            </div>

            <pre className="bg-white/80 border border-[var(--brand-mint)] rounded-2xl p-6 text-sm overflow-x-auto leading-relaxed text-foreground/90 font-mono">
{`### 🐛 Descripción
Una descripción clara y concisa del bug.

### ✅ Pasos para reproducir
1. Ir a '...'
2. Hacer clic en '...'
3. Ver el error

### 🎯 Comportamiento esperado
Lo que debería ocurrir.

### 💥 Comportamiento actual
Lo que realmente ocurre.

### 🖼️ Capturas / Logs
(Adjunta imágenes o pega los logs aquí)

### 🧩 Entorno
- SO: [ej. macOS 14.2]
- Navegador: [ej. Chrome 124]
- Versión BUMI: [ej. v0.3.1 / commit abc123]

### ➕ Contexto adicional
Cualquier otra información relevante.`}
            </pre>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
