import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";


export const useNav = () => {
  const [bar, setBar] = useState(false);
  const Icon = bar ? X : Menu;
  const toggleBar = () => {
    setBar((p) => !p);
  };

  return {
    bar,
    toggleBar,
    Icon,
  };
};
