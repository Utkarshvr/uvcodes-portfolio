import SocialLinks from "@/Components/SocialLinks";
import Button from "@/Components/common/Button";

import AutoReveal from "@/Components/framer-motion/AutoReveal";
import CONTENT_BLOCK_TYPE from "@/types/CONTENT_BLOCK_TYPE";

export default function Hero({
  contentBlocks,
}: {
  contentBlocks: CONTENT_BLOCK_TYPE[];
}) {
  function getContentBlock(val: string) {
    return contentBlocks.find((t) => t.title === val)?.text;
  }
  const socialLinks = contentBlocks.filter((b) => b.type === "link");

  return (
    <section
      id="about"
      className="px-4 mt-[8vh] py-16 md:py-15 min-h-[92vh] flex flex-col items-center justify-center gap-6"
    >
      <div className="flex max-w-[700px] flex-col gap-4 items-center justify-center">
        <AutoReveal delay={0.1}>
          <img
            src={getContentBlock("mypic") || "/me.png"}
            className="w-36 h-36 md:w-[200px] md:h-[200px] rounded-full border-[6px] border-white object-cover"
          />
        </AutoReveal>

        <AutoReveal delay={0.2}>
          <h6 className="text-sm selection:font-bold text-center md:text-2xl text-neutral-360">
            {getContentBlock("hero-subtitle")}
          </h6>
        </AutoReveal>

        <AutoReveal delay={0.3}>
          <h1 className="font-bold text-4xl md:text-6xl text-white text-center">
            {getContentBlock("hero-title")}
          </h1>
        </AutoReveal>

        <AutoReveal delay={0.4}>
          <p className="text-sm text-neutral-360 md:text-lg text-center">
            {getContentBlock("hero-description")}
          </p>
        </AutoReveal>
      </div>

      <AutoReveal delay={0.5}>
        <Button
          fullWidth
          isLink
          download={"Utkarsh CV.pdf"}
          href={getContentBlock("my-cv") || "/Utkarsh CV.pdf"}
        >
          View CV
        </Button>
      </AutoReveal>

      {/* LINKS */}
      <AutoReveal delay={0.6}>
        <SocialLinks socialLinks={socialLinks} />
      </AutoReveal>
    </section>
  );
}
