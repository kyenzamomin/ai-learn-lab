import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      {/* Logo and AI Learn Lab text */}
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} alt="logo" width={50} height={50} priority className="object-cover" />
        <span className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#4B0082] to-[#2A1A5E]">
          AI LEARN LAB
        </span>
      </div>
      <UserButton />
    </div>
  );
};

export default Header;