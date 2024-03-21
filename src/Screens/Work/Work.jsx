import WorkCard from "@/Components/cards/WorkCard";
import works from "@/constants/work";

async function getProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/projects`, {
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function Work() {
  const data = await getProjects();
  const projects = data?.projects;

  return (
    <section
      id="work"
      className="py-20 md:px-9 flex flex-col items-center justify-center gap-4"
    >
      <h1 className="w-full font-bold text-2xl text-start px-4 md:px-0">
        Projects
      </h1>
      {projects?.map((work) => (
        <WorkCard key={work._id} work={work} />
      ))}
    </section>
  );
}
