import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Bug,
  Rocket,
  BookOpen,
  MessageSquare,
  ChevronDown,
  ShieldAlert,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FieldType = "input" | "textarea" | "dropdown";

interface MockField {
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

function FieldMock({ field }: { field: MockField }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-foreground">
        {field.label}
        {field.required && (
          <span className="ml-1 text-[var(--brand-deep)]">*</span>
        )}
      </label>
      {field.type === "input" && (
        <div className="w-full rounded-md border border-[var(--brand-mint)] bg-white/90 px-3 py-2 text-sm text-muted-foreground shadow-sm">
          {field.placeholder}
        </div>
      )}
      {field.type === "textarea" && (
        <div className="w-full min-h-[72px] rounded-md border border-[var(--brand-mint)] bg-white/90 px-3 py-2 text-sm text-muted-foreground shadow-sm leading-relaxed whitespace-pre-line">
          {field.placeholder}
        </div>
      )}
      {field.type === "dropdown" && (
        <div className="w-full flex items-center justify-between rounded-md border border-[var(--brand-mint)] bg-white/90 px-3 py-2 text-sm text-muted-foreground shadow-sm">
          <span>{field.options?.[0] ?? "Selecciona una opción"}</span>
          <ChevronDown className="w-4 h-4 opacity-60" />
        </div>
      )}
    </div>
  );
}

interface TemplateDef {
  id: string;
  emoji: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  fields: MockField[];
  warning?: { title: string; message: string };
}

const templates: TemplateDef[] = [
  {
    id: "bug",
    emoji: "🐞",
    label: "Bug Report",
    icon: Bug,
    title: "Reporta un error reproducible",
    description:
      "Usa esta plantilla cuando algo no funciona como debería. Cuanta más información, más rápido se resuelve.",
    fields: [
      {
        label: "Descripción del bug",
        type: "textarea",
        placeholder: "Una descripción clara y concisa de qué está fallando…",
        required: true,
      },
      {
        label: "Pasos para reproducir",
        type: "textarea",
        placeholder: "1. Ir a '...'\n2. Hacer clic en '...'\n3. Ver el error",
        required: true,
      },
      {
        label: "Comportamiento esperado",
        type: "input",
        placeholder: "Lo que debería ocurrir",
        required: true,
      },
      {
        label: "Comportamiento actual",
        type: "input",
        placeholder: "Lo que realmente ocurre",
        required: true,
      },
      {
        label: "Entorno",
        type: "dropdown",
        options: ["Producción", "Staging", "Desarrollo local"],
        required: true,
      },
      {
        label: "Logs / stack trace",
        type: "textarea",
        placeholder: "Pega aquí los logs relevantes (sin datos sensibles)",
      },
    ],
    warning: {
      title: "Importante: protege tu información",
      message:
        "No incluyas contraseñas, tokens, claves API ni datos personales en el reporte.",
    },
  },
  {
    id: "feature",
    emoji: "🚀",
    label: "Feature Request",
    icon: Rocket,
    title: "Propón una nueva funcionalidad",
    description:
      "Describe el problema que quieres resolver y cómo imaginas la solución ideal.",
    fields: [
      {
        label: "Problema a resolver",
        type: "textarea",
        placeholder: "¿Qué dolor o limitación estás experimentando?",
        required: true,
      },
      {
        label: "Propuesta de solución",
        type: "textarea",
        placeholder: "Describe cómo te gustaría que funcionara…",
        required: true,
      },
      {
        label: "Definición de Hecho (DoD)",
        type: "textarea",
        placeholder:
          "- Criterio 1 cumplido\n- Criterio 2 verificado\n- Tests añadidos",
        required: true,
      },
      {
        label: "Prioridad",
        type: "dropdown",
        options: ["Baja", "Media", "Alta", "Crítica"],
        required: true,
      },
    ],
  },
  {
    id: "docs",
    emoji: "📖",
    label: "Documentación",
    icon: BookOpen,
    title: "Mejora manuales y README",
    description:
      "Reporta secciones poco claras, instrucciones desactualizadas o ejemplos que faltan.",
    fields: [
      {
        label: "Página o archivo afectado",
        type: "input",
        placeholder: "ej. README.md, /docs/installation",
        required: true,
      },
      {
        label: "Problema detectado",
        type: "textarea",
        placeholder: "¿Qué información falta, está mal o es confusa?",
        required: true,
      },
      {
        label: "Mejora sugerida",
        type: "textarea",
        placeholder: "Comparte tu propuesta de redacción o ejemplo",
      },
      {
        label: "Tipo de cambio",
        type: "dropdown",
        options: ["Corrección", "Aclaración", "Nuevo contenido", "Traducción"],
        required: true,
      },
    ],
  },
  {
    id: "general",
    emoji: "💬",
    label: "Reporte General",
    icon: MessageSquare,
    title: "Dudas o temas no categorizados",
    description:
      "Para conversaciones abiertas, ideas tempranas o consultas que no encajan en otras plantillas.",
    fields: [
      {
        label: "Asunto",
        type: "input",
        placeholder: "Resume tu consulta en una línea",
        required: true,
      },
      {
        label: "Detalle",
        type: "textarea",
        placeholder: "Cuéntanos con calma de qué se trata…",
        required: true,
      },
      {
        label: "Categoría",
        type: "dropdown",
        options: ["Pregunta", "Idea", "Discusión", "Otro"],
        required: true,
      },
    ],
  },
];

export function IssueTemplates() {
  return (
    <Tabs defaultValue="bug" className="w-full">
      <TabsList className="flex flex-wrap h-auto w-full gap-2 bg-[var(--brand-mint)]/40 p-2 rounded-xl">
        {templates.map((t) => {
          const Icon = t.icon;
          return (
            <TabsTrigger
              key={t.id}
              value={t.id}
              className="flex-1 min-w-[140px] gap-2 data-[state=active]:bg-white data-[state=active]:text-[var(--brand-deep)] data-[state=active]:shadow-sm py-2.5"
            >
              <Icon className="w-4 h-4" />
              <span className="font-semibold">
                {t.emoji} {t.label}
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {templates.map((t) => (
        <TabsContent key={t.id} value={t.id} className="mt-6">
          <div className="rounded-2xl border border-[var(--brand-mint)] bg-white/85 backdrop-blur-sm shadow-[var(--shadow-card)] overflow-hidden">
            <div className="px-6 py-5 border-b border-[var(--brand-mint)]/70 bg-gradient-to-r from-[var(--brand-mint)]/40 to-transparent">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-button text-primary-foreground flex items-center justify-center shrink-0 shadow-[var(--shadow-soft)]">
                  <t.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground">
                    {t.emoji} {t.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {t.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 grid sm:grid-cols-2 gap-5">
              {t.fields.map((f) => (
                <div
                  key={f.label}
                  className={
                    f.type === "textarea" ? "sm:col-span-2" : undefined
                  }
                >
                  <FieldMock field={f} />
                </div>
              ))}
            </div>

            {t.warning && (
              <div className="px-6 pb-6">
                <Alert className="border-orange-300 bg-orange-50 text-orange-900">
                  <ShieldAlert className="h-4 w-4 !text-orange-600" />
                  <AlertTitle className="text-orange-900 font-bold">
                    {t.warning.title}
                  </AlertTitle>
                  <AlertDescription className="text-orange-800">
                    {t.warning.message}
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
