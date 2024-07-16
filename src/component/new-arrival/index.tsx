import { RatioW } from "src/helper/const";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

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
      <div className="mx-auto w-fit flex gap-[30px] items-center">
        <img src="images/New_Arrivals.png" alt="" width={276 * RatioW} />

        <div className="w-[205px] text-[#A94D30] font-normal text-sm">
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
