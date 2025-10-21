"use client";

import React from "react";

interface GameDownloadBtnProps {
  url?: string;
}

function GameDownloadBtn({ url }: GameDownloadBtnProps) {
  return (
    <button
      className="hover:scale-105 transition-transform w-[calc(0.7529*308px)] h-[calc(0.7529*69px)] mb-[60px]"
      style={{
        backgroundImage: "url('/game_download_btn.png')",
        /* width: "232px",
        height: "52px", */
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

export default GameDownloadBtn;
