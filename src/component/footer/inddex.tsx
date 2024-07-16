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
        <div className="w-[72%] flex items-center mx-auto py-[60px] justify-between">
          <div>
            <div className="text-[48px] font-normal">
              Subscribe to Our Newsletter
            </div>
            <div className="leading-[45px] text-2xl">
              Stay in the loop with Bakery news and updates
            </div>
          </div>
          <div>
            <input
              placeholder="Your email address"
              type="text"
              className="bg-[#FFFFFF] h-14 rounded-xl pl-7 text-[#311213]"
              style={{
                width: 524 * RatioW,
              }}
            />{" "}
            <br />
            <button
              style={{
                width: 524 * RatioW,
              }}
              className="bg-[#311213] h-14 rounded-xl text-center mt-5 uppercase text-base"
            >
              Subscribe now
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#311213] pt-[82px] pb-[50px]">
        <div className="w-[72%] mx-auto grid grid-cols-5">
          <div className="col-span-2">
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
            <div className="text-[#DFE4EB] text-2xl font-bold ">
              Quick links
            </div>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              Home
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              About us
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              Offers
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              Services
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              Contact us
            </Link>
          </div>

          <div>
            <div className="text-[#DFE4EB] leading-8 capitalize block text-2xl font-bold capitalize">
              About
            </div>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              How it work
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              Pricing
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              promotions
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              refer a friend
            </Link>
          </div>

          <div>
            <div className="text-[#DFE4EB] leading-8 capitalize block text-2xl font-bold">
              Help Centre
            </div>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              Payments
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] leading-8 capitalize block text-base font-normal hover:underline"
            >
              FAQs
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] capitalize block text-base font-normal hover:underline"
            >
              Checkout
            </Link>
            <Link
              to={""}
              className="text-[#DFE4EB] capitalize block text-base font-normal hover:underline"
            >
              other Issuesv
            </Link>
          </div>
        </div>
        <div className="w-[72%] mx-auto border-t text-base border-t-[#BBC7D4] flex items-center justify-between h-[70px] mt-[100px]">
          <div>© 2024 TemplatesJungle. All rights reserved.</div>
          <div>
            Design by <span className="font-bold">TemplatesJungle</span>
          </div>
        </div>
      </div>
    </div>
  );
};
