"use client";
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-6xl text-bold tracking-tighter md:text-6xl lg:text-7xl xl:text-8xl animate-gradient gradient-title font-display">
            Your AI Powered Tool for
            <br />
            <TypeAnimation
              sequence={[
                "Professional Success",
                2000,
                "ATS-friendly CV Building",
                2000,
                "Interview Preparation",
                2000,
                "Career Growth",
                2000,
              ]}
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button variant="custom" size="lg" className=" px-8 text-black ">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/image.png"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-3xl shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;