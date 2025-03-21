import Tools from "../Tools";
import Button from "../common/Button";
import Carousel from "../Carousel";
import Reveal from "../framer-motion/Reveal";
import PROJECT_TYPE from "@/types/PROJECT_TYPE";
import TOOL_TYPE from "@/types/TOOL_TYPE";

export default function ProjectCard({
  project,
  index,
  tools,
}: {
  project: PROJECT_TYPE;
  tools: TOOL_TYPE[];
  index: number;
}) {
  if (project) {
    const images = project.images;
    return (
      <Reveal index={index}>
        <div className="sm:flex-[0.5] flex-1">
          {images && <Carousel images={images} />}
        </div>

        <div className="flex sm:flex-[0.5] flex-1 md:justify-center flex-col p-4">
          <div className="flex flex-col gap-1 mb-4">
            <div className="flex items-center gap-2">
              <img src={project.icon} className="w-8 h-8 rounded-full" />
              <h1 className="text-xl font-bold text-slate-200 ">
                {project.title}
              </h1>
            </div>
            {/* 
            <p className="text-sm text-slate-300 font-semibold">
              ({project.type})
            </p> */}
          </div>
          <p className="text-sm text-slate-300">{project.description}</p>

          {/* TOOLS */}
          {project.tools && (
            <div className="my-4">
              <Tools projectTools={project.tools} allTools={tools} />
            </div>
          )}
          {/* CTA */}
          <div className="flex items-center justify-center gap-4">
            <Button isLink isSecondary href={project.source_code}>
              Source Code
            </Button>
            <Button isLink href={project.visit_link}>
              {project.type === "website"
                ? "Open"
                : project.type === "app"
                ? "Open App"
                : project.type === "landing-page"
                ? "Visit"
                : project.type === "ai"
                ? "Open"
                : null}
            </Button>
          </div>
        </div>
      </Reveal>
    );
  }
}
