import React,{useEffect, useState} from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { AddMessage } from "../redux/message";
import { useDispatch } from "react-redux";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'   
import "./Content.css"


function Content() {
  const dispatch = useDispatch();

    const [text,setText]=useState('')
    const [send,setSend]=useState([])
    const [count,setCount]=useState(0)
    const [emailCount,setEmailCount]=useState(1)
    const handleChange=(e)=>{
        setText(e.blocks[0].text)
        setCount(text.length)
        if(count>150){
          setEmailCount(2)
        }
        
    }

    const submitMessage=(e)=>{
      e.preventDefault()
      let arr = [];
      arr.push(text.slice(0,150))  
      arr.push(text.slice(150,200))  
      setSend(arr)
      console.log(arr)
      console.log(send)
      localStorage.setItem("message",arr)


    }


    useEffect(()=>{
      localStorage.setItem("message",send)
    },[send])
 
  return (
   
    <div>
<form>
   <Editor
     wrapperClassName="wrapper"
     editorClassName="editor"
     toolbarClassName="toolbar"
     onChange={handleChange}
    //  onSubmit={submitMessage}
   />
<div style={{display:"flex",flexDirection:"row"}}>characters:{count}/emails{emailCount}</div>
<button  type="submit" class="btn btn-primary" onClick={submitMessage} >
              Submit
            </button>
   </form>
  </div>
  )
}

export default Content