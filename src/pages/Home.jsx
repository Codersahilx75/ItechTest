import React from "react";

import Dashboard from "../components/Home/Dashboard";

import Clients from "../components/Home/Clients";
import Ourservices from "../components/Home/Ourservices";
import Ourfeaturesproject from "../components/Home/Ourfeaturesproject";
import Affordable from "../components/Home/Affordable";
import Axatech from "../components/Home/Axatech";
import HomeLayout from "../layout/HomeLayout";

export default function Home() {
  return (
    <div>
      <HomeLayout>
        <Dashboard />

        <Clients />

        <Ourservices />

        <Ourfeaturesproject />

        <Affordable />

        <Axatech />
      </HomeLayout>
    </div>
  );
}
