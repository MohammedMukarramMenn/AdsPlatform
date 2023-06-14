"use client";
import React, { useEffect, useState } from "react";
import { login } from "../../helper/ApiUrlHelper"; // Assuming login() function is exported from ApiUrlHelper
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
  const [cookiesCleared, setCookiesCleared] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Cookies.remove("token");
    Cookies.remove("roleId");
  }, []);

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = login(); // Assuming login() returns the URL

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      alert(JSON.stringify(data.message));

      if (data.errorCode == 0) {
        Cookies.set("token", data.data.token);
        Cookies.set("roleId", data.data.role_id);
        window.location.href = "/dashboard";
        // router.push("/dashboard");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center m-3">
      <form className="row g-3" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="col-12">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            defaultValue={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            defaultValue={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-warning">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
