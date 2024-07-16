import { RatioW } from "src/helper/const";

export interface CakeBannerItemProps {
  img?: string;
  bgBottomColor?: string;
  text?: string;
}

const CakeBannerItem = ({ img, bgBottomColor, text }: CakeBannerItemProps) => {
  const width = 200 * RatioW;
  const height = (20 / 27) * width;

  return (
    <div
      style={{ width, height: width }}
      className="w-[80%] h-[270px] md:w-auto md:h-auto mb-4 xl:mb-0 mx-auto md:mx-0 "
    >
      <img
        src={img}
        alt=""
        className={`w-full h-[200px] object-cover md:h-[${height}px]`}
      />
      <div
        style={{ background: bgBottomColor }}
        className={`h-[70px] xl:h-[60px] 2xl:h-[70px] flex items-center justify-center text-base font-normal`}
      >
        {text ?? "Bread and Rolls"}
      </div>
    </div>
  );
};

export default CakeBannerItem;
