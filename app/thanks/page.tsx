'use client'
import TextCustom from '@/components/TextCustom'
import React from "react";
import CustomLayout from '../layouts/CustomLayout'
import Spacer from '@/components/Spacer'
import Link from 'next/link'
import Names from '@/components/Names';
import Image from 'next/image';




function Thanks() {



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

        
<div style={{minHeight: 'calc(100vh - 300px)'}}>

      <TextCustom dark  text='We would like to extend our deepest gratitude to each and every one of you who joined us on our wedding day. Your presence, love, and support made our celebration truly unforgettable.' />
      <Spacer />

<TextCustom dark text='Having you there to share in our joy meant the world to us, and we are so grateful for the memories we created together. Whether you traveled near or far, your kindness and warmth made our day even more special. '/>
<Spacer />

<TextCustom dark text='Thank you for the thoughtful gifts, the laughter, and most of all, for being a part of this incredible chapter in our lives. We are so blessed to have such amazing people by our side, and we can’t wait to create more wonderful moments with you in the future. '/>
<Spacer />

<TextCustom dark text='With love and gratitude, '/>
<Spacer />
<Spacer />

<TextCustom dark text='Karen & Daniel '/>

<div style={{
  position: 'relative',
  minHeight: '500px',
  width:'300px',
margin: '100px auto 0',

}}>
  

<div style={{
  position: 'absolute',
  left: '-90px',
  top: '80px',
          width: '100%', 
          maxWidth: '400px',
          height: '350px', 
          
          boxShadow: '1px 2px 15px rgba(0,0,0,0.1)',
          marginBottom: '1rem',
          border: '20px solid white',
          borderBottom: '60px solid white',

          transform: 'rotate(12deg)'
          }}>

            {/* <p style={{
              zIndex: 10,
              color: 'black',
              top:'-5px',
              position: 'absolute'
            }}>{img}</p> */}
          <Image 
          layout='fill'
          alt='thanks image'
          objectFit='cover' 
          src={`/civil/p3.png`}  />
        </div>
        <div style={{
  position: 'absolute',
   left: '90px',
   top:'-20px',
          width: '100%', 
          maxWidth: '400px',
          height: '350px', 
          
          boxShadow: '1px 2px 15px rgba(0,0,0,0.1)',
          marginBottom: '1rem',
          border: '20px solid white',
          borderBottom: '60px solid white',

          transform: 'rotate(15deg)'
          }}>

            {/* <p style={{
              zIndex: 10,
              color: 'black',
              top:'-5px',
              position: 'absolute'
            }}>{img}</p> */}
          <Image 
          layout='fill'
          alt='thanks image'
          objectFit='cover' 
          src={`/civil/p4.png`}  />
        </div>
        <div style={{
  position: 'absolute',
  // left: '200px',
          width: '100%', 
          maxWidth: '400px',
          height: '350px', 
          
          boxShadow: '1px 2px 15px rgba(0,0,0,0.1)',
          marginBottom: '1rem',
          border: '20px solid white',
          borderBottom: '60px solid white',

          transform: 'rotate(0deg)'
          }}>

            {/* <p style={{
              zIndex: 10,
              color: 'black',
              top:'-5px',
              position: 'absolute'
            }}>{img}</p> */}
          <Image 
          layout='fill'
          alt='thanks image'
          objectFit='cover' 
          src={`/civil/p1.png`}  />
        </div>
  </div>
</div>


       
     
        <Spacer />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:'linear-gradient(0deg, rgba(175,216,240,1) 10%, rgba(9,9,121,0) 99%)',
minHeight: '100px'

        }}>

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

export default Thanks