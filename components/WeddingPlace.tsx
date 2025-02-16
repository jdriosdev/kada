import React from "react";
import TextCustom from "./TextCustom";
import Names from "./Names";
import styles from "../app/page.module.css";
import Spacer from "./Spacer";

function WeddingPlace() {
  return (
    <div>
      <Names />
      <TextCustom text="We are excited to see you there!" />
      <Spacer />
      <TextCustom text="182 Liverpool Rd, Ashfield NSW 2131" />

      <a href="https://maps.app.goo.gl/gNi2aKnD5ya4esP4A" target="blank">
        <div className={` ${styles.mapImgWedding} ${styles.linkImg}`}></div>
      </a>

      <TextCustom text="CGMJI" />
      <TextCustom text="Sydney" />
    </div>
  );
}

export default WeddingPlace;
