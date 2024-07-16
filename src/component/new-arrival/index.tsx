import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const products: { image: string; name: string; price: string }[] = [
  {
    image: "images/Rectangle1.png",
    name: "Study Table set",
    price: "$120.00",
  },
  {
    image: "images/Rectangle2.png",
    name: "Study Table set",
    price: "$120.00",
  },
  {
    image: "images/Rectangle3.png",
    name: "Study Table set",
    price: "$20.00",
  },
  {
    image: "images/Rectangle4.png",
    name: "Study Table set",
    price: "$140.00",
  },
  {
    image: "images/Rectangle5.png",
    name: "Study Table set",
    price: "$199.00",
  },
  {
    image: "images/Rectangle1.png",
    name: "Study Table set",
    price: "$120.00",
  },
  {
    image: "images/Rectangle2.png",
    name: "Study Table set",
    price: "$120.00",
  },
  {
    image: "images/Rectangle3.png",
    name: "Study Table set",
    price: "$20.00",
  },
  {
    image: "images/Rectangle4.png",
    name: "Study Table set",
    price: "$140.00",
  },
  {
    image: "images/Rectangle5.png",
    name: "Study Table set",
    price: "$199.00",
  },
];

export const NewArrival = () => {
  return (
    <div className=" w-[86%] mx-auto">
      <div className="mx-auto w-fit block sm:flex gap-[30px] items-center">
        <img src="images/New_Arrivals.png" alt="" className="w-[276px]" />

        <div className="w-[205px] text-[#A94D30] font-normal pt-4 sm:pt-0 text-sm mx-auto sm:mx-0">
          Grab these amazing new furnitures before it runs out
        </div>
      </div>

      {/* listProduct */}
      <Swiper
        className="w-full mt-[45px]"
        slidesPerView={5}
        spaceBetween={5}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "300": {
            slidesPerView: 1,
          },
          "480": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "640": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "1000": {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          "1280": {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
        modules={[Pagination]}
      >
        {products.map((s, index) => {
          return (
            <SwiperSlide
              key={index.toString()}
              style={{ width: "fit-content" }}
            >
              <div className="">
                <img src={s.image} alt="" className="w-[98%]" />
                <div className="flex items-center justify-between">
                  <div className="text-[#A94D30]  text-lg leading-8 font-normal">
                    {s.name}
                  </div>
                  <div className="text-[#311213] text-base font-black">
                    {s.price}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
