import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper';
import Image from 'next/image';
import {StyledRoot} from '@/components/Slider/style';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

const Slider = () => {
  interface itemsProps {
    id: number;
    item: string;
    name: string;
  }

  const items: itemsProps[] = [
    {
      id: 1,
      item: '/svg/Swiper.png',
      name: 'image01',
    },
    {
      id: 2,
      item: '/svg/Gecko2.png',
      name: 'image02',
    },
    {
      id: 3,
      item: '/svg/Gecko3.png',
      name: 'image03',
    },
    {
      id: 4,
      item: '/svg/Gecko4.png',
      name: 'image04',
    },
  ];
  SwiperCore.use([Navigation, Pagination, Keyboard, Scrollbar, Autoplay]);
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);
  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        effect: 'fade',
        navigation: true,
        slidesPerView: 1,
        centeredSlides: true,
        scrollbar: {draggable: true, el: null},
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: {clickable: true},
        a11y: {
          prevSlideMessage: '이전 슬라이드',
          nextSlideMessage: '다음 슬라이드',
          slideLabelMessage:
            '총{{slideLength}} 슬라이드 중 {{id}}번 슬라이드 입니다.',
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });
    }
  }, [swiperSetting]);
  return (
    <StyledRoot>
      {swiperSetting && (
        <Swiper {...swiperSetting}>
          {items.map((item, id) => (
            <SwiperSlide key={id}>
              {<Image src={item.item} alt={item.name} fill />}
            </SwiperSlide>
          ))}
          <button>정지</button>
        </Swiper>
      )}
    </StyledRoot>
  );
};

export default Slider;
