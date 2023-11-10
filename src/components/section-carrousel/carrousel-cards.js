"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { CardNFT } from "../card-nft";
import { useRef } from "react";
import Image from "next/image";

import Arrow from "@/assets/arrow.svg";

export function CarrouselCards({ data }) {
  const swiperRef = useRef();

  return (
    <div className="relative w-full">
      <button className="w-12 h-12 bg-blue-primary hover:bg-gray-button-carrousel transition-all ease-linear border border-white border-opacity-5 rounded-full items-center justify-center  absolute z-10 top-1/2 -left-6 -mt-6 hidden @desktop:flex">
        <Image
          src={Arrow}
          alt="Arrow Previous"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        />
      </button>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.3}
        spaceBetween={24}
        speed={800}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 24,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        className="!px-3"
      >
        {data.map(({ name, thumbnail, value, value_brl, index }) => (
          <SwiperSlide key={index}>
            <CardNFT
              name={name}
              thumbnail={thumbnail}
              value={value}
              value_brl={value_brl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="w-12 h-12 bg-blue-primary hover:bg-gray-button-carrousel transition-all ease-linear border border-white border-opacity-5  rounded-full items-center justify-center absolute  top-1/2 -right-6 z-10 -mt-6 rotate-180 hidden @desktop:flex"
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        <Image src={Arrow} alt="Arrow Previous" />
      </button>
    </div>
  );
}
