import React from "react";
import Layout from "../components/Layout";

export default function Shipments() {
  return (
    <Layout>
      <div style={{ color: "white", padding: "30px" }}>
        <h1>🚚 Shipments</h1>
        <p>247 Active Shipments</p>

        <div
          style={{
            marginTop: "20px",
            background: "#081122",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          Shipment S-1045 → Mumbai to Delhi
        </div>
      </div>
    </Layout>
  );
}