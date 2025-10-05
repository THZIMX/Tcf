// src/components/Layout.jsx
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Aqui você poderia colocar Navbar se quiser */}
      <main className="flex-1">
        {children}
      </main>
      {/* Footer você pode colocar aqui também se quiser */}
    </div>
  );
}
