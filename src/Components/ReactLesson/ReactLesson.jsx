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


const ReactLesson = () => {
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
      >
        <div>
            <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=1' />
            <p>React redux tutorial episode 1</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=0eluxklOZVo' />
            <p>React redux tutorial episode 2</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=3rlUADfuKhQ' />
            <p>React redux tutorial episode 2</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default ReactLesson