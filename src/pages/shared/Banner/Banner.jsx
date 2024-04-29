import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Slider from "../../../components/Slider/Slider";

function Banner() {
  const data = useLoaderData();
  return (
    <div className="pb-10">
      <Swiper
        className="mySwiper"
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Slider data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
