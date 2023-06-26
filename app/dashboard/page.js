"use client";
import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { getUserPost } from "../helper/ApiUrlHelper";
import Report from "../components/Report";

const Page = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Session Expired, please login again");
      router.push("/session/login");
      return () => false
    }
    getCall(token);
  }, []);

  async function getCall(token) {
    const url = getUserPost();

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      const data = await response.json();
      setCount(data.data.length);
    } catch (error) {
      alert(error);
    }
  }

  const report1 = { title: "Active Listing", count: count };
  const report2 = { title: "Report", count: 0 };
  return (
    <div className="">
      <div className="row">
        <div className="col-4">
          <SideNav />
        </div>
        <div className="col-8">
          <Report report1={report1} report2={report2}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
