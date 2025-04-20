import { useDevice } from "@/src/hooks/useDevice";
import { Button, Segmented } from "antd";
import Image from "next/image";

export default function Expertise() {
  const { width } = useDevice();
  const isMobile = width < 300;
  return (
    <section className="flex flex-col justify-center items-center w-full px-4 lg:px-16 min-w-[50px]">
      <div className="flex gap-2 items-center justify-center flex-wrap text-lg md:text-2xl mb-6">
        <span className="text-center font-bold">OUR</span>
        <span>EXPERTISE</span>
      </div>
      <div className="px-4 py-12 rounded-2xl bg-gradient-to-t from-[#9fb0ac] to-[#a7cfc7] flex flex-col gap-8 justify-center items-center w-full max-w-7xl min-w-[46px] overflow-x-scroll">
        <div className="w-full flex items-center justify-center">
          <Segmented
            vertical={isMobile}
            options={[
              "Find Talent",
              "Develop Skills",
              "Cohort Trainings",
              "Career Resources",
              "Job Marching",
            ]}
            className="custom-segmented !rounded-lg !text-xs !flex !items-start! lg:items-center !justify-center !p-4 !md:p-3 !flex-wrap overflow-x-scroll"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex flex-col gap-4 lg:w-1/2 px-4 lg:pl-12 xl:pl-20">
            <div className="text-2xl sm:text-3xl md:text-5xl font-medium">
              Discover your next great hire.
            </div>
            <div className="font-medium text-xs md:text-sm mb-4">
              Streamline your hiring process and quickly discover qualified
              candidates with the skills and experience you need. Our
              comprehensive talent solutions provide access to a diverse pool of
              Tanzanian professionals, along with advanced search filters to
              target specific skill sets, experience levels, and industry
              expertise, ensuring you find the perfect fit for your open
              positions.
            </div>
            <Button className="!bg-transparent !text-black !border-[1.5px] !border-black !px-2 !py-4 !text-sm !font-medium w-full lg:w-6/12">
              Explore Our Talent Pool
            </Button>
          </div>
          <div className="relative w-full lg:w-5/12 h-48 md:h-64">
            <Image
              src="/img/img-2.png"
              alt="Hiring talent"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
