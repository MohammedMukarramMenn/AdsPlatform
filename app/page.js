import React from "react";
import HeroSection from "../app/components/HeroSection";
import { getPosts } from "./helper/ApiUrlHelper";

const Page = async () => {
  const res = await fetch(getPosts(), { next: { revalidate: 60 } });
  const data = await res.json();

  return (
    <>
      <HeroSection posts={data.data}/>
    </>
  );
};

export default Page;
