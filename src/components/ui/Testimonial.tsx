import { TESTIMONIAL } from "@/src/utils/constants";
import { Avatar } from "antd";

export default function Testimonial() {
  return (
    <section className="p-16 flex flex-col items-center justify-center gap-12 bg-[#f7fbfa] w-full">
      <div className="text-2xl gap-2 flex w-full items-center justify-center">
        <span>CLIENT</span>
        <span className="font-bold">TESTIMONIALS</span>
      </div>
      <div className="grid grid-cols-3 place-items-center w-full">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="flex flex-col items-center justify-center border rounded-lg gap-4 p-8 w-3/4">
            <div className="font-medium text-left">{TESTIMONIAL[0].text}</div>
            <div className="flex items-center justify-start gap-4 w-full">
              <Avatar className="!bg-[#f9b641]" />
              <div className="flex flex-col">
                <span className="font-bold">{TESTIMONIAL[0].name}</span>
                <span className="text-xs font-extralight">
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
