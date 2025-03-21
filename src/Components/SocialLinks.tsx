import Link from "next/link";
import CONTENT_BLOCK_TYPE from "@/types/CONTENT_BLOCK_TYPE";

export default function SocialLinks({
  alignStart,
  socialLinks,
}: {
  alignStart?: boolean;
  socialLinks: CONTENT_BLOCK_TYPE[];
}) {
  return (
    <ul
      className={`w-full flex  items-center ${
        alignStart ? "justify-start" : "justify-center"
      } gap-4`}
    >
      {socialLinks
        .filter(
          (b) =>
            b.title === "github" ||
            b.title === "linkedin" ||
            b.title === "instagram"
        )
        .map((socialLink: CONTENT_BLOCK_TYPE) => (
          <li className="icon" key={socialLink.id}>
            <Link target="_blank" href={socialLink.text || ""}>
              <img
                width={32}
                height={32}
                className="p-0.5"
                src={
                  socialLink.title === "github"
                    ? "https://res.cloudinary.com/di7b9ifgh/image/upload/v1711135931/github_6f56f0dbc8.png"
                    : socialLink.title === "linkedin"
                    ? "https://res.cloudinary.com/di7b9ifgh/image/upload/v1711135932/linkedin_112c176c53.png"
                    : "https://res.cloudinary.com/di7b9ifgh/image/upload/v1711135932/instagram_b38363a03e.png"
                }
                alt={socialLink.title}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
}
