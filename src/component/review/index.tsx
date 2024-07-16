import { RatioW } from "src/helper/const";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "./index.scss";

const reviews: { from: string; content: string; name: string }[] = [
  {
    from: "New York",
    name: "Steve Martin",
    content:
      "Our passion for baking shines through in every creation we make. Using only the finest ingredients and time-honored techniques, we craft each treat with love and care, ensuring that every bite is a moment of pure joy.",
  },
  {
    from: "Jeferrey park",
    name: "SJoe Shelf",
    content:
      "Our passion for baking shines through in every creation we make. Using only the finest ingredients and time-honored techniques, we craft each treat with love and care, ensuring that every bite is a moment of pure joy.",
  },
  {
    from: "SEattle",
    name: "Geoffrey",
    content:
      "Our passion for baking shines through in every creation we make. Using only the finest ingredients and time-honored techniques, we craft each treat with love and care, ensuring that every bite is a moment of pure joy.",
  },
  {
    from: "SEattle",
    name: "Geoffrey",
    content:
      "Our passion for baking shines through in every creation we make. Using only the finest ingredients and time-honored techniques, we craft each treat with love and care, ensuring that every bite is a moment of pure joy.",
  },
  {
    from: "SEattle",
    name: "Geoffrey",
    content:
      "Our passion for baking shines through in every creation we make. Using only the finest ingredients and time-honored techniques, we craft each treat with love and care, ensuring that every bite is a moment of pure joy.",
  },
];

export const Review = () => {
  return (
    <div className="bg-[#E8C4AD] py-10 mt-[135px] text-[#311213] ReviewStyle">
      <div className="mx-auto w-fit text-[48px] font-light">Reviews </div>

      {/* list review  */}
      <Swiper
        className="w-[86%] mt-[45px]"
        slidesPerView={3}
        spaceBetween={30 * RatioW}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {reviews.map((r, index) => {
          return (
            <SwiperSlide
              key={index.toString()}
              style={{ width: "fit-content" }}
            >
              <div className="">
                <div className="text-lg font-light">{r.content}</div>
                <div className="text-2xl font-extrabold pt-5">{r.name}</div>
                <div className="text-sm font-medium">{r.from}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
