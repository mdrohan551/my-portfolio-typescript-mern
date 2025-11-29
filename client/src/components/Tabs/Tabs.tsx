import React from "react";
import { categoryIcons } from "../Home/category/categoryIcons";


interface Props {
  categories: string[];
  active: string;
  setActive: (cat: string) => void;
}

const Tabs: React.FC<Props> = ({ categories, active, setActive }) => {
  return (
    <div className="flex gap-3  flex-wrap bg-white px-5 py-4 rounded-2xl shadow">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-6 py-4 rounded-xl text-sm font-semibold transition uppercase flex items-center cursor-pointer
            ${active === cat ? "bg-primary text-white" : "ring-primary/50 ring-1"}`}
        >
          {/* Icon from mapping */}
          {categoryIcons[cat]}
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
