'use client'
import TextCustom from '@/components/TextCustom'
import React from "react";
import CustomLayout from '../layouts/CustomLayout'
import Spacer from '@/components/Spacer'
import Link from 'next/link'
import PhotosList from '@/components/PhotosList';
import Names from '@/components/Names';




function Photos() {

  const photos =[
    'p14.jpeg',
    'p11.jpeg',
    'p1.png',
    'p2.png',
    'p3.png',
    'p4.png',
    'p5.png',
    'p6.png',
    'p7.png',
    'p9.png',
    'p10.jpeg',
    'p12.jpeg',
    'p13.png',
    'p15.jpg',
    'p16.jpg',
  ]


  return (
      <CustomLayout>
        <>
        <div style={{
          border : '1px solid rgba(255,255,255,1)',
          height:'200px',
          //background: 'rgb(4,129,149)',
 background:'linear-gradient(180deg, rgba(175,216,240,1) 0%, rgba(9,9,121,0) 93%)'
        }}>

        <Names isBig/>
        </div>
        
        <Spacer />
        <PhotosList photos={photos} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:'linear-gradient(0deg, rgba(175,216,240,1) 50%, rgba(9,9,121,0) 99%)',
minHeight: '100px'

        }}>

<Spacer />
<TextCustom  text='Thanks for sharing your memories with us' />


<Link href='/privacy' 
        style={{
          color: 'black',
          margin: '10px auto'
        }}
        >

          <TextCustom text='Check use of image'></TextCustom>
        </Link>

        <Link href='/' 
        style={{
          color: 'black',
          margin: '10px auto'
        }}
        >

          <TextCustom text='Go Home'></TextCustom>
        </Link>
        </div>
        </>
      </CustomLayout>
      
  
  )
}

export default Photos