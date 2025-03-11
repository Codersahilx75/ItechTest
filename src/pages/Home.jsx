import React from "react";

import Dashboard from "../components/Home/Dashboard";
import Layout from "../layout/layout";
import Clients from "../components/Home/Clients";
import Ourservices from "../components/Home/Ourservices";
import Ourfeaturesproject from "../components/Home/Ourfeaturesproject";
import Affordable from "../components/Home/Affordable";
import Axatech from "../components/Home/Axatech";

export default function Home() {
  return (
    <div>
      <Layout>
        <Dashboard />

        <Clients />

        <Ourservices />

        <Ourfeaturesproject />

        <Affordable />

        <Axatech />
      </Layout>
    </div>
  );
}
