import React from 'react'
import TextCustom from './TextCustom';

type PhotoListType = {
    photos?: string[];
}

export default function PhotosList({photos}: PhotoListType) {
  return (
    <div>
        {photos?.length ? null: <TextCustom dark text='No photos have been shared yet.'/>}
    </div>
  )
}
