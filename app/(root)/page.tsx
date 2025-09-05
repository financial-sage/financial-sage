"use client";
import SessionClient from "@/components/auth/SessionClient";
import Wrapper from "@/components/layout/Wrapper";
import VideoBg from "@/components/common/VideoBg";
import DarkLight from "@/components/layout/DarkLight";
import Header from "@/components/layout/Header";
import { useState, useEffect } from "react";

export default function Home() {
   const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.className = lightMode ? "light-mode" : "";
  }, [lightMode]);

  return (
    <>
      <VideoBg />
      <DarkLight lightMode={lightMode} toggleMode={() => setLightMode((prev) => !prev)} />
      <div className="app">
        <Header />
        <Wrapper />
      </div>
    </>
  );
}
