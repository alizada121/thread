import React,{useState} from 'react'
import Mail from './Mail'
import Sms from './Sms'

function Form() {
    const [email,setEmail]=useState(true)
    const emailSwitch=()=>{
            setEmail(true)
    }
    const sms=()=>{
            setEmail(false)
    }
  return (
    <div>
        <div>
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

export default Form