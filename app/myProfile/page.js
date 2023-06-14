"use client";
import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import UpdateForm from "../components/UpdateForm";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Session Expired, please login again");
      router.push("/session/login");
      return () => false;
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <SideNav />
        </div>
        <div className="col-8">
          <UpdateForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
