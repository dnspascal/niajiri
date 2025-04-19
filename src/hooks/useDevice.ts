import { useState, useEffect } from "react";

export const useDevice = () => {
  const [device, setDevice] = useState(() => detectDevice());

  useEffect(() => {
    const handleResize = () => {
      const updatedDevice = detectDevice();
      setDevice(updatedDevice);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};

const detectDevice = () => {
  if (typeof window === "undefined") {
    return { type: "desktop", width: 1920, height: 1080 };
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;
  const height = window.innerHeight;

  const isMobile = /mobile|android|iphone|ipod/i.test(userAgent);
  const isTablet = /tablet|ipad/i.test(userAgent);

  let type = "desktop";
  if (isTablet) type = "tablet";
  else if (isMobile) type = "mobile";

  return { type, width, height };
};
