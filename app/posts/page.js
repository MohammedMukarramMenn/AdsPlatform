"use client";
import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Report from "../components/Report";
import UpdateForm from "../components/UpdateForm";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { getUserPost } from "../helper/ApiUrlHelper";
import PostList from "../components/PostList";

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
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Page;
