"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Navigation,  } from "swiper/modules";
import Image from "next/image";

// Importar estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Galeria() {
  const imagens = [
    { src: "/img1.jpeg", alt: "galeria" },
    { src: "/img2.jpeg", alt: "galeria" },
    { src: "/img1.jpeg", alt: "galeria" },
  ];

  return (
    <section id="galeria" className="">

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="max-w-[95vw] sm:max-w-xl md:max-w-[40vw] mx-auto rounded-xl shadow-lg"
      >
        {imagens.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className="w-full h-[30vh] md:h-[50vh] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
