import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiCpu,
  FiMap,
  FiAlertTriangle,
  FiTruck,
  FiBarChart2,
  FiSettings
} from "react-icons/fi";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "AI Prediction", path: "/prediction", icon: <FiCpu /> },
    { name: "Route Optimizer", path: "/optimizer", icon: <FiMap /> },
    { name: "Alerts", path: "/alerts", icon: <FiAlertTriangle /> },
    { name: "Shipments", path: "/shipments", icon: <FiTruck /> },
    { name: "Analytics", path: "/analytics", icon: <FiBarChart2 /> },
    { name: "Settings", path: "/settings", icon: <FiSettings /> },
  ];

  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#050B1A",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        padding: "24px",
        color: "white",
      }}
    >
      <div
        style={{
          padding: "18px",
          borderRadius: "18px",
          background: "linear-gradient(135deg,#0ea5e9,#1d4ed8)",
          fontWeight: "700",
          fontSize: "24px",
          marginBottom: "28px",
        }}
      >
        ⚡ SupplyChain Copilot
      </div>

      {menu.map((item, i) => {
        const active = location.pathname === item.path;

        return (
          <Link
            key={i}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 16px",
              borderRadius: "14px",
              marginBottom: "12px",
              textDecoration: "none",
              color: "white",
              background: active
                ? "linear-gradient(90deg,#0ea5e9,#1d4ed8)"
                : "rgba(255,255,255,0.03)",
              boxShadow: active
                ? "0 0 20px rgba(14,165,233,.35)"
                : "none",
            }}
          >
            {item.icon}
            {item.name}
          </Link>
        );
      })}

      <div
        style={{
          marginTop: "40px",
          padding: "18px",
          borderRadius: "16px",
          background: "rgba(14,165,233,.08)",
          border: "1px solid rgba(14,165,233,.2)",
        }}
      >
        Powered by <br />
        <strong>Vertex AI + Gemini</strong>
      </div>
    </div>
  );
}