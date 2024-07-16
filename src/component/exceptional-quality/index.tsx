import { Link } from "react-router-dom";
import { RatioW } from "src/helper/const";

export const ExceptionalQuality = () => {
  const Ratio = RatioW > 1 ? 1 : RatioW;
  const width = Ratio * 720;
  const height = 660 * Ratio;
  const widthText = 662 * Ratio;
  const widthText2 = 470 * Ratio;
  return (
    <div
      className={`mx-auto py-[131px] relative`}
      style={{ width: RatioW > 1 ? "70%" : "77%" }}
    >
      <img src="/images/artur1.png" alt="" style={{ width, height }} />
      <div
        className=" absolute top-[131px] right-0 "
        style={{ width: widthText }}
      >
        <div className="flex flex-col items-end pt-8">
          <img
            src="/images/exceptional_quality.png"
            alt=""
            className="object-contain "
            style={{ width: widthText2 }}
          />

          <div
            className="bg-[#311213] p-[75px] flex flex-col items-left justify-around "
            style={{ height: 517 * Ratio }}
          >
            <div className="text-2xl leading-[50px]">
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
    </div>
  );
};
