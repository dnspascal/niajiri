import { useDevice } from "@/src/hooks/useDevice";
import Image from "next/image";

export default function Trust() {
  const { width } = useDevice();
  const imageWidth = width < 500 ? 70 : width < 1024 ? 120 : 150;
  const imageOrder = ["mwanga", "anza", "mwanga", "anza", "mwanga"];

  return (
    <section className="flex flex-col justify-center items-center w-full p-12 mb-8">
      <div className="flex gap-2 text-lg sm:text-2xl">
        <span>TRUSTED</span>
        <span className="font-extrabold text-[#219680]">GLOBALLY</span>
      </div>
      <div className="flex gap-4 items-center justify-center flex-wrap mt-4">
        {imageOrder.map((i, idx) => (
          <Image
            key={`${i}-${idx}`}
            src={`/img/${i}.png`}
            alt={`${i.charAt(0).toUpperCase() + i.slice(1)} Bank`}
            height={150}
            width={imageWidth}
            className="object-cover rounded-2xl"
          />
        ))}
      </div>
    </section>
  );
}
