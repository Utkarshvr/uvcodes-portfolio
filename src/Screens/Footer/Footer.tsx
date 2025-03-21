import SocialLinks from "@/Components/SocialLinks";
import Link from "next/link";
import CONTENT_BLOCK_TYPE from "@/types/CONTENT_BLOCK_TYPE";

export default function Footer({
  contentBlocks,
}: {
  contentBlocks: CONTENT_BLOCK_TYPE[];
}) {
  function getContentBlock(val: string) {
    return contentBlocks.find((t) => t.title === val)?.text;
  }
  const emailID = getContentBlock("email");
  const socialLinks = contentBlocks.filter((b) => b.type === "link");

  return (
    <section
      id="contact"
      className="px-4 md:px-9 py-8 bg-slate-900 rounded-lg mb-2 flex flex-col gap-4"
    >
      <h1 className="font-bold text-2xl">Let's get in touch</h1>
      <p className="text-sm text-netural-300">
        For business inquiry please send email to{" "}
        <Link href={`mailto:${emailID}`} target="_blank" className="font-bold">
          {emailID}
        </Link>
      </p>
      <SocialLinks alignStart socialLinks={socialLinks} />
    </section>
  );
}
