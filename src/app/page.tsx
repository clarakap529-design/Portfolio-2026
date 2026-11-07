import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { SectionLabel } from "@/components/section-label";
import { caseStudies, recentWork, site } from "@/content/site";
import profile from "@/assets/profile.jpg";

const navLinks = [
  { label: site.name, href: "#top" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Home() {
  return (
    <>
      <header id="top" className="bg-stone">
        <nav
          aria-label="Main"
          className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-6 px-5 sm:gap-[39px] sm:px-12"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm leading-[17px] font-semibold text-black underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <section className="mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-5 pt-6 pb-14 sm:px-10 md:flex-row md:items-center md:gap-16 md:px-[120px] md:py-12">
          <Image
            src={profile}
            alt="Portrait of Clara smiling outdoors"
            priority
            className="size-40 shrink-0 rounded-full object-cover sm:size-52 md:size-[266px]"
          />
          <div className="flex flex-col gap-3 md:py-[72px]">
            <h1 className="max-w-[627px] font-serif text-[28px] leading-[1.25] font-normal text-black sm:text-4xl sm:leading-[45px]">
              Hi, my name is Clara.
              <br />I <strong className="font-bold">untangle</strong> complex
              systems, then <strong className="font-bold">design</strong> what
              they become.
            </h1>
            <p className="font-serif text-lg leading-[1.25] text-black sm:text-xl xl:whitespace-nowrap">
              {site.role}
            </p>
          </div>
        </section>
      </header>

      <main className="flex flex-1 flex-col gap-12 py-10 sm:gap-[72px]">
        <section aria-labelledby="work" className="flex flex-col gap-12 sm:gap-[72px]">
          <SectionLabel id="work">Recent Work:</SectionLabel>
          {recentWork.map((project) => (
            <div key={project.title} className="mx-auto w-full max-w-[1280px] px-5 sm:px-10 lg:px-20">
              <ProjectCard project={project} />
            </div>
          ))}
        </section>

        <section aria-labelledby="case-studies" className="flex flex-col gap-12 sm:gap-[72px]">
          <SectionLabel id="case-studies">Case Studies</SectionLabel>
          <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 sm:px-10 md:grid-cols-2 md:gap-10 lg:px-20">
            {caseStudies.map((project) => (
              <ProjectCard key={project.title} project={project} size="compact" />
            ))}
          </div>
        </section>
      </main>

      <footer id="about" className="bg-wood text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 py-12 font-serif text-sm leading-[17.5px] font-medium tracking-[0.04em] sm:px-10 md:flex-row md:items-center md:gap-[72px] md:px-[160px] md:py-0 md:min-h-[197px]">
          <ul className="flex shrink-0 flex-row gap-6 md:w-60 md:flex-col md:gap-[17.5px]">
            <li>
              <a href={site.email} className="underline-offset-4 hover:underline">
                Email
              </a>
            </li>
            <li>
              <a href={site.linkedin} className="underline-offset-4 hover:underline">
                Linked In
              </a>
            </li>
          </ul>
          <div className="max-w-[648px] md:py-6">
            <h2 className="sr-only">About Clara</h2>
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
