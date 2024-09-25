"use client";

import styles from "./today.module.css";
import Headline from "@/components/headline/headline";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoverToday from "@/components/cover/today_cover/cover";

export default function Today() {
  return (
    <div className={styles.today}>
      <Headline>Популярное сегодня</Headline>
      <div className={styles.content}>
        <Swiper slidesPerView={5} loop>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
          <SwiperSlide>
            <CoverToday />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
