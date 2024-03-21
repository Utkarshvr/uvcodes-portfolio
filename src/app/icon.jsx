import Image from "next/image";
// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return (
    <Image
      src={
        "https://res.cloudinary.com/di7b9ifgh/image/upload/v1711011225/my-picture.jpg"
      }
      alt="Pic"
      width={size.width}
      height={size.height}
    />
  );
}
