'use client'
import TextCustom from '@/components/TextCustom'
import React from "react";
import CustomLayout from '../layouts/CustomLayout'
import Spacer from '@/components/Spacer'
import Link from 'next/link'
import Names from '@/components/Names';




function Privacy() {



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

      <TextCustom dark  text='Use of Personal Images
By using this website, you acknowledge and agree that any images, photographs, or likenesses of individuals featured on the site have been used with the consent of the individuals depicted. We ensure that all necessary permissions and approvals have been obtained for the use of such images.

If you are a person whose image appears on this website and believe that you have not provided consent for its use, please contact us immediately at [your contact email or phone number], and we will take the appropriate steps to address the matter.

We respect the privacy of individuals and are committed to ensuring that all images are used in accordance with applicable laws and regulations.' />
       
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

export default Privacy