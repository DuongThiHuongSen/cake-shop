import { Link } from "react-router-dom";
import { BekaryLogo, HumbergerIcon } from "./assets/icons";
import { BannerText } from "./assets/images";
import CakeBannerItem from "./component/CakeBannerItem";
import { ExceptionalQuality } from "./component/exceptional-quality";
import { MomentOfPureJoy } from "./component/moment";
import { NewArrival } from "./component/new-arrival";
import { Review } from "./component/review";
import { SliceImage } from "./component/slice-image/SliceImage";
import { RatioW, SCREEN_WIDTH } from "./helper/const";
import { News } from "./component/news";
import { Footer } from "./component/footer/inddex";

function App() {
  return (
    <div className="w-full relative ">
      <img
        src="/images/bg_banner.png"
        className="absolute top-0 min-h-[620px] object-cover"
        alt=""
        width={"100%"}
      />

      <div className="absolute top-0 w-full text-white">
        <div className="w-[83%] mx-auto mt-4 md:mt-[60px]  h-[84px] border-y border-white font-bold text-2xl xl:text-xl lg:text-lg md:text-sm uppercase flex justify-between items-center">
          <BekaryLogo className="block md:hidden" />
          <div className="inline-block md:hidden relative group">
            <HumbergerIcon className="w-10 cursor-pointer" />
            <div className="absolute hidden group-hover:block bg-[#311213] right-0 p-4 rounded-md text-base">
              <Link className="hover:underline block py-2" to={"/"}>
                Home
              </Link>
              <Link className="hover:underline block py-2" to={"/"}>
                About
              </Link>
              <Link className="hover:underline block py-2" to={"/"}>
                Menu
              </Link>
              <Link className="hover:underline block py-2" to={"/"}>
                Blog
              </Link>
              <Link className="hover:underline block py-2" to={"/"}>
                Contact
              </Link>
            </div>
          </div>

          <div className="justify-between w-[40%] hidden md:flex">
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

          <BekaryLogo className="hidden md:block lg:w-[145px] w-[100px]" />
          <div className="justify-between w-[40%] hidden md:flex">
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

        <div className="ml-0 xl:ml-[8.5%] mt-[80px] block xl:mt-[174px] xl:flex items-end justify-between">
          <BannerText
            width={SCREEN_WIDTH < 640 ? undefined : 437 * RatioW}
            height={SCREEN_WIDTH < 640 ? undefined : 304 * RatioW}
            className="mb-20 xl:w-[320px] xl:mb-4 mr-4 ml-[8.5%]"
          />

          <div className="block ml-0 md:ml-[8.5%] md:flex gap-[30px]">
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

        <div className="bg-[#311213] w-[80%] sm:w-[84%] mx-auto mt-[76px] h-auto xl:h-[227px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 px-[50px] py-[38px] gap-y-8 gap-x-6 xl:gap-[2%]">
          <div>
            <div className="font-bold text-xl capitalize pb-2 xl:pb-6">
              Free Delivery
            </div>
            <div className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor
              sit amet.
            </div>
          </div>

          <div>
            <div className="font-bold text-xl capitalize pb-2 xl:pb-6">
              100% secure payment
            </div>
            <div className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor
              sit amet.
            </div>
          </div>

          <div>
            <div className="font-bold text-xl capitalize pb-2 xl:pb-6">
              Quality guarantee
            </div>
            <div className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor
              sit amet.
            </div>
          </div>

          <div>
            <div className="font-bold text-xl capitalize pb-2 xl:pb-6">
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
