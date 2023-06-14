import React, { useEffect } from "react";
import styles from "../styles/common.module.css";
import Link from "next/link";

const ReportCard = ({ props }) => {

  return (
    <div className={styles.reportCard}>
      <Link className={styles.link} href="">
        <div className="row">
          <h1>
            {props.title}: {props.count}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default ReportCard;
