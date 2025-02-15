"use client";
import GlassCard from "@/components/GlassCard";
import WeddingDressCode from "@/components/WeddingDressCode";
import WeddingMain from "@/components/WeddingMain";
import WeddingPhoto from "@/components/WeddingPhoto";
import WeddingPlace from "@/components/WeddingPlace";
import { useState } from "react";

import {
  PiDressFill,
  PiMapPinAreaFill,
  PiCameraFill,
  PiCalendarHeartFill,
  PiEyeSlashFill,
  PiEyeFill,
} from "react-icons/pi";

export default function Home() {
  const [showCard, setShowCard] = useState(true);

  const menuItems = [
    {
      label: "Invitation",
      icon: () => <PiCalendarHeartFill />,
      component: () => <WeddingMain />,
    },
    {
      label: "Dress Code",
      icon: () => <PiDressFill />,
      component: () => <WeddingDressCode />,
    },
    {
      label: "Place",
      icon: () => <PiMapPinAreaFill />,
      component: () => <WeddingPlace />,
    },
    {
      label: "Photo",
      icon: () => <PiCameraFill />,
      component: () => <WeddingPhoto />,
    },
    // {
    //   label: 'Lunch',
    //   icon: ()=><PiBowlFoodFill />,
    //   component: () => <WeddingLunch/>
    // },
  ];

  const [itemToShow, setItemToShow] = useState(menuItems[0]);

  return (
    <>
      <div
        className="wedding-bg-body"
        style={{
          height: "120vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <button
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          padding: "10px",
          margin: "0 2px",
          backgroundColor: "#2A3663",
          border: "none",
          fontSize: "1.5rem",
          borderRadius: "5px",
        }}
        onClick={() => setShowCard((prev) => !prev)}
      >
        {showCard ? <PiEyeSlashFill /> : <PiEyeFill />}
      </button>
      <GlassCard showCard={showCard}>
        {itemToShow.component()}

        <div
          style={{
            borderTop: "1px solid white",
            padding: "10px 0",
            marginTop: "10px",
          }}
        >
          {menuItems.map((item, index) => (
            <button
              style={{
                padding: "10px",
                margin: "0 2px",
                backgroundColor: "#2A3663",
                border: "none",
                fontSize: "1.5rem",
                borderRadius: "5px",
              }}
              onClick={() => setItemToShow(menuItems[index])}
              key={item.label}
            >
              {item.icon()}
            </button>
          ))}
        </div>
      </GlassCard>
    </>
  );
}
