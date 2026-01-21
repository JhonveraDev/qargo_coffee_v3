// 1. Cambiamos la forma de importar para que Vite lo encuentre físicamente
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'; // Cambiado de 'swiper/modules' a 'swiper'

import { popularChoicesData } from '../index';
import { Button } from '../../../ui/components/Button';

// Estilos (Mantener así)
import 'swiper/css';
import 'swiper/css/pagination';

export const PopularChoices = () => {
  return (
    <div className="popular-choices">
      <h2 className="popular-choices__title">Most popular choices</h2>

      <Swiper
        /* 2. El módulo Pagination ahora se pasa correctamente desde 'swiper' */
        modules={[Pagination]} 
        slidesPerView={3}
        spaceBetween={5}
        pagination={{ clickable: true }}
        loop={true}
        centeredSlides={true}
      >
        {popularChoicesData.map((product, index) => (
          <SwiperSlide key={index}>
            <img src={product.img} alt={product.text} />
            <Button text={product.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};