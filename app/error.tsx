"use client"
import React from 'react'

interface props{
    error:Error;
    reset:()=> void;
}

const ErrorPage = ({error,reset}:props) => {

    console.log("error",error)
  return (
    <>
    <div>An unexpected error has occured</div>
    <button className="btn" onClick={()=>reset()}>Retry</button>
    </>
  )
}

export default ErrorPage