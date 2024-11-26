import React from 'react'
import TextCustom from './TextCustom'
import Names from './Names'
import Image from 'next/image'
import styles from '../app/page.module.css'

function CivilPlace() {
  return (
    <div>
      <Names />
      <TextCustom
    text='We are excited to see you there!'
    />

<a href="https://www.google.com/maps/place/Oak+Park+Beach/@-34.0697111,151.155664,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12c86f63a66963:0xf017d68f9f25a90!8m2!3d-34.0697111!4d151.155664!16s%2Fg%2F11bxfj7d70?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="blank">

<div className={styles.mapImg}>

</div>
</a>

<TextCustom text='Oak Park Beach - Cronulla' />
<TextCustom text='Sydney' />

    </div>
  )
}

export default CivilPlace