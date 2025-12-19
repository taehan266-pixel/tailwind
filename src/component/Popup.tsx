import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/pagination'

interface PopupProps {
  isPopshow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup({ isPopshow }: PopupProps) {
  return (
    <div className="fixed top-0 w-full h-full start-0 bg-black/70 z-[100000] 
                    flex flex-col justify-center items-center popup px-4">

      <div className='text-white flex justify-between items-center w-full max-w-[600px] pb-2 px-2'>
        <p>
            오늘 그만보기            
        </p>
        <button onClick={ () => { isPopshow(false)}}>닫기</button>
      </div>

      <Swiper
       className='md:max-w-[600px] w-full rounded-[30px] overflow-hidden'
       spaceBetween={0}
       slidesPerView={1}
       modules={[Autoplay, Pagination]}
       pagination={{
        type: 'fraction',
       }}
       autoplay={{
        delay: 4000,
        disableOnInteraction: false,
       }}
       loop={true}
>
         <SwiperSlide>
            <img src="/popup/1.jpg" className='w-full'></img>
         </SwiperSlide>
         <SwiperSlide>
            <img src="/popup/2.jpg" className='w-full'></img>
         </SwiperSlide>
         <SwiperSlide>
            <img src="/popup/3.jpg" className='w-full'></img>
         </SwiperSlide>
       </Swiper>
    </div>
  )
}
