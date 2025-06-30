"use client";

import Link from "next/link";
import { GradientTextAnimation } from "./textAnimations/GradientTextAnimation";
import PulsatingButton from "@/components/ui/pulsating-button";
import WordPullUp from "@/components/ui/word-pull-up";
import { useUser } from "@clerk/nextjs";
import ShinyButton from "@/components/ui/shiny-button";


const Hero = () => {
  const { user } = useUser();
  return (
    <section className="relative py-20 md:py-32">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />

        Your browser does not support the video tag.
        </video>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <GradientTextAnimation title="Introducing AI Course Generator" />
          <WordPullUp
            className="text-4xl font-bold tracking-[-0.02em] text-white md:text-7xl md:leading-[5rem]"
            words="AI Learn Lab"
          />

          <p className="mt-10 sm:text-xl/relaxed text-white">
            Revolutionize your course creation with our AI-powered app.
            Delivering engaging and high-quality courses in minutes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {!user ? (
              <Link href="/sign-in">
                <PulsatingButton
                  text="Get Started"
                  pulseColor="150, 0, 255"
                  backgroundColor="#9945FF"
                  textColor="#ffffff"
                  animationDuration="1.5s"
                  buttonWidth="200px"
                  buttonHeight="50px"
                />
              </Link>
            ) : (
              <Link href="/dashboard">
                <ShinyButton text="Go to Dashboard"
                 />
              </Link>
            )}
          </div>
          

        </div>
      </div>
      
    </section>
  );
};

export default Hero;
