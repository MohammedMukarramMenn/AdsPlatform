'use client'
import React, { useEffect, useState } from "react";
import HeroSection from "../app/components/HeroSection";
import { getPosts } from "./helper/ApiUrlHelper";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getPosts(), { next: { revalidate: 60 } }); // Proxy endpoint
        const jsonData = await res.json();
        setData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeroSection posts={data} />
    </>
  );
};

export default Page;
