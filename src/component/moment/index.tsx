import { Link } from "react-router-dom";
import { RatioW } from "src/helper/const";

export const MomentOfPureJoy = () => {
  const Ratio = RatioW > 1 ? 1 : RatioW;
  const width = Ratio * 598;
  const height = 549 * Ratio;
  const widthText = 764 * Ratio;

  return (
    <div
      className={`mx-auto py-[130px] relative flex justify-end`}
      style={{ width: RatioW > 1 ? "70%" : "77%" }}
    >
      <div className="absolute top-[131px] left-16">
        <div className="flex flex-col items-start pt-8">
          <img
            src="/images/moment.png"
            alt=""
            className="object-contain "
            style={{ width: widthText }}
          />

          <div
            className="items-left justify-around text-[#311213] pt-7"
            style={{ width: 503 * Ratio }}
          >
            <div className="text-2xl leading-[40px] font-light">
              Our passion for baking shines through in every creation we make.
              Using only the finest ingredients and time-honored techniques, we
              craft each treat with love and care, ensuring that every bite is a
              moment of pure joy.
            </div>
            <Link to={""}>
              <div className="bg-[#925E3B] w-fit mt-5 py-[18px] px-[50px] text-white text-sm hover:underline">
                Read More
              </div>
            </Link>
          </div>
        </div>
      </div>

      <img
        className=""
        src="/images/artur2.png"
        alt=""
        style={{ width, height }}
      />
    </div>
  );
};
