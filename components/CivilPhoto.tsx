'use client'

import React, {useState} from 'react'
import Names from './Names'
import TextCustom from './TextCustom'
import Spacer from './Spacer'
import axios, { AxiosProgressEvent } from "axios";
import Image from 'next/image'

const cloudName = 'dcdbegg7g'

function CivilPhoto() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [error, setError] = useState<null|string>(null);

  const handleFileChange = (e:any ) => {
    setUploadedUrl(null)
    setUploadProgress(0)
    const file = e.target.files[0]
    file.src = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(file);
    
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", 'upload-kada');

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          onUploadProgress: (progressEvent:AxiosProgressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total!
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      setUploadedUrl(response.data.secure_url);
      setSelectedImage(null)
      setError(null);
    } catch (err) {
      setError(`${err}, Failed to upload the image.`);
    }
  };

  return (
    <div>
      <Names />
      <TextCustom 
        text='We would like to invite you to share the photos and memories that you take that day with us.'
      />
<Spacer/>

      <Spacer />

      <div style={{display: 'flex', justifyContent:'space-between'}}>

      <label htmlFor="file-upload" className="custom-file-upload">
      <TextCustom text='Select Photo' />
    </label>
    {selectedImage &&
    
    <span style={{margin: '5px 15px', maxWidth:'120px', display:'block', overflow:'hidden'}}>{selectedImage?.name}</span>
    }
<input id="file-upload" type="file" onChange={handleFileChange} accept="image/*" />


      <button
      onClick={uploadImage}
      disabled={selectedImage ? false : true}
      style={{  
        padding: '10px',
        margin: '0 2px',
        backgroundColor: '#2A3663',
        border: 'none',
        borderRadius: '5px'}}
        >
          <TextCustom text='Upload' />
        </button>
      </div>
{selectedImage && 
<div style={{
  margin: '20px auto',
  width: ' 100%',
  height: '300px',
position: 'relative'

}}>

<Image
fill
layout='fill'
objectFit='contain'

 
src={selectedImage.src} alt={selectedImage.name} />
</div>
}
<Spacer />

      {uploadProgress > 0 && 
      
      <TextCustom text={`Upload Progress: ${uploadProgress}%`} />
      
      }
      <Spacer />
      {uploadedUrl && (
        <div>
          <TextCustom text='Upload Successful!, You can upload more photos' />
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  )
}

export default CivilPhoto