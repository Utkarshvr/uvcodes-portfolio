import Footer from "@/Screens/Footer/Footer";
import Hero from "@/Screens/Hero/Hero";
import Nav from "@/Screens/Nav/Nav";
// import Tech from "@/Screens/Tech/Tech";
import Work from "@/Screens/Work/Work";

export async function generateMetadata() {
  // fetch icon
  const pic_data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/media/${
      process.env.NEXT_PUBLIC_WEB_ICON || "web-icon"
    }`,
    {
      cache: "no-cache",
    }
  ).then((res) => res.json());

  const icon = pic_data?.media?.media?.secure_url;

  console.log({ icon });

  return {
    title: "Utkarsh Verma",
    icons: {
      icon: icon || "./me.png",
      rel: "icon",
      type: "image/png",
      sizes: "64x64",
    },
  };
}

export default function Home() {
  return (
    <main className="max-w-7xl m-auto">
      <Nav />
      <Hero />
      <Work />
      {/* <Tech /> */}
      <Footer />
    </main>
  );
}
