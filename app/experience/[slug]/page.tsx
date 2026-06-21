import { notFound } from "next/navigation";
import {
  getExperienceBySlug,
  getAllExperienceSlugs,
  type Experience,
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
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-orbit">
              <Building2 className="size-4" />
              Details
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Calendar className="mt-0.5 size-4 text-nebula" />
                <span className="text-orbit">
                  <span className="text-starlight">Period:</span> {experience.period}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-nebula" />
                <span className="text-orbit">
                  <span className="text-starlight">Location:</span> {experience.location}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Wrench className="mt-0.5 size-4 text-nebula" />
                <span className="text-orbit">
                  <span className="text-starlight">Focus:</span> {experience.focus}
                </span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-orbit">
              <Wrench className="size-4" />
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {experience.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-orbit"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <GlassCard>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-starlight">
              <ListChecks className="size-5 text-nebula" />
              What I worked on
            </h2>
            <ul className="space-y-3">
              {experience.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-orbit">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-nebula" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {experience.outcomes && experience.outcomes.length > 0 && (
            <GlassCard glow="teal">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-starlight">
                <CheckCircle2 className="size-5 text-cosmos" />
                Outcomes
              </h2>
              <ul className="space-y-3">
                {experience.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-orbit">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cosmos" />
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
