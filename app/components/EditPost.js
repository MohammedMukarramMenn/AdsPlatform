"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/common.module.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";
import { createPost, get, getPostDetails, getUserPost, update, updatePost } from "../helper/ApiUrlHelper";

const EditPost = () => {
  const [formValues, setFormValues] = useState({});
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
  
    const path = query.split("/").slice(2).join("/").replace(/-/g, " ");

    const url = getPostDetails(path);

    const res = await fetch(url);
    const data = await res.json();
    setFormValues(data.data[0]);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = updatePost();

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
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
        <h1>Edit Post</h1>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Type(Buyer/Seller):</label>
          <input
            type="text"
            className="form-control"
            name="type"
            value={formValues.type || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Traffic Model</label>
          <input
            type="text"
            className="form-control"
            name="traffic_model"
            value={formValues.traffic_model || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Device</label>
          <input
            type="text"
            className="form-control"
            name="device"
            value={formValues.device || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Geo</label>
          <input
            type="text"
            className="form-control"
            name="geo"
            value={formValues.geo || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Vertical</label>
          <input
            type="text"
            className="form-control"
            name="vertical"
            value={formValues.vertical || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Tracking Type</label>
          <input
            type="text"
            className="form-control"
            name="tracking_type"
            value={formValues.tracking_type || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Company Website</label>
          <input
            type="text"
            className="form-control"
            name="company_website"
            value={formValues.company_website || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formValues.title || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={formValues.description || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Image Url</label>
          <input
            type="text"
            className="form-control"
            name="image_url"
            value={formValues.image_url || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <button type="submit" className="btn btn-warning">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
