import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="absolute">
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center gap-2 text-gray-600 p-3 w-[220px] cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3">
  
  🌙 Switch Appearance
  </button>



      {open && (
        <div className="absolute mt-2 w-40 bg-white dark:bg-gray-900 shadow-md rounded-md">
          <button
            onClick={() => { setTheme("light"); setOpen(false); }}
             className="block w-full px-4 py-2 text-left 
             bg-white text-black 
             hover:bg-gray-100 
             dark:bg-white dark:text-black"
              >
              ☀️ Light Mode
              </button>

              <button
               onClick={() => { setTheme("dark"); setOpen(false); }}
              className="block w-full px-4 py-2 text-left 
             bg-white text-black 
             hover:bg-gray-100 
             dark:bg-white dark:text-black"
>
  🌙 Dark Mode
</button>

        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
