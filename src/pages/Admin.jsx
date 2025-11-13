import React, { useState } from "react";
import "../styles/Admin.css";

import Header from "../components/admin/Header";
import Metrics from "../components/admin/Metrics";
import ChartArea from "../components/admin/ChartArea";
import ReportView from "../components/admin/ReportView";
import ReportFooter from "../components/admin/ReportFooter";
import Finance from "../components/admin/Finance";

export default function Admin() {
  const [tab, setTab] = useState('overview');

  return (
    <div className="admin-root">
      <Header tab={tab} setTab={setTab} />

      <main className="admin-main">
        {tab === 'finance' && <Finance />}

        {tab !== 'reports' && tab !== 'finance' && (
          <>
            <Metrics />
            <ChartArea />
          </>
        )}

        {tab === 'reports' && (
          <>
            <ReportView />
            <ReportFooter />
          </>
        )}
      </main>
    </div>
  );
}
