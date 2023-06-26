"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/common.module.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";
import { createPost, get, getPostDetails, getUserPost, update, updatePost, updatePostImage } from "../helper/ApiUrlHelper";

const UpdatePostImage = () => {
  const [formValues, setFormValues] = useState({});
  const [file, setFile] = useState(null);
  const router = useRouter();
  const query = usePathname();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Session Expired, please login again");
      router.push("/session/login");
      return () => false
    }
    getCall();
  }, []);

  async function getCall() {
  
    const path = query.split("/").slice(3).join("/").replace(/-/g, " ");

    const url = getPostDetails(path);

    const res = await fetch(url, { next: { revalidate: 0 } });
    const data = await res.json();
    setFormValues(data.data[0]);
  }

  function fileUpload(event) {
    setFile(event.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = updatePostImage();
    const formData = new FormData();
    formData.append("newImage", file);
    formData.append("image_url", formValues.image_url);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          token: Cookies.get("token"),
        },
      });

      const data = await response.json();
      alert(JSON.stringify(data.message));
      if (data.errorCode == 0) {
        router.push("/posts");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="row">
      <form className="row g-3 p-3" onSubmit={handleSubmit}>
        <h1>Update Post Image</h1>
        <div className="col-12">
          <h5 className="form-label">Title: {formValues.title}</h5>
        </div>
        <div className="col-12">
          <label className="form-label">Choose new Image:</label>
          <input
            type="file"
            className="form-control"
            name="image_url"
            onChange={fileUpload}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-warning">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePostImage;
