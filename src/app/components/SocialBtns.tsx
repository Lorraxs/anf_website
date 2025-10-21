"use client";

import React from "react";

interface SocialsBtnProps {
  facebookUrl?: string;
  tiktokUrl?: string;
  discordUrl?: string;
  youtubeUrl?: string;
}

function SocialsBtn({
  facebookUrl,
  tiktokUrl,
  discordUrl,
  youtubeUrl,
}: SocialsBtnProps) {
  return (
    <div className="flex gap-2">
      <button
        className="hover:scale-105 transition-transform w-[calc(0.7529*88px)] h-[calc(0.7529*88px)]"
        style={{
          backgroundImage: "url('/discord_btn.png')",
          /* width: "88px",
          height: "88px", */
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          if (discordUrl) {
            window.open(discordUrl, "_blank");
          }
        }}
      />
      <button
        className="hover:scale-105 transition-transform w-[calc(0.7529*88px)] h-[calc(0.7529*88px)]"
        style={{
          backgroundImage: "url('/facebook_btn.png')",
          /* width: "88px",
          height: "88px", */
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          if (facebookUrl) {
            window.open(facebookUrl, "_blank");
          }
        }}
      />
      <button
        className="hover:scale-105 transition-transform w-[calc(0.7529*88px)] h-[calc(0.7529*88px)]"
        style={{
          backgroundImage: "url('/youtube_btn.png')",
          /* width: "88px",
          height: "88px", */
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          if (youtubeUrl) {
            window.open(youtubeUrl, "_blank");
          }
        }}
      />
      <button
        className="hover:scale-105 transition-transform w-[calc(0.7529*88px)] h-[calc(0.7529*88px)]"
        style={{
          backgroundImage: "url('/tiktok_btn.png')",
          /* width: "88px",
          height: "88px", */
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          if (tiktokUrl) {
            window.open(tiktokUrl, "_blank");
          }
        }}
      />
    </div>
  );
}

export default SocialsBtn;
