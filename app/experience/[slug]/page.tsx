import { notFound } from "next/navigation";
import {
  getExperienceBySlug,
  getAllExperienceSlugs,
} from "@/lib/content";
import { DetailLayout } from "../../components/detail-layout";
import { GlassCard } from "../../components/glass-card";
import { Building2, Calendar, MapPin, Wrench, CheckCircle2, ListChecks } from "lucide-react";

export function generateStaticParams() {
  return getAllExperienceSlugs().map((slug) => ({ slug }));
}

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};
  return {
    title: `${experience.company} — Rafael Escaleira`,
    description: experience.summary,
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  return (
    <DetailLayout
      eyebrow="Experience"
      title={`${experience.company} · ${experience.role}`}
      subtitle={experience.summary}
      link={experience.link}
      linkLabel="Visit company site"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <GlassCard>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Building2 className="size-4 text-primary" />
              Details
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Calendar className="mt-0.5 size-4 text-primary" />
                <span className="text-muted-foreground">
                  <span className="text-foreground">Period:</span> {experience.period}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-primary" />
                <span className="text-muted-foreground">
                  <span className="text-foreground">Location:</span> {experience.location}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="mt-0.5 size-4 text-primary" />
                <span className="text-muted-foreground">
                  <span className="text-foreground">Focus:</span> {experience.focus}
                </span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Wrench className="size-4 text-primary" />
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <GlassCard>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <ListChecks className="size-5 text-primary" />
              What I worked on
            </h2>
            <ul className="space-y-3">
              {experience.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {experience.outcomes && experience.outcomes.length > 0 && (
            <GlassCard glow="orange">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <CheckCircle2 className="size-5 text-primary" />
                Outcomes
              </h2>
              <ul className="space-y-3">
                {experience.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          )}
        </div>
      </div>
    </DetailLayout>
  );
}
