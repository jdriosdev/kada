import React from 'react'
import TextCustom from './TextCustom'
import Names from './Names'
import styles from '../app/page.module.css'

function WeddingPlace() {
  return (
    <div>
      <Names />
      <TextCustom
    text='We are excited to see you there!'
    />

<a href="https://maps.app.goo.gl/B4eZ5THqnboDnEN37" target="blank">

<div className={` ${styles.mapImg} ${styles.linkImg}`}>

</div>
</a>

      <TextCustom text='CGMJI' />
      <TextCustom text='Sydney' />
    </div>
  )
}

export default WeddingPlace