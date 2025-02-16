import React from "react";

import { Quicksand } from "next/font/google";
import Names from "./Names";
import TextCustom from "./TextCustom";
import Spacer from "./Spacer";

const quicksand = Quicksand({ subsets: ["latin"] });

function WeddingMain() {
  return (
    <>
      <TextCustom text="Two hearts, one love, and a lifetime together. You are invited!" />
      <Names isBig />
      <p className={`${quicksand.className}`}>22 | March | 2025</p>
      <p className={`${quicksand.className}`}>1:30 PM</p>
      <p className={`${quicksand.className}`}>
        Church Of God Ministry of Jesus Christ International- Sydney
      </p>
      <Spacer />
      <p
        className={`${quicksand.className}`}
        style={{ textTransform: "capitalize" }}
      >
        The ceremony will be held at Polish Club Ashfield
      </p>
      <Spacer />
      <a
        className={`${quicksand.className}`}
        href="https://maps.app.goo.gl/gNi2aKnD5ya4esP4A"
        target="blank"
      >
        Address Here!
      </a>
    </>
  );
}

export default WeddingMain;
