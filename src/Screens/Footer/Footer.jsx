import SocialLinks from "@/Components/SocialLinks";
import { emailID as EMAIL } from "@/constants/socialLinks";
import Link from "next/link";

async function getEmail() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/texts/${
        process.env.NEXT_PUBLIC_EMAIL_TEXT_NAME || "email"
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

export default async function Footer() {
  const data = await getEmail();
  const emailID = data?.text?.text;
  console.log({ EMAILDATA: data });

  return (
    <section
      id="contact"
      className="px-4 md:px-9 py-8 bg-gray-800 flex flex-col gap-4"
    >
      <h1 className="font-bold text-2xl">Let's get in touch</h1>
      <p className="text-sm text-netural-300">
        For business inquiry please send email to{" "}
        <Link href={`mailto:${emailID}`} target="_blank" className="font-bold">
          {emailID}
        </Link>
      </p>
      <SocialLinks alignStart />
    </section>
  );
}
