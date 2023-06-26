"use client";
import React, { useEffect, useState } from "react";
import { forgetPassword, login, resetPassword } from "../../helper/ApiUrlHelper"; // Assuming login() function is exported from ApiUrlHelper
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "@/app/components/Loader";
import styles from "../../styles/login.module.css";


const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState();
  const [sentOTP, setSentOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = resetPassword();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          otp: otp,
        }),
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

    const url = forgetPassword();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
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
            <div className="col-md-4"></div>
            <div className={`col-md-4 col-sm-12 ${styles.formContainer}`}>
              <form className="row g-3" onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>
                <div className="col-12">
                  <label className="form-label">
                    Please enter your email id: (OTP will be sent to this email)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {sentOTP && (
                  <>
                    <div className="col-12">
                      <label className="form-label">OTP</label>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={otp}
                        onChange={handleOtpChange}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">New Password</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={password}
                        onChange={handlePasswordChange}
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
                      Reset Password
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
                    Do not have an account?
                    <Link href="/session/register"> Sign up</Link>
                  </label>
                </div>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
