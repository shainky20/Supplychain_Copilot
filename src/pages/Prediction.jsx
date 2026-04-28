import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Prediction() {
  const [result, setResult] = useState(null);

  const runPrediction = () => {
    setResult({
      risk_score: 84,
      delay_hours: 5.2,
      reason: "Heavy rain + traffic congestion",
      recommendation:
        "Reroute via Jaipur Hub. Save 3.1 hours.",
    });
  };

  const card = {
    background: "#081122",
    borderRadius: "20px",
    padding: "24px",
    color: "white",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 0 25px rgba(0,140,255,0.08)",
  };

  return (
    <Layout>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "20px",
        }}
      >
        {/* LEFT */}
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>
            🤖 AI Shipment Prediction
          </h2>

          <p style={{ color: "#94a3b8" }}>
            Analyze live shipment risk using Vertex AI +
            Gemini
          </p>

          <div style={{ marginTop: "20px" }}>
            <input
              placeholder="Origin"
              style={inputStyle}
            />

            <input
              placeholder="Destination"
              style={inputStyle}
            />

            <input
              placeholder="Weather Risk %"
              style={inputStyle}
            />

            <input
              placeholder="Traffic Index"
              style={inputStyle}
            />
          </div>

          <button
            onClick={runPrediction}
            style={buttonStyle}
          >
            Analyze Shipment
          </button>
        </div>

        {/* RIGHT */}
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>
            Gemini AI Result
          </h2>

          {!result ? (
            <p style={{ color: "#94a3b8" }}>
              Awaiting analysis...
            </p>
          ) : (
            <>
              <div style={pill("#ef4444")}>
                Risk Score: {result.risk_score}
              </div>

              <div style={pill("#f59e0b")}>
                Delay: {result.delay_hours} hrs
              </div>

              <div style={pill("#0ea5e9")}>
                Cause: {result.reason}
              </div>

              <div
                style={{
                  marginTop: "18px",
                  padding: "16px",
                  borderRadius: "14px",
                  background: "#020617",
                  color: "#22c55e",
                }}
              >
                💡 {result.recommendation}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "#020617",
  color: "white",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "14px",
  border: "none",
  background:
    "linear-gradient(90deg,#0ea5e9,#1d4ed8)",
  color: "white",
  fontWeight: "700",
  fontSize: "16px",
  cursor: "pointer",
};

const pill = (color) => ({
  marginTop: "14px",
  padding: "14px",
  borderRadius: "12px",
  background: color,
  fontWeight: "600",
});