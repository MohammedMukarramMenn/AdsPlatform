import React from "react";
import styles from "../styles/common.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      {/* <div className={styles.loader}>
        <div className={styles.loaderInner}></div>
      </div> */}
      <h1 className={styles.loaderText}>Sending OTP, It may take a while. Please wait</h1>
    </div>
  );
};

export default Loader;
