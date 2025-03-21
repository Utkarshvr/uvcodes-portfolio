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
  return (
    <section
      id="work"
      className="py-20 md:px-9 flex flex-col items-center justify-center gap-4"
    >
      <h1 className="w-full font-bold text-2xl text-start px-4 md:px-0">
        Projects
      </h1>
      {projects?.map(
        (project, index) =>
          project && (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              tools={tools}
            />
          )
      )}
    </section>
  );
}
