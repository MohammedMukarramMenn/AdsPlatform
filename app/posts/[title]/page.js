"use client";
import React, { useEffect } from "react";
import SideNav from "../../components/SideNav";
import { usePathname } from "next/navigation";
import { getPostDetails } from "@/app/helper/ApiUrlHelper";
import EditPost from "@/app/components/EditPost";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = async () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Session Expired, please login again");
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
          <EditPost />
        </div>
      </div>
    </div>
  );
};

export default Page;
