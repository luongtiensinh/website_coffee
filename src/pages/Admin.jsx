import React, { useState } from "react";
import "./Admin.css";

import Header from "./admin/Header";
import Metrics from "./admin/Metrics";
import ChartArea from "./admin/ChartArea";
import ReportView from "./admin/ReportView";
import ReportFooter from "./admin/ReportFooter";
import Finance from "./admin/Finance";

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
