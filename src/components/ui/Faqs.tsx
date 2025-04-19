import { FAQS } from "@/src/utils/constants";
import { ChevronDown } from "lucide-react";

export default function Faqs() {
  return (
    <section className="py-12 px-32 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-1 items-center justify-center text-2xl mb-12">
        <span>FREQUENTLY</span>
        <div className="flex gap-2">
          <span>ASKED</span> <span className="font-extrabold">QUESTIONS</span>{" "}
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {FAQS.map((f, i) => (
          <div
            key={i}
            className={`border-b border-gray-700 p-2 text-lg font-bold flex justify-between ${
              i == 0 && "border-t pt-6"
            }`}
          >
            <div>{f}</div>
            <ChevronDown className="text-gray-400" size={48} />
          </div>
        ))}
      </div>
    </section>
  );
}
