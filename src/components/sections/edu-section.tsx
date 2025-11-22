import Section from "@/components/section";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Université de Versailles Saint Quentin en Yvelines",
    url: "https://www.iut-velizy-rambouillet.uvsq.fr/",
    title: "Étudiant en BUT MMI",
    period: "2024 - Aujourd'hui",
    description:
      "Formation en Métiers du Multimédia et de l'Internet. Projets universitaires orientés développement (fullstack, IA, UX/UI), mais aussi graphisme, 3D et communication.",
    icon: GraduationCap,
  },
];

export function EducationSection() {
  return (
    <Section className="flex flex-col items-start justify-center pt-8 pb-8 px-4 sm:px-8">
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-foreground/80 italic text-[25px] sm:text-[30px] leading-tight font-normal tracking-wider mb-2">
          Mes formations
        </h2>
        <div className="ml-2">
          <ul className="list-disc pl-2 flex flex-col gap-6 pt-2 w-full">
            {education.map((exp) => {
              const Icon = exp.icon;
              return (
                <li key={exp.school} className="relative w-full">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {/* Desktop+: affiche le bouton avec l'icône */}
                    <div className="hidden sm:block">
                      <Button
                        asChild
                        className="shadow border bg-background p-2 h-9 mr-0.5 flex items-center justify-center"
                      >
                        <Link
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 group hover:text-foreground transition-colors"
                          aria-label={exp.school}
                        >
                          <Icon className="w-4 h-4 text-foreground" />
                        </Link>
                      </Button>
                    </div>
                    {/* Mobile : pas d'icône ni bouton */}
                    <div className="sm:hidden" />
                    <div className="flex flex-col min-w-0">
                      {/* Nom et titre + période */}
                      <div className="flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
                        <span
                          className="font-semibold text-foreground truncate"
                          {...{
                            // Ajoute title=URL uniquement sur mobile (non-sm)
                            title: undefined,
                            ...(typeof window === "undefined" ? {} : {}),
                          }}
                        >
                          {/* Sur mobile, applique title=URL */}
                          <span className="sm:hidden" title={exp.url}>
                            {exp.school}
                          </span>
                          {/* Desktop+, pas de title */}
                          <span className="hidden sm:inline">{exp.school}</span>
                        </span>
                        <span className="hidden sm:inline text-xs text-foreground/60 mx-2">
                          |
                        </span>
                        <span className="italic text-sm text-foreground/80 truncate">
                          {exp.title}
                        </span>
                      </div>
                      <div className="text-xs text-foreground/50">
                        {exp.period}
                      </div>
                      {/* Description toujours en dessous du nom, mobile et desktop */}
                      <span className="block text-[13px] sm:text-[15px] text-foreground/60 mt-1">
                        {exp.description}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
