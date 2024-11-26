import React from 'react'
import {Ballet} from "next/font/google";

import styles from "../app/page.module.css";

const ballet = Ballet({ subsets: ['latin'] })

type NamesTypes = {
    isBig?: boolean;
}

function Names({isBig}:NamesTypes) {
  return (
    <h1  className={`${ballet.className} ${styles.names}`}
    
    style={{
        fontSize: isBig? '70px' : '50px'
    }}
    >Karen & Daniel</h1>
  )
}

export default Names