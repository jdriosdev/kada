import React from 'react'
import Names from './Names'
import TextCustom from './TextCustom'
import Spacer from './Spacer'


function WeddingDressCode() {
  return (
    <div>
      <Names  />
      <TextCustom 
      text='We kindly request that all guests attend our wedding in formal attire. We look forward to celebrating this special day with you in your finest dress and suit, as we create unforgettable memories together. '
      />
<Spacer />
<TextCustom 
      text='Thank you for making our day even more beautiful with your presence and style!'
      />
      
    </div>
  )
}

export default WeddingDressCode