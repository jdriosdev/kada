import React from "react";
import TextCustom from "./TextCustom";
import Names from "./Names";
import styles from "../app/page.module.css";

function WeddingPlace() {
  return (
    <div>
      <Names />
      <TextCustom text="We are excited to see you there!" />

      <a href="https://maps.app.goo.gl/gNi2aKnD5ya4esP4A" target="blank">
        <div className={` ${styles.mapImgWedding} ${styles.linkImg}`}></div>
      </a>

      <TextCustom text="CGMJI" />
      <TextCustom text="Sydney" />
    </div>
  );
}

export default WeddingPlace;
