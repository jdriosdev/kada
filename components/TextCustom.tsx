import React from 'react'
import {Quicksand} from "next/font/google";

const quicksand = Quicksand({ subsets: ['latin'] })

type TextCustomTypes = {
    text: string;
}

function TextCustom({text}: TextCustomTypes) {
  return (
    <p
    
    className={`${quicksand.className}`}
    style={{
      textAlign: 'center',
      textTransform: 'uppercase'    }}
    >{text}</p>
  )
}

export default TextCustom