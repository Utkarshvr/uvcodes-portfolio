import Tools from "../Tools";
import Button from "../common/Button";

export default function WorkCard({ work }) {
  return (
    <div className="flex mb-8 flex-col md:flex-row md:odd:flex-row-reverse">
      <img
        src={
          Array.isArray(work.images) ? work.images[0]?.media?.secure_url : ""
        }
        className="rounded-lg w-[100%] md:w-[50%] h-[100%] max-h-[450px]"
        alt={work.title}
      />

      <div className="flex md:justify-center flex-col gap-8 p-4">
        <div className="flex items-center gap-2">
          <img
            src={work.icon?.media?.secure_url}
            className="w-8 h-8 rounded-full"
          />
          <h1 className="text-xl font-bold text-white ">{work.title}</h1>
        </div>
        <p className="text-sm text-neutral-200">{work.description}</p>

        {/* TOOLS */}
        <Tools tools={work.tools} />
        {/* CTA */}
        <div className="flex items-center justify-center gap-4">
          <Button isLink isSecondary href={work.source}>
            Source Code
          </Button>
          <Button isLink href={work.visit}>
            Open App
          </Button>
        </div>
      </div>
    </div>
  );
}
