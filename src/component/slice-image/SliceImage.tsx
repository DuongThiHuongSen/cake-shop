import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "./index.scss";

const silceData: { title: string; image: string }[] = [
  { title: "Pizzas", image: "nathan1.png" },
  { title: "Bakery", image: "nathan2.png" },
  { title: "Cakes", image: "nathan3.png" },
  { title: "Pastries", image: "nathan4.png" },
  { title: "Pizzas", image: "nathan1.png" },
  { title: "Bakery", image: "nathan2.png" },
  { title: "Cakes", image: "nathan3.png" },
  { title: "Pastries", image: "nathan4.png" },
];

export const SliceImage = () => {
  return (
    <div className="SliceImageStyle w-[84%] mx-auto pt-[105px] flex items-center justify-between gap-5">
      <Swiper
        className="w-full"
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {silceData.map((s, index) => {
          return (
            <SwiperSlide
              key={index.toString()}
              style={{ width: "fit-content" }}
              className="w-fit"
            >
              <div className="w-fit">
                <div className="text-[#311213] font-bold text-base pb-2">{`${
                  index <= 9 ? "0" : ""
                }${index + 1}. ${s.title}`}</div>
                <img
                  src={`/images/${s.image}`}
                  alt=""
                  className="h-[300px] w-fit"
                  w-auto
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
