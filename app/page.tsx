"use client";
import Footer from "@/src/components/layout/Footer";
import Nav from "@/src/components/layout/Nav";
import AwardsAndRecognation from "@/src/components/ui/Awards";
import Expertise from "@/src/components/ui/Expertise";
import Faqs from "@/src/components/ui/Faqs";
import Impact from "@/src/components/ui/Impact";
import { StreamLinedHiring } from "@/src/components/ui/StreamLinedHiring";
import Testimonial from "@/src/components/ui/Testimonial";
import Trust from "@/src/components/ui/Trust";
import { useDevice } from "@/src/hooks/useDevice";
import { Button } from "antd";
import Image from "next/image";

const Home = () => {
  const { width } = useDevice();
  const imageWidth = width < 500 ? 500 : width < 1024 ? 1000 : 500;
  const imageHeight = width < 500 ? 20 : width < 1024 ? 26 : 80;

  return (
    <main className="">
      <Nav />
      <div className="bg-[#282828] text-white w-full px-4 lg:px-12 xl:px-32 pt-20 lg:pt-32 pb-12 flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col lg:w-1/2 gap-4 lg:gap-12">
          <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Empowering Talent, Tranforming Businesses
          </div>
          <div className="text-base md:text-lg">
            Our platform empowers businesses to find and develop talent, and
            helps individuals advance their careers.
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="!bg-[#f9b641] !border-none !text-white !font-bold !px-8 !py-6 !text-base w-full">
              Upskill Now
            </Button>
            <Button className="!bg-[#219680] !border-none !text-white !font-bold !px-8 !py-6 !text-base w-full">
              Find Talent
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/img/img-1.png"
            alt=""
            height={300}
            width={imageWidth}
            className={`object-cover rounded-2xl h-80`}
          />
        </div>
      </div>
      {/* <Trust />
      <Expertise />
      <AwardsAndRecognation />
      <Impact />
      <Testimonial />
      <Faqs />
      <StreamLinedHiring /> */}
      {/* <Footer /> */}
    </main>
  );
};
export default Home;
