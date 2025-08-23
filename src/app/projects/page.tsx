'use client';

import Project1 from "@/components/projects/project1";
import Project2 from "@/components/projects/project2";
import Project3 from "@/components/projects/project3";
import Project4 from "@/components/projects/project4";
import Project5 from "@/components/projects/project5";
import Project6 from "@/components/projects/project6";
import Project7 from "@/components/projects/project7";
import Project8 from "@/components/projects/project8";
import Project9 from "@/components/projects/project9";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function ContactUs() {
  return (
    <div className="h-full w-full">
      <h1 className="text-4xl font-bold">PROJECTS</h1>
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
        <SwiperSlide><Project1 /></SwiperSlide>
        <SwiperSlide><Project2 /></SwiperSlide>
        <SwiperSlide><Project3 /></SwiperSlide>
        <SwiperSlide><Project4 /></SwiperSlide>
        <SwiperSlide><Project5 /></SwiperSlide>
        <SwiperSlide><Project6 /></SwiperSlide>
        <SwiperSlide><Project7 /></SwiperSlide>
        <SwiperSlide><Project8 /></SwiperSlide>
        <SwiperSlide><Project9 /></SwiperSlide>
      </Swiper>
    </div>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="bg-purple-700 rounded-xl h-full flex items-center justify-center text-xl font-bold">
      {title}
    </div>
  );
}
