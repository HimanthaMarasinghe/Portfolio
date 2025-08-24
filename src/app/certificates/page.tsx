'use client';

import Certificate1 from "@/components/certificates/certificate1";
import Certificate2 from "@/components/certificates/certificate2";
import Certificate3 from "@/components/certificates/certificate3";
import Certificate4 from "@/components/certificates/certificate4";
import Certificate5 from "@/components/certificates/certificate5";
import Certificate6 from "@/components/certificates/certificate6";
import Certificate7 from "@/components/certificates/certificate7";
import Certificate8 from "@/components/certificates/certificate8";
import Certificate9 from "@/components/certificates/certificate9";
import Certificate10 from "@/components/certificates/certificate10";
import Certificate11 from "@/components/certificates/certificate11";
import Certificate12 from "@/components/certificates/certificate12";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ContactUs() {
  return (
    <div className="h-full w-full">
      <h1 className="text-4xl font-bold">CERTIFICATES</h1>
      <Swiper
        direction="vertical"
        effect="coverflow"
        grabCursor={true}
        loop={true}
        slideToClickedSlide={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1, // Increase to make scrolling more sensitive (try 1 to 3)
          thresholdDelta: 20, // Optional: Increase to require more scroll to trigger
        }}
        centeredSlides={true}
        keyboard={{ enabled: true, onlyInViewport: true }}
        slidesPerView={1.5}
        coverflowEffect={{
          rotate: -50,
          stretch: 50,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard]}
        className="w-full h-full"
      >
        <SwiperSlide><Certificate1 /></SwiperSlide>
        <SwiperSlide><Certificate2 /></SwiperSlide>
        <SwiperSlide><Certificate3 /></SwiperSlide>
        <SwiperSlide><Certificate4 /></SwiperSlide>
        <SwiperSlide><Certificate5 /></SwiperSlide>
        <SwiperSlide><Certificate6 /></SwiperSlide>
        <SwiperSlide><Certificate7 /></SwiperSlide>
        <SwiperSlide><Certificate8 /></SwiperSlide>
        <SwiperSlide><Certificate9 /></SwiperSlide>
        <SwiperSlide><Certificate10 /></SwiperSlide>
        <SwiperSlide><Certificate11 /></SwiperSlide>
        <SwiperSlide><Certificate12 /></SwiperSlide>
      </Swiper>
    </div>
  );
}
