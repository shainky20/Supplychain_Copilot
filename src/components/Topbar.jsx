import React from "react";

export default function Topbar() {
  const now = new Date().toLocaleString();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px",
      }}
    >
      <div>
        <h1 style={{ color: "white", margin: 0 }}>
          Logistics Command Center ✦
        </h1>

        <p style={{ color: "#94a3b8", marginTop: "6px" }}>
          Real-time supply chain intelligence powered by AI
        </p>
      </div>

      <div style={{ display: "flex", gap: "14px" }}>
        <div
          style={{
            padding: "12px 16px",
            borderRadius: "14px",
            background: "#081122",
            color: "white",
          }}
        >
          🕒 {now}
        </div>

        <div
          style={{
            padding: "12px 16px",
            borderRadius: "14px",
            background: "#081122",
            color: "white",
          }}
        >
          🔔 7
        </div>

        <div
          style={{
            padding: "12px 16px",
            borderRadius: "14px",
            background: "#081122",
            color: "white",
          }}
        >
          Team JSS
        </div>
      </div>
    </div>
  );
}