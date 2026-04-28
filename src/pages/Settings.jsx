import React from "react";
import Layout from "../components/Layout";

export default function Settings() {
  return (
    <Layout>
      <div style={{ color: "white", padding: "30px" }}>
        <h1>⚙ Settings</h1>
        <p>Manage preferences</p>

        <div
          style={{
            marginTop: "20px",
            background: "#081122",
            padding: "20px",
            borderRadius: "18px",
          }}
        >
          Theme: Dark Mode
        </div>
      </div>
    </Layout>
  );
}