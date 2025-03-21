import TOOL_TYPE from "@/types/TOOL_TYPE";

export default function Tools({
  projectTools,
  allTools,
}: {
  projectTools: string[];
  allTools: TOOL_TYPE[];
}) {
  if (allTools && projectTools)
    return (
      <div className="flex gap-3 items-center flex-wrap">
        {projectTools.map(
          (tool) =>
            tool && (
              <img
                key={tool}
                src={allTools.find((t) => t.id === tool)?.image}
                className="w-7 h-7"
                alt={allTools.find((t) => t.id === tool)?.name}
              />
            )
        )}
      </div>
    );
}
