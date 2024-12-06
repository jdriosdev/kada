'use client'
import TextCustom from '@/components/TextCustom'
import React from "react";
import CustomLayout from '../layouts/CustomLayout'
import Spacer from '@/components/Spacer'
import Link from 'next/link'




function Photos() {


  return (
      <CustomLayout>
        <>
        <TextCustom dark text='Thanks for sharing your memories with us' />
        <Spacer />
        {/* <PhotosList photos={photos} /> */}
        <div style={{
          display: 'flex'
        }}>



        <Link href='/' 
        style={{
          color: 'black',
          margin: '10px auto'
        }}
        >Home</Link>
        </div>
        </>
      </CustomLayout>
      
  
  )
}

export default Photos