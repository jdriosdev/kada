import React from 'react'
import TextCustom from './TextCustom';
import Image from 'next/image';

type PhotoListType = {
    photos?: string[];
}

export default function PhotosList({photos}: PhotoListType) {  
  
  return (
    <div 
    className='photos-list-container'
    >
        {photos?.length ? 
        
        photos.map(img => 
        <div key={img} style={{
          position: 'relative', 
          width: '100%', 
          height: '350px', 
          
          boxShadow: '1px 2px 15px rgba(0,0,0,0.1)',
          marginBottom: '1rem',
          border: '20px solid white',
          borderBottom: '60px solid white',
          }}>

            {/* <p style={{
              zIndex: 10,
              color: 'black',
              top:'-5px',
              position: 'absolute'
            }}>{img}</p> */}
          <Image 
          layout='fill'
          alt={img}
          objectFit='cover' 
          src={`/civil/${img}`}  />
        </div>
        
        )
        
        
        : <TextCustom dark text='No photos have been shared yet.'/>}
    </div>
  )
}
