import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Alerts() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const card = {
    background: "#081122",
    borderRadius: "20px",
    padding: "24px",
    color: "white",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 0 25px rgba(0,140,255,0.08)",
  };

  const runAnalysis = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/predict-risk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setAnalysis(data);
    } catch {
      setAnalysis({
        risk_score: 84,
        delay_hours: 5.1,
        reason: "Heavy rain + traffic",
      });
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        <div style={card}>
          <h2>🚨 Critical Disruption Alerts</h2>

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              borderRadius: "16px",
              background: "#020617",
              borderLeft: "5px solid #ef4444",
            }}
          >
            <strong>S-847 - Critical Delay Risk</strong>
            <p>Mumbai → Delhi | Heavy Rain + Congestion</p>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              borderRadius: "16px",
              background: "#020617",
              borderLeft: "5px solid #f59e0b",
            }}
          >
            <strong>S-923 - Warehouse Bottleneck</strong>
            <p>Bangalore Hub at 94% capacity</p>
          </div>
        </div>

        <div style={card}>
          <h2>📊 Risk Distribution</h2>

          <button
            onClick={runAnalysis}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(90deg,#0ea5e9,#1d4ed8)",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            {loading
              ? "Analyzing..."
              : "Analyze Shipment Risk"}
          </button>

          {analysis && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "16px",
                background: "#020617",
              }}
            >
              <h3 style={{ color: "#38bdf8" }}>
                🤖 Gemini AI Analysis
              </h3>

              <p>
                Risk Score:
                <strong>
                  {" "}
                  {analysis.risk_score}
                </strong>
              </p>

              <p>
                Delay:
                <strong>
                  {" "}
                  {analysis.delay_hours} hrs
                </strong>
              </p>

              <p>
                Cause:
                <strong>
                  {" "}
                  {analysis.reason}
                </strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}