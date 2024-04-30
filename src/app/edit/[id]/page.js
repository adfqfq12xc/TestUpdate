"use client"
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { PostContext } from '../../../context/PostContext'
import Link from 'next/link'
import "./page.css"
export default function Edit() {

    const params = useParams() 
     const {notes, addNotes,updateNotes,deleteNotes}=useContext(PostContext)
const [poste,setPost]=useState(null)
const [edit,setEdit]=useState("")

 
useEffect(() => {
  if (params) {
      const foundPost = notes.find(post => post.id == params.id);
      if (foundPost) {
          setPost(foundPost);
          setEdit(foundPost.note);
          console.log(foundPost)

      } else {
          console.log('Post not found');
      }
  } else {
    const foundPost = notes.find(post => post.id == 1);
    if (foundPost) {
      setPost(foundPost);
      setEdit(foundPost.note);
      console.log(foundPost)
  } else {
      console.log('Post not found');
  }
  }

}, []);



  return (
    <div className='container'>
        {poste?(
        <div>
<h1>Id:{poste.id}</h1>
<input title='input' type='text' value={edit} onChange={(e) => setEdit(e.target.value)} />
<button onClick={(e)=>{
 
      if (edit.trim()!=='') {
        updateNotes(poste.id, edit);
          console.log('Post updated:', poste.id, edit);
      }
  }}><Link href={"/"}>Edit1</Link></button>
            </div>
            ):(
                <div>No post founded</div>
            )}
    </div>
   
  )
}
