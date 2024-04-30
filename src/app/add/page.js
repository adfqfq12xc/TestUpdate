"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import "./page.css"
import { PostContext } from '../../context/PostContext'

export default function Add() {
    const {Notes, addNotes}=useContext(PostContext)
    const [titlee,setTitle]=useState("")
     const handleclick = (e)=>{
      e.preventDefault()
      addNotes({id:Date.now(),note:titlee})
    } 
  return (
    <div className='container'>   
     <form >
    <input
      type="text"
      placeholder="Add Notee"
      value={titlee}
      onChange={(e) => setTitle(e.target.value)}
    />
    <button onClick={(e)=>handleclick(e)} > <Link href='/'>Add mee</Link> </button>
   

    </form>
    </div>
  )
}
