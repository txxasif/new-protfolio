"use client";
import React from "react";
import CircularImageHover from "./CircularImage";

export default function Intro() {
  return (
    <section className=" bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen overflow-hidden">
      <CircularImageHover imageSrc="/images/asif.jpg" />
    </section>
  );
}
