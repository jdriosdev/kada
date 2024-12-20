import React from 'react'

import {Quicksand} from "next/font/google";
import Names from './Names';
import TextCustom from './TextCustom';
import Spacer from './Spacer';


const quicksand = Quicksand({ subsets: ['latin'] })

function WeddingMain() {
  return (
    <>
    <TextCustom 
    text='Two hearts, one love, and a lifetime together. You are invited!'
    />
    <Names isBig/>
    <p className={`${quicksand.className}`}>xx | March | 2025</p>
    <p className={`${quicksand.className}`}>3 PM</p>
    <p className={`${quicksand.className}`}>CGMJI - Sydney</p>
    <p className={`${quicksand.className}`}>Sydney</p>
    <Spacer/>
    <a className={`${quicksand.className}`} href="https://maps.app.goo.gl/B4eZ5THqnboDnEN37" target="blank">Address Here!</a></>
  )
}

export default WeddingMain