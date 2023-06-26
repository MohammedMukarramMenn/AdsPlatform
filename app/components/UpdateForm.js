"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { get, getUserPost, update } from "../helper/ApiUrlHelper";

const UpdateForm = () => {
  const [formValues, setFormValues] = useState({});
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      alert("Session Expired, please login again");
      router.push("/session/login");
      return () => false;
    }
    getCall(token);
  }, []);
  async function getCall(token) {
    const url = get();
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          token: token,
        },
      });

      const data = await response.json();

      // Remove the 'role_id' key from the 'data' object
      const { role_id, ...updatedData } = data.data[0];

      // Update the formValues state with the updated data
      setFormValues(updatedData);
    } catch (error) {
      alert(error);
    }
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

    const url = update();

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
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="row">
      <form className="row g-3 p-3" onSubmit={handleSubmit}>
        <h1>Your Profile</h1>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Country Code</label>
          <input
            type="text"
            className="form-control"
            name="country_code"
            value={formValues.country_code}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Phone</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            value={formValues.country}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            name="company_name"
            value={formValues.company_name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Company Website</label>
          <input
            type="text"
            className="form-control"
            name="company_website"
            value={formValues.company_website}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6 col-sm-12">
          <label className="form-label">Skype</label>
          <input
            type="text"
            className="form-control"
            name="skype"
            value={formValues.skype}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <label className="form-label">Telegram</label>
          <input
            type="text"
            className="form-control"
            name="telegram"
            value={formValues.telegram}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          {/* <label className="form-label">Image Url</label>
          <input
            type="text"
            className="form-control"
            name="image_url"
            value={formValues.image_url}
            onChange={handleChange}
          /> */}
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

export default UpdateForm;
