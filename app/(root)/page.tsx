"use client";
import SessionClient from "@/components/auth/SessionClient";
import Wrapper from "@/components/layout/Wrapper";
import VideoBg from "@/components/common/VideoBg";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <VideoBg />
      <div className="app">
        <Header />
        <Wrapper />
      </div>
    </>
  );
}
