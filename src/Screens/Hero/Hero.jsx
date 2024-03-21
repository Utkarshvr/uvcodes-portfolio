import SocialLinks from "@/Components/SocialLinks";
import Button from "@/Components/common/Button";
import { heroContent } from "@/constants/content";

async function getHeroTexts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/texts`, {
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function getCVFile() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/media/${process.env.NEXT_PUBLIC_CV_FILENAME}`,
      {
        cache: "no-cache",
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function myPic() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/media/${
        process.env.NEXT_PUBLIC_MYPIC_NAME || "my-picture"
      }`,
      {
        cache: "no-cache",
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function Hero() {
  const data = await getHeroTexts();
  const cv_data = await getCVFile();
  const pic_data = await myPic();

  const heroTexts = data?.texts;
  const CVDOC = cv_data?.media;
  const my_pic = pic_data?.media;

  const heroTitle =
    heroTexts?.find((txt) => txt.type === "hero-title")?.text ||
    heroContent.title;
  const heroSubTitle =
    heroTexts?.find((txt) => txt.type === "hero-subtitle")?.text ||
    heroContent["small-headline"];
  const heroDesc =
    heroTexts?.find((txt) => txt.type === "hero-description")?.text ||
    heroContent.text;

  return (
    <section
      id="about"
      className="px-4 mt-[10vh] py-20 md:py-15 flex flex-col items-center justify-center gap-6"
    >
      <div className="flex max-w-[700px] flex-col gap-4 items-center justify-center">
        <img
          src={my_pic?.media?.secure_url || "/me.png"}
          className="w-20 h-20  md:w-[160px] md:h-[160px] rounded-full border-[6px] border-white object-cover"
        />

        <h6 className="text-sm selection:font-bold text-center md:text-2xl text-neutral-200">
          {heroSubTitle}
        </h6>

        <h1 className="font-bold text-4xl md:text-6xl text-white text-center">
          {heroTitle}
        </h1>

        <p className="text-sm text-neutral-200 md:text-lg text-center">
          {heroDesc}
        </p>
      </div>
      <Button
        isLink
        download={"Utkarsh CV.pdf"}
        href={CVDOC?.media?.secure_url || "/Utkarsh CV.pdf"}
      >
        Download CV
      </Button>
      {/* LINKS */}
      <SocialLinks />
    </section>
  );
}
