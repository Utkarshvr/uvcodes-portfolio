import RevealOnFrame from "@/Components/framer-motion/RevealOnFrame";
import EXPERIENCE_TYPE from "@/types/EXPERIENCE_TYPE";

export default function Exprience({
  experience,
}: {
  experience: EXPERIENCE_TYPE[];
}) {
  return (
    <section
      id="experience"
      className="md:px-9 h-svh flex flex-col items-center justify-center gap-4"
    >
      <h1 className="w-full font-bold text-2xl text-start px-4 md:px-0">
        Experience
      </h1>

      <div className="flex flex-col gap-10">
        {experience.map((exp) => (
          <RevealOnFrame key={exp.id}>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <img
                  src={exp.icon}
                  className="w-7 h-7 rounded-full"
                  alt={exp.organization}
                />
                <h4 className="text-neutral-200 font-bold text-lg">
                  {exp.organization} | {exp.title}
                </h4>
              </div>
              <h5 className="text-neutral-300 font-medium text-md">
                {exp.duration}
              </h5>
              {exp.description &&
                exp.description.map((desc) => (
                  <p className="text-neutral-400">&#x2022; {desc}</p>
                ))}
            </div>
          </RevealOnFrame>
        ))}
      </div>
    </section>
  );
}
