import React,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";


function ChampMenu() {
    const message = useSelector((item) => item.message);
console.log(message)
// const [messageDetails,setMessageDetails]=useState([])


  return (
    <div className='messagesTable'>
        {message && message.map((item)=>(
            <div>
                <div>{item.name}</div>
                <div>{item.text}</div>
            </div>
        ))}

    </div>
  )
}

export default ChampMenu