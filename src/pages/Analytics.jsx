import React from "react";
import Layout from "../components/Layout";

export default function Analytics() {
  return (
    <Layout>
      <div style={{ color: "white", padding: "30px" }}>
        <h1>📊 Analytics</h1>
        <p>Performance Metrics</p>

        <div
          style={{
            marginTop: "20px",
            background: "#081122",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          Delivery Success Rate: 98.2%
        </div>
      </div>
    </Layout>
  );
}