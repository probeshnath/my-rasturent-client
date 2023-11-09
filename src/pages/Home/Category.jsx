import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Category = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide><img src="https://i.ibb.co/Gtv7wBQ/slide1.jpg" alt="" /><h2 className='text-3xl font-bold -mt-20 text-white text-center uppercase'>Salads</h2></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/Kz2sZkY/slide2.jpg" alt="" /><h2 className='text-3xl font-bold -mt-20 text-white text-center uppercase'>PIzza</h2></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/TP5sRT0/slide3.jpg" alt="" /><h2 className='text-3xl font-bold -mt-20 text-white text-center uppercase'>Cup</h2></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/6n2YSd4/slide4.jpg" alt="" /><h2 className='text-3xl font-bold -mt-20 text-white text-center uppercase'>DEssert</h2></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/Gtv7wBQ/slide1.jpg" alt="" /><h2 className='text-3xl font-bold -mt-20 text-white text-center uppercase'>Salads</h2></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/Kz2sZkY/slide2.jpg" alt="" /><h2 className='text-3xl font-bold -mt-20 text-white text-center uppercase'>Pizza</h2></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/TP5sRT0/slide3.jpg" alt="" /><h2 className='text-3xl font-bold -mt-20 text-white text-center uppercase'>Cope</h2></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Category