"use client";
import React from "react";
import HeroSection from "../../components/HeroSection";
import { usePathname } from "next/navigation";
import { getPostDetails } from "@/app/helper/ApiUrlHelper";

const Page = async () => {
  const query = usePathname();
  const path = query.split("/").slice(2).join("/").replace(/-/g, " ");;

  const url = getPostDetails(path);

  const res = await fetch(url);
  const data = await res.json();

  return (  
    <>
      <HeroSection details={data.data[0]} />
    </> 
  );
};

export default Page;
