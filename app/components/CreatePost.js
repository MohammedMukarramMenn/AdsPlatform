"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/common.module.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { createPost, get, getUserPost, update } from "../helper/ApiUrlHelper";

const CreatePost = () => {
  const [formValues, setFormValues] = useState({});
  const [file, setFile] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Session Expired, please login again");
      router.push("/session/login");
      return () => false;
    }
  }, []);

  function fileUpload(event) {
    setFile(event.target.files[0]);
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

    const url = createPost();

    const formData = new FormData();
    formData.append("uploadFile", file);
    formData.append("type", formValues.type);
    formData.append("trafficModel", formValues.trafficModel);
    formData.append("device", formValues.device);
    formData.append("geo", formValues.geo);
    formData.append("vertical", formValues.vertical);
    formData.append("trackingType", formValues.trackingType);
    formData.append("companyWebsite", formValues.companyWebsite);
    formData.append("title", formValues.title);
    formData.append("description", formValues.description);

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
        router.push("/dashboard");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="row">
      <form className="row g-3 p-3" onSubmit={handleSubmit}>
        <h1>Create a Post</h1>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Type(Buyer/Seller):</label>
          <input
            type="text"
            className="form-control"
            name="type"
            value={formValues.type}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Traffic Model</label>
          <input
            type="text"
            className="form-control"
            name="trafficModel"
            value={formValues.trafficModel}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Device</label>
          <input
            type="text"
            className="form-control"
            name="device"
            value={formValues.device}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Geo</label>
          <input
            type="text"
            className="form-control"
            name="geo"
            value={formValues.geo}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Vertical</label>
          <input
            type="text"
            className="form-control"
            name="vertical"
            value={formValues.vertical}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Tracking Type</label>
          <input
            type="text"
            className="form-control"
            name="trackingType"
            value={formValues.trackingType}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Company Website</label>
          <input
            type="text"
            className="form-control"
            name="companyWebsite"
            value={formValues.companyWebsite}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            name="imageUrl"
            onChange={fileUpload}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <button type="submit" className="btn btn-warning">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
