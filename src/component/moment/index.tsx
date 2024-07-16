import { Link } from "react-router-dom";
import { RatioW } from "src/helper/const";

export const MomentOfPureJoy = () => {
  const Ratio = RatioW > 1 ? 1 : RatioW;

  return (
    <div
      className={`mx-auto pt-0 pb-[350px] sm:pt-[200px] sm:pb-[100px] xl:py-[130px] relative md:flex justify-end items-end w-[88%] sm-[77%] 2xl-[70%]`}
    >
      <div className="absolute top-[50px] left-0 md:top-[131px] md:left-16">
        <div className="flex flex-col items-start sm:pt-8">
          <img
            src="/images/moment.png"
            alt=""
            className={`object-contain w-[90%] sm:w-[80%] md-:w-[60%]`}
          />

          <div
            className="items-left justify-around text-[#311213] pt-7 w-[80%]"
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
        className="w-[90%] sm:w-[598px] sm:h-[549px] object-cover"
        src="/images/artur2.png"
        alt=""
      />
    </div>
  );
};
