import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/content/site";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  size?: "feature" | "compact";
};

export function ProjectCard({ project, size = "feature" }: ProjectCardProps) {
  const isFeature = size === "feature";

  return (
    <article className="flex flex-col">
      <a
        href={project.href}
        aria-label={`View ${project.title}`}
        className={cn(
          "group block overflow-hidden rounded-2xl transition-[filter] hover:brightness-[0.97] focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
          project.tone === "stone" ? "bg-stone-card" : "bg-pale",
          isFeature ? "aspect-[3/2] sm:aspect-[1120/451]" : "aspect-[3/2]",
        )}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export serves files from /public as-is
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}${project.image}`}
            alt=""
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : null}
      </a>

      <div
        className={cn(
          "flex flex-col items-start gap-3 py-4",
          isFeature && "max-w-[900px]",
        )}
      >
        <h3 className="font-serif text-2xl leading-[30px] font-semibold tracking-[0.04em] text-ink">
          {project.title}
        </h3>
        <p className="text-base leading-[1.45] font-medium tracking-[-0.005em] text-muted-foreground sm:text-lg">
          {project.summary}
        </p>
        <p className="font-mono text-base leading-[1.03] font-medium tracking-[-0.045em] text-headline-2">
          {project.tags.join(", ")}
        </p>
        <a
          href={project.href}
          className={cn(
            buttonVariants(),
            "h-auto rounded-xl px-4 py-2 text-lg leading-[26px] font-medium tracking-[-0.005em] hover:bg-action/90",
          )}
        >
          View
          <span className="sr-only"> {project.title}</span>
        </a>
      </div>
    </article>
  );
}
