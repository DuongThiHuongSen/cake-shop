import { Link } from "react-router-dom";
import { BekaryLogo } from "./assets/icons";
import { BannerText } from "./assets/images";
import CakeBannerItem from "./component/CakeBannerItem";
import { ExceptionalQuality } from "./component/exceptional-quality";
import { MomentOfPureJoy } from "./component/moment";
import { NewArrival } from "./component/new-arrival";
import { Review } from "./component/review";
import { SliceImage } from "./component/slice-image/SliceImage";
import { RatioW } from "./helper/const";
import { News } from "./component/news";
import { Footer } from "./component/footer/inddex";

function App() {
  return (
    <div className="w-full relative ">
      <img
        src="/images/bg_banner.png"
        className="absolute top-0 "
        alt=""
        width={"100%"}
      />

      <div className="absolute top-0 w-full text-white">
        <div className="w-[83%] mx-auto mt-[60px] h-[84px] border-y border-white font-bold text-2xl uppercase flex justify-between items-center">
          <div className="flex justify-between w-[40%] ">
            <Link className="hover:underline" to={"/"}>
              Home
            </Link>
            <Link className="hover:underline" to={"/"}>
              About
            </Link>
            <Link className="hover:underline" to={"/"}>
              Menu
            </Link>
            <Link className="hover:underline" to={"/"}>
              Blog
            </Link>
            <Link className="hover:underline" to={"/"}>
              Contact
            </Link>
          </div>
            
          <BekaryLogo />
          <div className="flex justify-between w-[40%]">
            <Link className="hover:underline" to={"/"}>
              Home
            </Link>
            <Link className="hover:underline" to={"/"}>
              About
            </Link>
            <Link className="hover:underline" to={"/"}>
              Menu
            </Link>
            <Link className="hover:underline" to={"/"}>
              Blog
            </Link>
            <Link className="hover:underline" to={"/"}>
              Contact
            </Link>
          </div>
        </div>

        <div className="ml-[8.5%] mt-[174px] flex items-end justify-between">
          <BannerText
            width={437 * RatioW}
            height={304 * RatioW}
            className="mb-4"
          />

          <div className="flex gap-[30px]">
            <CakeBannerItem
              img="/images/priscilla.png"
              bgBottomColor="#A94D30"
              text="Bread and Rolls"
            />
            <CakeBannerItem
              img="/images/priscilla2.png"
              bgBottomColor="#311213"
              text="Pastries and Breakfast"
            />
            <CakeBannerItem
              img="/images/priscilla3.png"
              bgBottomColor="#925E3B"
              text="Cakes and Cupcake"
            />
          </div>
        </div>

        <div className="bg-[#311213] w-[84%] mx-auto mt-[76px] h-[227px] flex items-center justify-between px-[50px] gap-[2%]">
          <div>
            <div className="font-bold text-xl capitalize pb-6">
              Free Delivery
            </div>
            <div className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor
              sit amet.
            </div>
          </div>

          <div>
            <div className="font-bold text-xl capitalize pb-6">
              100% secure payment
            </div>
            <div className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor
              sit amet.
            </div>
          </div>
          <div>
            <div className="font-bold text-xl capitalize pb-6">
              Quality guarantee
            </div>
            <div className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor
              sit amet.
            </div>
          </div>
          <div>
            <div className="font-bold text-xl capitalize pb-6">
              guaranteed savings
            </div>
            <div className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor
              sit amet.
            </div>
          </div>
        </div>

        <SliceImage />
        <ExceptionalQuality />
        <MomentOfPureJoy />
        <NewArrival />
        <Review />
        <News />
        <Footer />
      </div>
    </div>
  );
}
export default App;
