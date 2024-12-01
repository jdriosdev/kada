import React from 'react'
import Names from './Names'
import TextCustom from './TextCustom'
import Spacer from './Spacer'
import Link from 'next/link'
import styles from '../app/page.module.css'


function CivilLunch() {
  return (
    <div>
        <Names />

        <TextCustom 
        text='Share with us an amazing lunch at Cronulla RSL Club at 2:30pm'
      />
      <Spacer />
<div style={{textAlign: 'center'}}>

      <Link target='blank' href='https://www.google.com/maps/place/Cronulla+RSL+Club/@-34.0565089,151.1520546,17z/data=!4m15!1m8!3m7!1s0x6b12c812567c08a9:0x89970aa98f5f750!2s38+Gerrale+St,+Cronulla+NSW+2230!3b1!8m2!3d-34.0564911!4d151.154533!16s%2Fg%2F11cplq409r!3m5!1s0x6b12c95891656397:0x74e79c4b0dddc03d!8m2!3d-34.0557819!4d151.1545157!16s%2Fg%2F11jgsnpwb_?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D' style={{textAlign:'center'}}><div className={`${styles.lunchImg} ${styles.linkImg}`}>

</div></Link>

<TextCustom 
        text='38R Gerrale St, Cronulla NSW 2230'
      />
</div>
    </div>
  )
}

export default CivilLunch