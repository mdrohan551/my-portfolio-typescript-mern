import React, { useState } from "react";

const Button_menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative w-8 h-8 px-1 bg-primary rounded-md cursor-pointer flex items-center justify-center shadow-lg"
      onClick={() => setOpen(!open)}
    >
      {/* Bars container */}
      <div className="w-7 h-6 relative flex flex-col justify-center gap-1">
        {/* Top bar */}
        <span
          className={`block h-1 bg-white rounded transition-all duration-500
            ${open ? "rotate-45 translate-y-2 origin-center" : "rotate-0 translate-y-0"}`
          }
        ></span>

        {/* Middle bar */}
        <span
          className={`block h-1 bg-white rounded transition-all duration-500
            ${open ? "opacity-0" : "opacity-100"}`
          }
        ></span>

        {/* Bottom bar */}
        <span
          className={`block h-1 bg-white rounded transition-all duration-500
            ${open ? "-rotate-45 -translate-y-2 origin-center" : "rotate-0 translate-y-0"}`
          }
        ></span>
      </div>
    </div>
  );
};

export default Button_menu;
