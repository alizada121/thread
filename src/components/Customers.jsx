import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AddReceiver } from "../redux/users";
import { useDispatch } from "react-redux";

function Customoers() {
  const [names, setNames] = useState([]);
  const [receiverName, setReceiverName] = useState([]);
  const { receiver } = useSelector((item) => item.users);
  const [data,setData]=useState()
  localStorage.setItem("receiver", JSON.stringify(receiver));
  const dispatch = useDispatch();
  
 
  const handleChange = (e) => {
    setReceiverName(e.target.value);
  };

  const addCustomer = () => {
    setNames((current) => [...current, receiverName]);
    setNames(receiverName);
    console.log(names);
    dispatch(AddReceiver(receiverName));
  };

  useEffect(()=>{
    setData(receiver)
  },[names])

  return (
    <div>
      {data &&
                  data.map((item) => (
                    <div className="selected-item">
                      {item}
                    </div>
                  ))}
      <input type="text" onChange={handleChange}></input>
      <button onClick={addCustomer}>Add</button>
    </div>
  );
}

export default Customoers;
