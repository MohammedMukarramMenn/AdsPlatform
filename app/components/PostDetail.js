import Link from "next/link";
import styles from "../styles/common.module.css";

const PostDetail = ({ details }) => {
  return (
    <div className={`${styles.post_detail}`}>
      <div className={`row ${styles.pd_container1} mt-3 p-2`}>
        <div className={`col-8 ${styles.pd_background} ${styles.pd_header}`}>
          <h1 className={`${styles.pd_background}`}>{details.title}</h1>
        </div>    
       
        <div className={`col-4 ${styles.pd_background} ${styles.pd_button}`}>
          <Link href={`https://${details.company_website}`} target="_blank">
            <button className={`btn btn-warning `}>Visit Site</button>
          </Link>
        </div>
        <hr className={`${styles.hr}`}/>
        <div className={`col-12 ${styles.pd_background} ${styles.pd_p}`}>
          <p className={`${styles.pd_background} `}>{details.description}</p>
        </div>
      </div>
      <br />
      <div className={`row ${styles.pd_container2}  ${styles.pd_background}`}>
        <div className={`col-12 ${styles.pd_background} ${styles.pd_header}`}>
          <h1 className={`${styles.pd_background}`}>My Requirements</h1>
        </div>
        <hr className={`${styles.hr}`}/>
        <div className={`col-12 ${styles.pd_background}`}>
          <p className={`${styles.pd_background} ${styles.pd_p}`}>I am: <span className={`${styles.pd_span}`}>{details.type}</span></p>
          <p className={`${styles.pd_background} ${styles.pd_p}`}>Traffic Model: <span className={`${styles.pd_span}`}>{details.traffic_model}</span></p>
          <p className={`${styles.pd_background} ${styles.pd_p}`}>Device: <span className={`${styles.pd_span}`}>{details.device}</span></p>
          <p className={`${styles.pd_background} ${styles.pd_p}`}>Geo: <span className={`${styles.pd_span}`}>{details.geo}</span></p>
          <p className={`${styles.pd_background} ${styles.pd_p}`}>Vertical: <span className={`${styles.pd_span}`}>{details.vertical}</span></p>
          <p className={`${styles.pd_background} ${styles.pd_p}`}>Tracking Type: <span className={`${styles.pd_span}`}>{details.tracking_type}</span></p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
