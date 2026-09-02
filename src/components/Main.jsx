import Image from "next/image";

const background = "/gallery/albums/Destination%20weddings/yellow-06.PNG";

export default function Main() {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <div className="relative w-full h-[100svh] overflow-hidden">
        <Image
          src={background}
          alt=""
          fill
          priority
          quality={85}
          className="object-cover object-center"
        />
      </div>
      <div className="relative z-10 text-center text-white" />
    </section>
  );
}
