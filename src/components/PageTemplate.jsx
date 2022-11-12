import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Mail from './Mail'
import Sms from './Sms'

function PageTemplate() {
    const [email,setEmail]=useState(true)
    const emailSwitch=()=>{
            setEmail(true)
    }
    const sms=()=>{
            setEmail(false)
    }
  return (
    <div>
      
      <Link to="/">
      <div className='addButton'>
        Go to list
      </div>
      </Link>

      
   
      
        <div className='choice'>
            <h1 onClick={emailSwitch}>Email</h1>
            <h1 onClick={sms}>SMS</h1>
        </div>

            {email
            ?
                <Mail/>
                :
                <Sms/>
                
            }
    </div>
  )
}

export default PageTemplate