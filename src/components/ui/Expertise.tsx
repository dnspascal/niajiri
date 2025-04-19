import { Button, Segmented } from "antd";
import Image from "next/image";

export default function Expertise() {
  return (
    <section className="flex flex-col justify-center items-center w-full px-32">
      <div className="flex gap-2 items-center justify-center flex-wrap text-2xl mb-6">
        <span className="text-center font-bold">OUR</span>
        <span>EXPERTISE</span>
      </div>
      <div className="px-8 py-6 rounded-2xl bg-gradient-to-t from-[#9fb0ac] to-[#a7cfc7] flex flex-col gap-12 justify-center items-center lg:h-[30rem]">
        <div>
          <Segmented<string>
            options={[
              "Find Talent",
              "Develop Skills",
              "Cohort Trainings",
              "Career Resources",
              "Job Marching",
            ]}
            className="!rounded-lg !h-[3rem] !px-16 !text-xs !flex !items-center !justify-center custom-segmented"
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex flex-col gap-6 w-1/2 pl-8">
            <div className="text-5xl font-normal ">
              Discover your next great hire.
            </div>
            <div className="font-medium text-sm mb-4">
              Streamline your hiring process and quickly discover qualified
              candidates with the skills and experience you need. Our
              comprehensive talent solutions provide access to a diverse pool of
              Tanzanian professionals, along with advanced search filters to
              target specific skill sets, experience levels, and industry
              expertise, ensuring you find the perfect fit for your open
              positions.
            </div>
            <Button className="!bg-transparent !text-black !border-[1.5px] !border-black !px-2 !py-5 !text-base !font-medium !w-5/12">
              Explore Our Talent Pool
            </Button>
          </div>
            <Image
              src="/img/img-2.png"
              alt=""
              height={100}
              width={500}
              className="object-cover rounded-2xl h-64"
            />
        </div>
      </div>
    </section>
  );
}
