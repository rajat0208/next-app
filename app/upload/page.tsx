'use client'
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'

const uploadPage = () => {
  return (
    <>
        <CldUploadWidget uploadPreset='next-app'>
            {({open})=><button className='btn btn-primary' onClick={()=>open()}>Upload</button>}
        </CldUploadWidget>
    </>
  )
}

export default uploadPage