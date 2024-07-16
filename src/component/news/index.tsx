import { RatioW } from "src/helper/const";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const news: { image: string; title: string; time: string }[] = [
  {
    image: "images/event1.png",
    title: "Exploring Flavor Trends in Cake: What's Hot in 2024",
    time: "news - Jan 30, 2023",
  },
  {
    image: "images/event1.png",
    title: "How Custom Cakes Are Designed and Executed",
    time: "news - Jan 21, 2023",
  },
  {
    image: "images/event1.png",
    title: "Cake Pairing 101: Matching Cakes with the Perfect Beverage",
    time: "news - Jan 30, 2023",
  },
];

export const News = () => {
  return (
    <div className="w-[86%] mx-auto mt-[80px] text-[#311213]">
      <div className="flex items-center justify-between">
        <div className="w-fit text-[48px] font-light">News & Events </div>
        <button className="w-fit text-sm font-light py-[18px] px-[50px] bg-[#311213] rounded-lg text-white">
          View all news
        </button>
      </div>

      <Swiper
        className="mt-[45px]"
        slidesPerView={3}
        spaceBetween={30 * RatioW}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {news.map((n, index) => {
          return (
            <SwiperSlide
              key={index.toString()}
              style={{ width: "fit-content" }}
            >
              <div className="">
                <img src={n.image} alt="" className="w-full" />
                <div className="font-light pt-5 text-[#777777] text-sm uppercase">
                  {n.time}
                </div>
                <div className="text-xl font-normal text-[#311213] ">
                  {n.title}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
