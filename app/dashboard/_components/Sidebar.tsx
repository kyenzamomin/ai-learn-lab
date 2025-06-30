"use client";

import React, { useContext } from "react";
import { navList } from "../_constants/navList";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserCourseListContext } from "@/app/_context/UserCourseList.context";
import WordRotate from "@/components/ui/word-rotate";
import { AiOutlineQuestionCircle } from "react-icons/ai"; // Icon for Quiz link

const Sidebar = () => {
  const path = usePathname();
  const { userCourseList } = useContext(UserCourseListContext);

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <WordRotate
        className="text-4xl font-bold text-black dark:text-white text-center"
        words={["AI", "Learn", "Lab"]}
      />
      <hr className="my-5" />

      <ul>
        {/* Render existing nav items from navList */}
        {navList.map((item) => (
          <Link href={item.route} key={item.id}>
            <div
              className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
                item.route === path && "bg-gray-100 text-black"
              }`}
            >
              <div className="text-2xl">
                <item.icon />
              </div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}

        {/* Add a separate Quiz link */}
        <Link href="/dashboard/quiz">
          <div
            className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${
              path === "/dashboard/quiz" && "bg-gray-100 text-black"
            }`}
          >
            <div className="text-2xl">
              <AiOutlineQuestionCircle />
            </div>
            <h2>Quiz</h2>
          </div>
        </Link>
      </ul>

      <div className="mt-4">
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
