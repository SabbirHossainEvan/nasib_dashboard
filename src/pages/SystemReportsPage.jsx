import React from "react";
import SystemReports from "../components/SystemReports";
import ReportPreview from "../components/ReportPreview";
import RecentReports from "../components/RecentReports";

const SystemReportsPage = () => {
  return (
    <div>
      <SystemReports />
      <ReportPreview />
      <RecentReports />
    </div>
  );
};

export default SystemReportsPage;
