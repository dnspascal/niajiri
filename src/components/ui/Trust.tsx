import Image from "next/image";

export default function Trust() {
  const imageOrder = ["mwanga", "anza", "mwanga", "anza", "mwanga"];

  return (
    <section className="flex flex-col justify-center items-center w-full p-12">
      <div className="flex gap-2 text-2xl">
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
            width={150}
            className="object-cover rounded-2xl"
          />
        ))}
      </div>
    </section>
  );
}
