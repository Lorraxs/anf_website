"use client";

import React from "react";

interface LauncherDownloadBtnProps {
  url?: string;
}

function LauncherDownloadBtn({ url }: LauncherDownloadBtnProps) {
  return (
    <button
      className="hover:scale-105 transition-transform w-[calc(0.7529*460px)] h-[calc(0.7529*103px)]"
      style={{
        backgroundImage: "url('/launcher_download_btn.png')",
        /* width: "460px",
        height: "103px", */
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => {
        if (url) {
          window.open(url, "_blank");
        }
      }}
    />
  );
}

export default LauncherDownloadBtn;
