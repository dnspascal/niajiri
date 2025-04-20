import Image from "next/image";

export default function AwardsAndRecognation() {
  return (
    <section className="flex flex-col p-20 items-center justify-center">
      <div className="flex flex-nowrap gap-2 text-lg sm:text-2xl mb-8 w-full items-center justify-center">
        <span className="inline">AWARDS</span>
        <span className="font-bold">&</span>
        <span className="font-bold inline">RECOGNITION</span>
      </div>
      <div className="flex flex-wrap gap-8 md:gap-12 text-2xl items-center justify-center">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-fit gap-2"
          >
            <Image
              src={`/img/award.png`}
              alt={`Award ${i + 1}`}
              height={60}
              width={60}
              className="object-cover rounded-2xl"
            />
            <div className="text-[10px] md:text-xs font-light line-clamp-1 w-full">
              Best HR in 2025 Africa
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
