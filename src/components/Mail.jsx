import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AddCustomer } from "../redux/users";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import Content from "./Content";
import { AddMessage } from "../redux/message";
import { useDispatch } from "react-redux";
import ToComponent from "./ToComponent";
import ConfirmationModal from "./ConfirmationModal";

function Mail() {
 

  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState([]);
  const [modal,setModal]=useState(false)
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [message,setMessage]=useState({
    name:"",
    from:"",
    customer:"",
    subject:"",
    template:"",
    startDate:""

  })

const handleChange = (e) => {
  const value = e.target.value;
  setMessage({
    ...message,
    [e.target.name]: value,
  });

};

const submitMessage=()=>{
  setModal(true)
 

}

const goToCampaign=()=>{
  dispatch(
    AddMessage({
      name:message.name,
      from:message.from,
      to:message.to,
      template:message.template,
      subject:message.subject,
      text:localStorage.getItem('message')

  }));

  navigate('../champaign', { replace: true })
}

const switchModal=()=>{
  setModal(false)

}


  return (
    <div className="mail-general">
      {modal
      ?
      <div className="confirmationModal">
        <h1>Are you sure?</h1>
        <button onClick={goToCampaign} >Yes</button>
        <button onClick={switchModal}>Go back to form</button>
    </div>
    :
    <div> <h1>Email Thread</h1>
    <form >
      <div className="col">
        <label>Thread name</label>
        <input name="name" required placeholder="Enter thread name" type="text" onChange={handleChange} ></input>
        <label>From</label>
        <input name="from" placeholder="name1 or name2" onChange={handleChange}></input>
        <label>Customer</label>
        <input name="customer" placeholder="customer" onChange={handleChange}></input>
        <label>Subject</label>
        <input name="subject" placeholder="subject" onChange={handleChange}></input>
      </div>

      <div className="col">
        <label>Template</label>
        <select name="cars" id="cars" onChange={handleChange}>
          <option value="template1">Template1</option>
          <option value="temaplate2">Temaplate2</option>
        </select>
        <ToComponent/>

        <div></div>
        <label>Start sending</label>
        <input placeholder="Select Date" type="date" name="startDate"  onChange={handleChange}></input>
        
      </div>
    </form>

    <Content/>
    <button type="submit" onClick={submitMessage}>Send</button></div>}
      
     
    </div>
  );
}

export default Mail;
