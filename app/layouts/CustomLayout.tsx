import React, { ReactElement } from 'react'
import styles from '../page.module.css'

type CustomLayoutTypes = {
    children: ReactElement;
}

function CustomLayout({children}: CustomLayoutTypes) {
  return (
    <div className={styles.customLayout}>{children}</div>
  )
}

export default CustomLayout