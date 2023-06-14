import React from "react";
import HeroSection from "../app/components/HeroSection";
import { getPosts } from "./helper/ApiUrlHelper";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/user/posts');
  const data = await res.json();
  return {
    props: {
      result: data,
    },
  };
}

const Page = async ({ result }) => {

  console.log(result);

  return (
    <>
      {/* <HeroSection posts={result.data} /> */}
    </>
  );
};

export default Page;
