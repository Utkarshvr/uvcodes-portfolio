import { Carousel } from "flowbite-react";

export default function MyCarousel({ images }: { images: string[] }) {
  return (
    <Carousel className="h-[340px] sm:h-[440px] md:h-[340px]">
      {images.map((img) => (
        <img key={img} src={img} alt={img} height={250} />
      ))}
    </Carousel>
  );
}
