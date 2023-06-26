"use client";
import React, { useState } from "react";
import styles from '../styles/common.module.css';
import Link from "next/link";

const SideNav = () => {
  return (
    <>
      <div className={styles.sidenav}>
        <Link className={styles.link} href="/dashboard">Dashboard</Link>
        <Link className={styles.link} href="/myProfile">My Profile</Link>
        <Link className={styles.link} href="/createPost">Add New Post</Link>
        <Link className={styles.link} href="/posts">My Post</Link>
        {/* <Link className={styles.link} href="/createCompany">Create Company Page</Link>
        <Link className={styles.link} href="/editCompany">Edit Company Page</Link>
        <Link className={styles.link} href="/payment">Payment Report</Link>
        <Link className={styles.link} href="/changePassword">Change Password</Link> */}
        <Link className={styles.link} href="/session/login">Logout</Link>
      </div>
    </>
  );
};

export default SideNav;
