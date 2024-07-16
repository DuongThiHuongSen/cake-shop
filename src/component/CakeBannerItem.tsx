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
    <div style={{ width, height: width }}>
      <img src={img} alt="" className={`w-full h-[${height}px]`} />
      <div
        style={{ height: (70 * height) / 200 }}
        className={` bg-[${bgBottomColor}] flex items-center justify-center text-base font-normal`}
      >
        {text ?? "Bread and Rolls"}
      </div>
    </div>
  );
};

export default CakeBannerItem;
