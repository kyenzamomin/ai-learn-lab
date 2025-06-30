"use client";

import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      {/* Left-aligned logo and text */}
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} alt="logo" width={55} height={55} priority className="object-cover" />
        <span className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#4B0082] to-[#2A1A5E]">
          AI LEARN LAB
        </span>
      </div>
      {/* Right side buttons */}
      {!user ? (
        <Link href="/sign-up">
         <Button className="bg-[#4B0082] hover:bg-[#2A1A5E] text-white px-4 py-2 rounded-lg">
          Sign Up
          </Button>
        </Link>
      ) : (
        <Link href="/dashboard">
          <Button className="bg-[#4B0082] hover:bg-[#2A1A5E] text-white px-4 py-2 rounded-lg">
            Dashboard
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Header;