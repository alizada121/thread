
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AddCustomer } from "../redux/users";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import Content from "./Content";
import {  AddMessage } from "../redux/message";
import { useDispatch } from "react-redux";
import ToComponent from "./ToComponent";
import ConfirmationModal from "./ConfirmationModal";


function EditThread() {
  const message = useSelector((item) => item.message);
  const [currentData,setCurrentData]=useState()
  useEffect(()=>{
    const filterId=localStorage.getItem("id")
    setCurrentData(message.filter((e) => e.id==filterId)[0]);
  },[])

  const [data,setData]=useState({
    name:"",
    from:"",
    customer:"",
    subject:"",
    template:"",
    startDate:""
  
  })

  const [modal,setModal]=useState(false)
  const dispatch = useDispatch();
  const navigate=useNavigate()








const handleChange = (e) => {
  const value = e.target.value;

  

  setData({
    ...currentData,
    [e.target.name]: value,
  });



};

const submitMessage=()=>{
  setModal(true)
  localStorage.setItem("message1",JSON.stringify(message))


}
    const goToCampaign=()=>{
        dispatch(
          AddMessage({
            name:data.name,
            from:data.from,
            to:data.to,
            template:data.template,
            subject:data.subject,
            text:data.text,
            draft:false,
            mail:true
      
        }));
        navigate('../', { replace: true })
      
      
      }
      
      const switchModal=()=>{
        dispatch(
          AddMessage({
            name:data.name,
            from:data.from,
            to:data.to,
            template:data.template,
            subject:data.subject,
            text:localStorage.getItem("message"),
            draft:true,
            mail:true
        }));
      
        navigate('../', { replace: true })
        
      
      }
  return (
    <div className="mail-general">
    {modal
    ?
    <div className="confirmationModal">
      <h1>Are you sure?</h1>
      <button onClick={goToCampaign}  >Yes</button>
      <button onClick={switchModal}>No</button>
  </div>
  :
  <div> <h1>Email Thread</h1>
  {message &&
  message.filter((e) => e.id==localStorage.getItem("id")).map((item)=>(
    <div>
       <form >
    <div className="col">
      <label>Thread name</label>
      <input name="name" required placeholder="Enter thread name" type="text" onChange={handleChange} defaultValue={item.name} ></input>
      <label>From</label>
      <input name="from" placeholder="name1 or name2" onChange={handleChange} value={item.from}></input>
      <label>Customer</label>
      <input name="customer" placeholder="customer" onChange={handleChange} value={item.customer}></input>
      <label>Subject</label>
      <input name="subject" placeholder="subject" onChange={handleChange} value={item.subject}></input>
    </div>

    <div className="col">
      <label>Template</label>
      <select name="template" onChange={handleChange}>
        <option value="template1">Template1</option>
        <option value="temaplate2">Temaplate2</option>
      </select>
      <ToComponent/>
      <textarea value={item.text||item.smsText}></textarea>

      <div></div>
      <label>Start sending</label>
      <input placeholder="Select Date" type="date" name="startDate"  onChange={handleChange} value={item.startDate}></input>
      
    </div>
  </form>

    </div>
    
   
  ))}
 
  <button type="submit" onClick={submitMessage}>Send</button></div>}
    
   
  </div>
  )
}

export default EditThread