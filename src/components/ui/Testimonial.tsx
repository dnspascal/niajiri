import { useDevice } from "@/src/hooks/useDevice";
import { TESTIMONIAL } from "@/src/utils/constants";
import { Avatar } from "antd";

export default function Testimonial() {
  const { width } = useDevice();
  return (
    <section className="p-8 md:p-16 flex flex-col items-center justify-center gap-8 lg:gap-12 bg-[#f7fbfa] w-full">
      <div className="text-xl sm:text-2xl gap-2 flex w-full items-center justify-center">
        <span>CLIENT</span>
        <span className="font-bold">TESTIMONIALS</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-12 w-full">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center border-[0.1px] rounded-sm gap-4 p-6 w-96 md:w-60 bg-white"
          >
            <div className="font-medium text-left text-xs">{TESTIMONIAL[0].text}</div>
            <div className="flex items-center justify-start gap-4 w-full">
              <Avatar
                size={width < 250 ? 20 : 30}
                className="!bg-[#f9b641] w-1/4"
              />
              <div className="flex flex-col w-3/4">
                <span className="font-bold text-xs sm:text-sm">
                  {TESTIMONIAL[0].name}
                </span>
                <span className="text-[8px] sm:text-xs font-extralight">
                  {TESTIMONIAL[0].work}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
