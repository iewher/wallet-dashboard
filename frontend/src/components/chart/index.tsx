"use client";

import { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PrimaryButton } from "../buttons";
import styles from "./index.module.scss";

const Chart: React.FunctionComponent = () => {
  const [month, setMonth] = useState<string>("6 Month");
  const data = [30, 60, 35, 70, 85, 75];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <div className={styles.Chart}>
      <div className={styles.Title}>
        <h1>Money Flow</h1>
        <div className={styles.Actions}>
          <PrimaryButton>Money Flow</PrimaryButton>
          <PrimaryButton>Dropdown</PrimaryButton>
        </div>
      </div>
      <div className={styles.Line}>
        <LineChart
          series={[{ data: data, color: "#00b3ff" }]}
          xAxis={[{ scaleType: "point", data: labels }]}
        />
      </div>
    </div>
  );
};

export default Chart;
