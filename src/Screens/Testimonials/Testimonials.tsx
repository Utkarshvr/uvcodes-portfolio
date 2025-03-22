export default function Testimonials({ testimonial }: { testimonial: string }) {
  return (
    <section
      id="testimonials"
      className="md:px-9 px-4 min-h-svh flex flex-col items-center justify-center gap-4"
    >
      <h1 className="w-full font-bold text-2xl text-start">Testimonials</h1>
      <img src={testimonial} alt="testimonial" />
    </section>
  );
}
