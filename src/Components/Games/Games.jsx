import ReactPlayer from "react-player/youtube"
import 'swiper/css';
import { useState, useEffect } from 'react';
import { Navigation} from 'swiper';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

const Games = () => {
  const [breakpoint, setBreakpoint] = useState({
    slidesPerView: 4,
    spaceBetween: 50,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 320) {
        setBreakpoint({
          slidesPerView: 1,
          spaceBetween: 10,
        });
      } else if (window.innerWidth < 480) {
        setBreakpoint({
          slidesPerView: 1,
          spaceBetween: 20,
        });
      } else if (window.innerWidth < 768) {
        setBreakpoint({
          slidesPerView: 1.5,
          spaceBetween: 20,
        });
      } else if (window.innerWidth < 1024) {
        setBreakpoint({
          slidesPerView: 2.3,
          spaceBetween: 20,
        });
      } else if (window.innerWidth < 1200) {
        setBreakpoint({
          slidesPerView: 2.4,
          spaceBetween: 20,
        });
      }
       else {
        setBreakpoint({
          slidesPerView: 2.5,
          spaceBetween: 10,
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="react-player">
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={breakpoint.spaceBetween}
        slidesPerView={breakpoint.slidesPerView}
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