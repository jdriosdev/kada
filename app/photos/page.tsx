'use client'
import TextCustom from '@/components/TextCustom'
import React, { useState } from 'react'
import CustomLayout from '../layouts/CustomLayout'
import PhotosList from '@/components/PhotosList'
import Spacer from '@/components/Spacer'

function Photos() {
  const [photos] = useState([])
  return (
      <CustomLayout>
        <>
        <TextCustom dark text='Thanks for sharing your memories with us' />
        <Spacer />
        <PhotosList photos={photos} />
        <div style={{
          display: 'flex'
        }}>

        <a href='/' 
        style={{
          color: 'black',
          margin: '10px auto'
        }}
        >Home</a>
        </div>
        </>
      </CustomLayout>
      
  
  )
}

export default Photos