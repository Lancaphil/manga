"use client";

import styles from "./best.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Slide from "@/components/cover/slide/slide";

export default function Best() {
  return (
    <div className={styles.best}>
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        loop
        speed={3000}
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
