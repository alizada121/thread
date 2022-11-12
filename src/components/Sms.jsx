import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ToComponent from './ToComponent'
import {  AddMessage } from "../redux/message";
import { useDispatch } from 'react-redux';

function Sms() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [modal,setModal]=useState(false)
  const [message,setMessage]=useState({
    name:"",
    from:"",
    customer:"",
    subject:"",
    template:"",
    startDate:"",
    smsText:""
  
  })
  
  const handleChange = (e) => {
    const value = e.target.value;
    setMessage({
      ...message,
      [e.target.name]: value,
    });
  
    
    console.log(message);  
  };

  const submitMessage=()=>{
    setModal(true)
    localStorage.setItem("message2",JSON.stringify(message))
  
  
  }

  const goToCampaign=()=>{
    dispatch(
      AddMessage({
        name:message.name,
        from:message.from,
        to:localStorage.getItem('selected'),
        smsText:message.smsText,
        template:message.template,
        subject:message.subject,
        draft:false,
        mail:false
       
  
    }));
    navigate('../', { replace: true })
  
  
  }
  
  const switchModal=()=>{
    dispatch(
      AddMessage({
        name:message.name,
        from:message.from,
        to:localStorage.getItem('selected'),
        smsText:message.smsText,
        template:message.template,
        subject:message.subject,
        draft:true,
        mail:false
    }));
  
    navigate('../', { replace: true })
    
  
  }
  return (
    <div>
      {modal
      ?
      <div className="confirmationModal">
      <h1>Are you sure?</h1>
      <button onClick={goToCampaign} >Yes</button>
      <button onClick={switchModal}>No</button>
  </div>
      :
      <div>
      <h1>SMS thread</h1>
      <form >
      <div className="col">
        <label>Thread name</label>
        <input name="name" required placeholder="Enter thread name" type="text" onChange={handleChange} ></input>
        <label>From</label>
        <input name="from" placeholder="name1 or name2" onChange={handleChange}></input>
        <label>Customer</label>
        <input name="customer" placeholder="customer" onChange={handleChange}></input>
      </div>

      <div className="col">
        <label>Template</label>
        <select name="template" onChange={handleChange}>
          <option value="template1">Template1</option>
          <option value="temaplate2">Temaplate2</option>
        </select>
        <ToComponent/>

        <div></div>
        <label>Start sending</label>
        <input placeholder="Select Date" type="date" name="startDate"  onChange={handleChange}></input>
    <textarea name="smsText" onChange={handleChange}></textarea>

        
      </div>
    </form>

    <button onClick={submitMessage}>Submit</button>
  
    </div>
      }
    </div>
    
  )
}

export default Sms