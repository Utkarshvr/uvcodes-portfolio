import socialLinks from "@/constants/socialLinks";
import Link from "next/link";

async function getLinks() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/links`, {
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function SocialLinks({ alignStart }) {
  const data = await getLinks();
  const links = data?.links || [];
  console.log({ links });

  return (
    <ul
      className={`w-full flex  items-center ${
        alignStart ? "justify-start" : "justify-center"
      } gap-4`}
    >
      {links?.length > 0
        ? links?.map((link) => (
            <li className="icon" key={link?.type}>
              <Link target="_blank" href={link?.link}>
                {
                  socialLinks.find(({ platform }) => platform === link?.type)
                    ?.icon
                }
              </Link>
            </li>
          ))
        : socialLinks.map(({ link, icon, platform }) => (
            <li className="icon" key={platform}>
              <Link target="_blank" href={link}>
                {icon}
              </Link>
            </li>
          ))}
    </ul>
  );
}
