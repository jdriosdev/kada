import React from 'react'
import {Quicksand} from "next/font/google";

const quicksand = Quicksand({ subsets: ['latin'] })

type TextCustomTypes = {
    text: string;
    dark?: boolean;
}

function TextCustom({text, dark}: TextCustomTypes) {
  return (
    <p
    
    className={`${quicksand.className}`}
    style={{
      textAlign: 'center',
      textTransform: 'uppercase',
    color: dark ? 'rgb(0,0,0)' : 'rgb(255,255,255)',
    maxWidth: '600px',
    margin:'0 auto'
    }}
    >{text}</p>
  )
}

export default TextCustom