import ProjectCard from "@/Components/cards/ProjectCard";
import PROJECT_TYPE from "@/types/PROJECT_TYPE";
import TOOL_TYPE from "@/types/TOOL_TYPE";

export default async function Projects({
  projects,
  tools,
}: {
  projects: PROJECT_TYPE[];
  tools: TOOL_TYPE[];
}) {
  const publishedProjects = projects?.filter((p) => p?.isPublished) || [];

  return (
    <section id="work" className="py-20 px-4 md:px-9 max-w-7xl mx-auto">
      <div className="space-y-8">
        <header>
          <h1 className="font-bold text-3xl lg:text-4xl text-slate-100 mb-2">
            Featured Projects
          </h1>
          <p className="text-slate-400 text-lg">
            A collection of projects I've built with modern technologies
          </p>
        </header>

        {publishedProjects.length > 0 ? (
          publishedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              tools={tools}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400">No published projects yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
