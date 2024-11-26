import React from 'react'
import Names from './Names'
import TextCustom from './TextCustom'
import Spacer from './Spacer'


function CivilDressCode() {
  return (
    <div>
      <Names  />
      <TextCustom 
      text='Dress to impress, but keep it beach-friendly! Think semi-formal: light, breezy, and comfortable. '
      />
<Spacer />
<TextCustom 
      text=' We kindly ask you to avoid wearing light blue, as it’s the color of the day.'
      />
      
    </div>
  )
}

export default CivilDressCode