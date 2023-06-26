"use client";
import React, { useEffect, useState } from "react";
import {
  forgetPassword,
  login,
  register,
  resetPassword,
  validateEmail,
} from "../../helper/ApiUrlHelper"; // Assuming login() function is exported from ApiUrlHelper
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "@/app/components/Loader";
import styles from "../../styles/login.module.css";

const Page = () => {
  const [formValues, setFormValues] = useState({});
  const [sentOTP, setSentOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = register();


    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      alert(JSON.stringify(data.message));

      if (data.errorCode == 0) {
        router.push("/session/login");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleOtp = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const url = validateEmail();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formValues.email,
        }),
      });

      const data = await response.json();

      if (data.errorCode == 0) {
        alert("OTP sent successfully!");
        setIsLoading(false);
        setSentOTP(true);
      }
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="d-flex align-items-center justify-content-center m-3">
          <div className="row">
            <div className="col-md-3"></div>
            <div className={`col-md-6 col-sm-12 ${styles.formContainer}`}>
              <form className="row g-3" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="col-md-6 col-sm-12">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                {sentOTP && (
                  <>
                    <div className="col-md-6 col-sm-12">
                      <label className="form-label">OTP</label>
                      <input
                        type="text"
                        className="form-control"
                        name="otp"
                        value={formValues.otp}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                      />
                    </div>
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
                      <label className="form-label">Country Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name="countryCode"
                        value={formValues.countryCode}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
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
                        name="companyName"
                        value={formValues.companyName}
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
                    {/* <div className="col-md-6 col-sm-12">
                      <label className="form-label">Image Url</label>
                      <input
                        type="text"
                        className="form-control"
                        name="imageUrl"
                        value={formValues.imageUrl}
                        onChange={handleChange}
                      />
                    </div> */}
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
                  </>
                )}
                <div className="col-12">
                  {sentOTP ? (
                    <button
                      type="submit"
                      className="btn btn-warning"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-warning"
                      onClick={handleOtp}
                    >
                      Get OTP
                    </button>
                  )}
                </div>
                <div className="col-12">
                  <label className="form-label">
                    Already have an account?
                    <Link href="/session/login"> Sign In</Link>
                  </label>
                </div>
              </form>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
