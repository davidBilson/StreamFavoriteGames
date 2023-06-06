// import ReactPlayer from "react-player/youtube"
// import 'swiper/css';
// import { Navigation} from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css';


// const ReactLesson = () => {
//   return (
//     <div className="react-player">
//     <Swiper
//       modules={[Navigation, A11y]}
//       spaceBetween={40}
//       slidesPerView={2.5}
//       navigation
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}

//     >
//       <SwiperSlide
//       >
//         <div>
//             <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=9boMnm5X9ak&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=1' />
//             <p>React redux tutorial episode 1</p>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div>
//             <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=0eluxklOZVo' />
//             <p>React redux tutorial episode 2</p>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//       <div>
//             <ReactPlayer controls width={'100%'} url='https://www.youtube.com/watch?v=3rlUADfuKhQ' />
//             <p>React redux tutorial episode 2</p>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//     </div>
//   )
// }

// export default ReactLesson


import ReactPlayer from "react-player/youtube"
import 'swiper/css';
import { useState, useEffect } from 'react';
import { Navigation} from 'swiper';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

const ReactLesson = () => {
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
      {/* NODEJS CODEVOLUTION*/}
      <SwiperSlide>
      <div>
            <ReactPlayer controls width={'100%'} url='https://youtu.be/JQfOtwfDohY' />
            <p>NodeJS Episode 13</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <ReactPlayer controls width={'100%'} url='https://youtu.be/F_GmxjP80so' />
            <p>NodeJS Episode 14</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <ReactPlayer controls width={'100%'} url='https://youtu.be/ghUIlSNRru0' />
            <p>NodeJS Episode 15</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <ReactPlayer controls width={'100%'} url='https://youtu.be/g98XlFOiXz0' />
            <p>NodeJS Episode 16</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <ReactPlayer controls width={'100%'} url='https://youtu.be/Es7SzBBc6qE' />
            <p>NodeJS Episode 17</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
            <ReactPlayer controls width={'100%'} url='https://youtu.be/kRG8QpOKZE4' />
            <p>NodeJS Episode 18</p>
        </div>
      </SwiperSlide>
      {/* NODEJS #100DEVS */}
      {/* ADVANCED REACT SCRIMBA*/}
      {/* REDUX TOOLKIT CODEVOLUTION */}
    </Swiper>
    </div>
  )
}

export default ReactLesson