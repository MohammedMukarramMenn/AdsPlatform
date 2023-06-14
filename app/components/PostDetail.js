import Link from "next/link";

const PostDetail = ({ details }) => {
  return (
    <div className={`container-fluid`}>
      <div className={`row`}>
        <div className={`row`}>
          <div className={`col-8`}>
            <h1>{details.title}</h1>
          </div>
          <div className={`col-4`}>
            <Link href={`${details.company_site}`}>
              <button>Visit Site</button>
            </Link>
          </div>
        </div>
        <div className={`row`}>
          <p>{details.description}</p>
        </div>
      </div>
      <div className={`row`}>
        <div className={`row`}>
          <h1>My Requirements</h1>
        </div>
        <div className={`row`}>
          <h4>I'am: {details.type}</h4>
          <h4>Traffic Model: {details.traffic_model}</h4>
          <h4>Device: {details.device}</h4>
          <h4>Geo: {details.geo}</h4>
          <h4>Vertical: {details.vertical}</h4>
          <h4>Tracking Type: {details.tracking_type}</h4>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
