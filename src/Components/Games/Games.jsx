import ReactPlayer from "react-player/youtube"
import 'swiper/css';
import { Navigation} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';

const Games = () => {
  return (
    <div className="react-player">
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={40}
      slidesPerView={2.5}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

    >
      <SwiperSlide
        className="swiper"
      
      >
        <div>
            <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=z2XS_RryJGk' />
            <p>THE LAST OF US 2 PS5 Gameplay 4K</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=Shx25VagEKU' />
            <p>Call of Duty: Modern Warfare</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=sF-1cVKf6V0' />
            <p>Rebuilding Bugatti Chiron - Forza Horizon 5</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=kBfn7DNUPLY&t=16038s' />
            <p>FAR CRY 6 Gameplay Walkthrough FULL GAME 4K</p>
        </div>
      </SwiperSlide>
      
      ...
    </Swiper>
    </div>
  )
}

export default Games