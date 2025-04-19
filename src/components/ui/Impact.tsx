import { IMPACTS } from "@/src/utils/constants";
import Image from "next/image";

export default function Impact() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,#219680_50%,#3b1d25_100%)] text-white p-8">
      <div className="flex gap-2 text-2xl">
        <span className="font-bold"> OUR </span>
        <span>IMPACT</span>
      </div>
      <div className="grid grid-cols-3 gap-x-48 gap-y-12 p-12">
        {IMPACTS.map(({ name, value }, i) => (
          <div key={i} className="flex flex-col items-center justify-center gap-2">
            <span className="text-3xl font-bold">{value}+</span>
            <span className="text-sm font-bold">{name}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-5 right-5">
        <Image
          src={`/img/matrix.png`}
          alt={`Award`}
          height={150}
          width={150}
          className="object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
