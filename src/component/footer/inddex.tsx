import { Link } from "react-router-dom";
import {
  IconLogoBe,
  IconLogoFb,
  IconLogoIg,
  IconLogoPinterest,
  IconLogoTwitter,
} from "src/assets/icons";
import { LogoFooter } from "src/assets/images";

import { RatioW } from "src/helper/const";

export const Footer = () => {
  return (
    <div>
      <div className=" bg-[#925E3B] mt-[120px]">
        <div className="w-[85%] sm:w-[80%] md:[w-72%] lg:flex items-center mx-auto py-[60px] justify-between">
          <div>
            <div className="text-[38px] lg:text-[40px] xl:[48px] font-normal">
              Subscribe to Our Newsletter
            </div>
            <div className="leading-[45px] text-2xl">
              Stay in the loop with Bakery news and updates
            </div>
          </div>

          <div className="md:min-w-[524px] pt-4 lg:pt-0">
            <input
              placeholder="Your email address"
              type="text"
              className="bg-[#FFFFFF] h-14 rounded-xl pl-7 text-[#311213] w-full"
            />{" "}
            <br />
            <button className="bg-[#311213] h-14 rounded-xl text-center mt-5 uppercase text-base w-full">
              Subscribe now
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-[#311213] pt-[82px] pb-[50px]">
        <div className="w-[72%] mx-auto  sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 ">
          <div className="col-span-3 lg:col-span-2 w-fit mx-auto mb-6 sm:w-auto sm:m-0 ">
            <LogoFooter width={248} />
            <div className="flex gap-6">
              <IconLogoBe width={30} />
              <IconLogoPinterest width={30} />
              <IconLogoIg width={30} />
              <IconLogoTwitter width={30} />
              <IconLogoFb width={30} />
            </div>
          </div>

          <div>
            <div className="text-[#DFE4EB] text-2xl font-bold capitalize my-4 sm:my-0 text-center sm:text-left">
              Quick links
            </div>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              Home
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              About us
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              Offers
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              Services
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              Contact us
            </Link>
          </div>

          <div>
            <div className="text-[#DFE4EB] leading-8 block text-2xl font-bold capitalize my-4 sm:my-0 text-center sm:text-left">
              About
            </div>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              How it work
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              Pricing
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              promotions
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              refer a friend
            </Link>
          </div>

          <div>
            <div className="text-[#DFE4EB] leading-8 block text-2xl font-bold capitalize my-4 sm:my-0 text-center sm:text-left">
              Help Centre
            </div>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              Payments
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              FAQs
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              Checkout
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] capitalize block text-base font-normal hover:underline text-center sm:text-left"
            >
              other Issuesv
            </Link>
          </div>
        </div>
        <div className="w-[72%] mx-auto border-t text-base border-t-[#BBC7D4] block sm:flex items-center justify-between h-auto sm:h-[70px] mt-[100px]">
          <div className=" mt-4 sm:mt-0text-center sm:text-left">
            © 2024 TemplatesJungle. All rights reserved.
          </div>
          <div className="mt-4 sm:mt-0 text-center sm:text-left">
            Design by <span className="font-bold">TemplatesJungle</span>
          </div>
        </div>
      </div>
    </div>
  );
};
