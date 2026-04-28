import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Hello! I'm Gemini Copilot. Ask about delays, routes, risks, or shipments.",
    },
  ]);

  const [input, setInput] = useState("");

  const askGemini = async () => {
    if (!input.trim()) return;

    const userText = input;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userText,
      },
    ]);

    setInput("");

    try {
      const res = await fetch(
        "http://localhost:5000/chat",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            message: userText,
          }),
        }
      );

      const data =
        await res.json();

      // Add Gemini reply
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "Unable to connect to Gemini server.",
        },
      ]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "24px",
          background:
            "radial-gradient(circle at top left,#081122,#020617,#000814)",
          position: "relative",
        }}
      >
        <Topbar />

        {children}

        {/* FLOAT BUTTON */}
        <button
          onClick={() =>
            setOpen(!open)
          }
          style={{
            position:
              "fixed",
            bottom: "24px",
            right: "24px",
            width: "64px",
            height: "64px",
            borderRadius:
              "50%",
            border: "none",
            background:
              "linear-gradient(135deg,#0ea5e9,#1d4ed8)",
            color:
              "white",
            fontSize:
              "28px",
            cursor:
              "pointer",
            boxShadow:
              "0 0 30px rgba(14,165,233,.45)",
            zIndex: 999,
          }}
        >
          ✦
        </button>

        {/* CHAT PANEL */}
        {open && (
          <div
            style={{
              position:
                "fixed",
              bottom:
                "100px",
              right:
                "24px",
              width:
                "360px",
              height:
                "520px",
              background:
                "#081122",
              borderRadius:
                "22px",
              padding:
                "18px",
              border:
                "1px solid rgba(255,255,255,.06)",
              boxShadow:
                "0 0 30px rgba(0,0,0,.45)",
              display:
                "flex",
              flexDirection:
                "column",
              zIndex: 999,
            }}
          >
            <h3
              style={{
                color:
                  "white",
                marginTop:
                  0,
              }}
            >
              ✦ Gemini
              Copilot
            </h3>

            {/* MESSAGES */}
            <div
              style={{
                flex: 1,
                overflowY:
                  "auto",
                marginTop:
                  "10px",
              }}
            >
              {messages.map(
                (
                  msg,
                  i
                ) => (
                  <div
                    key={i}
                    style={{
                      marginBottom:
                        "12px",
                      display:
                        "flex",
                      justifyContent:
                        msg.role ===
                        "user"
                          ? "flex-end"
                          : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        maxWidth:
                          "80%",
                        padding:
                          "12px",
                        borderRadius:
                          "14px",
                        background:
                          msg.role ===
                          "user"
                            ? "#0ea5e9"
                            : "#111827",
                        color:
                          "white",
                      }}
                    >
                      {
                        msg.text
                      }
                    </div>
                  </div>
                )
              )}
            </div>

            {/* INPUT */}
            <div
              style={{
                display:
                  "flex",
                gap: "10px",
                marginTop:
                  "12px",
              }}
            >
              <input
                value={
                  input
                }
                onChange={(
                  e
                ) =>
                  setInput(
                    e
                      .target
                      .value
                  )
                }
                placeholder="Ask Gemini..."
                style={{
                  flex: 1,
                  padding:
                    "12px",
                  borderRadius:
                    "12px",
                  border:
                    "none",
                  background:
                    "#020617",
                  color:
                    "white",
                }}
              />

              <button
                onClick={
                  askGemini
                }
                style={{
                  padding:
                    "12px 16px",
                  border:
                    "none",
                  borderRadius:
                    "12px",
                  background:
                    "#0ea5e9",
                  color:
                    "white",
                  cursor:
                    "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}