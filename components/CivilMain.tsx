import React from 'react'

import {Quicksand} from "next/font/google";
import Names from './Names';
import TextCustom from './TextCustom';
import Spacer from './Spacer';


const quicksand = Quicksand({ subsets: ['latin'] })

function CivilMain() {
  return (
    <>
    <TextCustom 
    text='Two hearts, one love, and a lifetime together. You are invited!'
    />
    <Names isBig/>
    <p className={`${quicksand.className}`}>7 | December | 2024</p>
    <p className={`${quicksand.className}`}>1:30 PM</p>
    <p className={`${quicksand.className}`}>Oak Park Beach - Cronulla</p>
    <p className={`${quicksand.className}`}>Sydney</p>
    <Spacer/>
    <a className={`${quicksand.className}`} href="https://www.google.com/maps/place/Oak+Park+Beach/@-34.0697111,151.155664,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12c86f63a66963:0xf017d68f9f25a90!8m2!3d-34.0697111!4d151.155664!16s%2Fg%2F11bxfj7d70?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="blank">Address Here!</a></>
  )
}

export default CivilMain