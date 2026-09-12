"use client";

import { useState, useRef } from "react";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/showreel";

interface VideoPlayerProps {
  poster: string;
  src: string;
  type: string;
  className: string;
}

function VideoPlayer({ poster, src, type, className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`fk-video-wrapper ${className}`} onClick={togglePlay}>
      <div className={`fk-play-btn ${isPlaying ? "fk-playing" : ""}`}>
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6zm8-14v14h4V5z"></path>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        )}
      </div>
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        preload="metadata"
        loop
        className="fk-video"
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
}

export function ShowReelGrid() {
  return (
    <section className="fk-showreel-section">
      <div className="fk-showreel-container">
        
        {/* Row 1 */}
        <div className="fk-showreel-row">
          {/* Column 1 */}
          <div className="fk-showreel-col">
            <VideoPlayer
              poster={`${ASSET}/PolicyBazaar_Thumbnail.webp`}
              src="https://cdn.famekeeda.com/videos/policy-bazar.webm"
              type="video/webm"
              className="fk-landscape"
            />
            <div className="fk-showreel-inner-row">
              <VideoPlayer
                poster={`${ASSET}/CEAT_Thumbnail.webp`}
                src="https://cdn.famekeeda.com/videos/Ceat.webm"
                type="video/webm"
                className="fk-portrait"
              />
              <VideoPlayer
                poster={`${ASSET}/Kotak_Thumbnail.webp`}
                src="https://cdn.famekeeda.com/videos/Kotak.webm"
                type="video/webm"
                className="fk-portrait"
              />
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="fk-showreel-col">
            <div className="fk-showreel-inner-row">
              <VideoPlayer
                poster={`${ASSET}/Mobikwik_Thumbnail.webp`}
                src="https://cdn.famekeeda.com/videos/mobikiwik.webm"
                type="video/webm"
                className="fk-portrait"
              />
              <VideoPlayer
                poster={`${ASSET}/Skybags_Thumbnail.webp`}
                src="https://cdn.famekeeda.com/videos/Skybag.webm"
                type="video/webm"
                className="fk-portrait"
              />
            </div>
            <VideoPlayer
              poster={`${ASSET}/Mstock_Thumbnail.webp`}
              src="https://cdn.famekeeda.com/videos/Mstock.webm"
              type="video/webm"
              className="fk-landscape"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="fk-showreel-row fk-showreel-row-3">
          <VideoPlayer
            poster={`${ASSET}/Amazon_Thumbnail.webp`}
            src="https://cdn.famekeeda.com/videos/Alexa.webm"
            type="video/webm"
            className="fk-short-landscape"
          />
          <VideoPlayer
            poster={`${ASSET}/Duracell_Thumbnail.webp`}
            src="https://storage.googleapis.com/babylonfk/Videos/Duracell.mp4"
            type="video/mp4"
            className="fk-short-landscape"
          />
          <VideoPlayer
            poster={`${ASSET}/Intel_Thumbnail.webp`}
            src="https://cdn.famekeeda.com/videos/Intel.webm"
            type="video/webm"
            className="fk-short-landscape"
          />
        </div>

      </div>

      <style>{`
        .fk-showreel-section {
          padding: 60px 24px;
          background: #fff;
          max-width: 1400px;
          margin: 0 auto;
        }
        .fk-showreel-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .fk-showreel-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .fk-showreel-row-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .fk-showreel-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .fk-showreel-inner-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .fk-video-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: #000;
        }
        .fk-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .fk-landscape {
          aspect-ratio: 16/9;
        }
        .fk-portrait {
          aspect-ratio: 9/16;
        }
        .fk-short-landscape {
          aspect-ratio: 4/3;
        }

        .fk-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          z-index: 10;
          transition: all 0.3s;
        }
        .fk-video-wrapper:hover .fk-play-btn {
          background: rgba(255, 255, 255, 0.4);
          transform: translate(-50%, -50%) scale(1.1);
        }
        .fk-play-btn.fk-playing {
          opacity: 0;
        }
        .fk-video-wrapper:hover .fk-play-btn.fk-playing {
          opacity: 1;
        }
        .fk-play-btn svg {
          width: 32px;
          height: 32px;
        }

        @media (max-width: 992px) {
          .fk-showreel-row, .fk-showreel-row-3 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
