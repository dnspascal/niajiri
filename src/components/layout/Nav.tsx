
"use client";
import { useNav } from "@/src/hooks/useNav";
import { NAV_LINKS } from "@/src/utils/constants";
import { Button } from "antd";
import { ChevronDown } from "lucide-react";

const Nav = () => {
  const { toggleBar, Icon, bar } = useNav();

  return (
    <>
      <nav className="bg-[#282828] text-white w-full h-14 lg:h-20 flex items-center justify-between px-3 lg:px-10 text-base fixed top-0 left-0 z-50">
        <div className="font-extrabold text-2xl cursor-pointer">Niajiri</div>
        <div className="hidden lg:flex items-center gap-8">
          <div className="space-x-2 cursor-pointer">
            <span>Why Niajiri</span>
            <ChevronDown className="inline" />
          </div>
          <div className="cursor-pointer">Partnerships</div>
          <div className="space-x-2 cursor-pointer">
            <span>Resources</span>
            <ChevronDown className="inline" />
          </div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <Button className="!bg-[#219680] !border-none !text-white !font-bold !px-10 !py-5">
            Request a Demo
          </Button>
          <div className="space-x-2 cursor-pointer">
            <span>language</span>
            <ChevronDown className="inline" />
          </div>
        </div>
        <Icon
          onClick={toggleBar}
          className="lg:hidden cursor-pointer"
          size={30}
        />
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-14 left-0 w-full bg-[#282828]/100 text-white z-40 transform transition-transform duration-200 ease-in-out h-full ${
          bar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="px-4 pt-6 pb-2">
          <Button className="!bg-[#219680] !border-none !text-white !font-bold !px-10 !py-5 !w-full !overflow-hidden">
            Request a Demo
          </Button>
        </div>

        <div className="flex flex-col items-start justify-center gap-4 px-4 py-6">
          {NAV_LINKS.map(({ name, icon: Icon }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-lg cursor-pointer justify-between w-full border-b border-white/30 py-2"
            >
              <span className="text-sm md:text-base">{name}</span>
              {Icon && <Icon size={18} className="inline" />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
