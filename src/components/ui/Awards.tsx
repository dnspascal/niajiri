import Image from "next/image";

export default function AwardsAndRecognation() {
  return (
    <section className="flex flex-col p-20 items-center justify-center">
      <div className="flex gap-2 text-xl mb-8">
        <span>AWARDS</span> <span className="font-bold">& RECOGNITION</span>
      </div>
      <div className="flex gap-12 text-2xl">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image
              src={`/img/award.png`}
              alt={`Award ${i + 1}`}
              height={80}
              width={80}
              className="object-cover rounded-2xl"
            />
            <div className="text-xs font-light">Best HR in 2025 Africa</div>
          </div>
        ))}
      </div>
    </section>
  );
}
