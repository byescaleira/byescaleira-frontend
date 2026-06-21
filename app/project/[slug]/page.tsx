import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  type Project,
} from "@/lib/content";
import { DetailLayout } from "../../components/detail-layout";
import { GlassCard } from "../../components/glass-card";
import { Target, Lightbulb, GitBranch, ExternalLink, Layers } from "lucide-react";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string } >;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.codename} — ${project.title}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <DetailLayout
      eyebrow={`Project ${project.codename}`}
      title={project.title}
      subtitle={project.longDescription}
      link={project.link}
      linkLabel="View on GitHub"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <GlassCard>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-orbit">
              <Layers className="size-4" />
              Status
            </h2>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-starlight">
              {project.status}
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-orbit"
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>

          {project.link && (
            <GlassCard glow="blue">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-nebula transition-colors hover:text-nebula-glow"
              >
                <ExternalLink className="size-4" />
                Open project
              </a>
            </GlassCard>
          )}
        </div>

        <div className="space-y-6 lg:col-span-2">
          <GlassCard>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-starlight">
              <Target className="size-5 text-nebula" />
              Goals
            </h2>
            <ul className="space-y-3">
              {project.goals.map((goal) => (
                <li key={goal} className="flex items-start gap-3 text-orbit">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-nebula" />
                  {goal}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard glow="teal">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-starlight">
              <Lightbulb className="size-5 text-cosmos" />
              Learnings
            </h2>
            <ul className="space-y-3">
              {project.learnings.map((learning) => (
                <li key={learning} className="flex items-start gap-3 text-orbit">
                  <Lightbulb className="mt-0.5 size-4 shrink-0 text-cosmos" />
                  {learning}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </DetailLayout>
  );
}
