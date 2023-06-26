'use client'
import React, { useEffect, useState } from "react";
import HeroSection from "../app/components/HeroSection";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/proxy/posts"); // Proxy endpoint
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
