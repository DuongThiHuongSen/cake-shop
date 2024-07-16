import { Link } from "react-router-dom";
import { RatioW, SCREEN_WIDTH } from "src/helper/const";

export const ExceptionalQuality = () => {
  const Ratio = RatioW > 1 ? 1 : RatioW;
  const width = Ratio * 720;
  const height = 660 * Ratio;
  const widthText = 662 * Ratio;
  const widthText2 = 470 * Ratio;

  return (
    <div
      className={`mx-auto pt-[131px] pb-[400px] sm:pb-[131px]  relative`}
      style={{ width: RatioW > 1 ? "70%" : "77%" }}
    >
      <img
        src="/images/artur1.png"
        alt=""
        style={{
          width: SCREEN_WIDTH > 1600 ? width : undefined,
          height: SCREEN_WIDTH > 1600 ? height : undefined,
        }}
        className="object-cover w-[90%] md:w-[720px]"
      />
      <div
        className="absolute top-[131px] right-0 w-[72%] lg:w-[662px] md:w-[600px] "
        style={{ width: widthText }}
      >
        <div className="flex flex-col items-end pt-8">
          <img
            src="/images/exceptional_quality.png"
            alt=""
            className="object-cover mr-2 sm:mr-6 w-[300px] md:w-[400px] lg:w-[450px] 2xl:w-auto mb-6 md:mb-0"
            style={{ width: SCREEN_WIDTH < 640 ? undefined : widthText2 }}
          />

          <div className="bg-[#311213] p-6 sm:p-[40px] md:p-[75px] flex flex-col items-left justify-around ">
            <div className="text-base md:text-2xl leading-[24px] sm:leading-[40px] md:leading-[50px]">
              Our passion for baking shines through in every creation we make.
              Using only the finest ingredients and time-honored techniques, we
              craft each treat with love and care, ensuring that every bite is a
              moment of pure joy.
            </div>

            <Link to={""}>
              <div className="bg-[#925E3B] w-fit mt-5 py-2 sm:py-[18px] px-6 sm:px-[50px] text-white text-sm hover:underline">
                Read More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
