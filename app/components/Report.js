import React, { useEffect } from "react";
import ReportCard from "./ReportCard";

const Report = ({ report1, report2 }) => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <ReportCard props={report1} />
      </div>
      <div className="col-md-6 col-sm-12">
        {/* <ReportCard props={report2} /> */}
      </div>
    </div>
  );
};

export default Report;
