import React from 'react'
import Names from './Names'
import TextCustom from './TextCustom'
import Link from 'next/link'
import Spacer from './Spacer'

function CivilPhoto() {
  return (
    <div>
      <Names />
      <TextCustom 
        text='We would like to invite you to share the photos and memories that you take that day with us.'
      />
<Spacer/>
<TextCustom 
        text='On 7th December you will be able to share photos here and take a look of all of them in the next link.'
      />
      <Spacer />
<div style={{textAlign: 'center'}}>

      <Link href='/photos' style={{textAlign:'center'}}>All Photos!</Link>
</div>
    </div>
  )
}

export default CivilPhoto