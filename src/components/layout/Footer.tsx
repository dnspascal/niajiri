import { FOOTER_LINKS } from "@/src/utils/constants";
import { Input } from "antd";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3a4040] text-white px-24 py-6 m-4 rounded-md">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 items-start justify-start">
          <span className="font-bold text-sm">SOCIAL MEDIA</span>
          <div className="flex gap-1">
            <Facebook className="cursor-pointer" size={16} />
            <Twitter className="cursor-pointer" size={16} />
            <Instagram className="cursor-pointer" size={16} />
          </div>
        </div>
        <div className="flex gap-4 flex-1 items-center justify-end">
          <div className="font-bold text-xs">Get updates from us</div>
          <div className="border !border-white/60 !rounded-3xl flex items-center justify-between pl-3 pr-2 h-12 w-1/3">
            <input
              placeholder="Email"
              className="!outline-none !border-none  !bg-transparent !text-white placeholder:text-gray-500 placeholder:text-xs"
            />
            <button className="bg-[#219680] rounded-full px-3 py-2 text-xs font-bold cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-75">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-[.1px] border-white/50 my-8" />
      <div className="grid grid-cols-3 p-8">
        {FOOTER_LINKS.map(({ title, links }, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="font-bold">{title}</div>
            <div className="p-4 flex flex-col gap-3">
              {links.map(({ name, direct }, i) => (
                <div
                  key={i}
                  className="font-bold text-xs flex gap-2 items-center cursor-pointer transition delay-150 ease-in-out hover:scale-110"
                >
                  <div className="rounded-full w-1 h-1 bg-white" />
                  <div>{name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-[.1px] border-white/50 my-12" />
    </footer>
  );
}
