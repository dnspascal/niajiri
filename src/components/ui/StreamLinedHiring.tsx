import { Card } from "antd";

export function StreamLinedHiring() {
  return (
    <section className="w-full flex justify-center p-8">
      <Card className="!bg-[#219680] !flex !flex-col !justify-center !items-center md:!w-[75%] lg:!w-[50%] !text-white">
        <div className="flex flex-col justify-center items-center text-xl sm:text-2xl mb-8">
          <div className="flex gap-2">
            <span>STREAMLINE YOUR</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">HIRING</span>
            <span className="">WITH</span>
            <span className="font-bold">NIAJIRI</span>
          </div>
        </div>

        <div className="w-full text-center px-8 mb-8 text-sm sm:text-base md:text-xl">
          Tired of messy hiring processes? Our ATS helps you manage
          applications, track candidates, and make smarter hiring decisions.
        </div>
        <button className="border border-white bg-transparent font-bold px-8 py-3 rounded-md text-white mx-auto block text-xs sm:text-sm md:text-base cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          Request a Demo
        </button>
      </Card>
    </section>
  );
}
