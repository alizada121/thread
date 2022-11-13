import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { AddCustomer } from "../redux/users";
import { Link } from "react-router-dom";

function ToComponent() {
  const [item, setItem] = useState([]);
  const [newCustomer, setNewCustomer] = useState();
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState([]);
  const [data2, setData2] = useState();
  const dispatch = useDispatch();
  const { customer } = useSelector((item) => item.users);
  localStorage.setItem("customer", JSON.stringify(customer));
  const { receiver } = useSelector((item) => item.users);
  const options = ["Mesti", "Qmeter", "unknnown"];
  const [data, setData] = useState(receiver);



  const nameReceiver = (e) => {
    setNewCustomer(e.target.value);
    console.log(newCustomer);
  };

  function handleKeyPress(e) {
    if (e.key == "Enter") {
      dispatch(AddCustomer(newCustomer));
      console.log(customer);
      console.log("customer");
    }
  }

  const setTrue = () => {
    if (!opened) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  };

  const selectAll = () => {
    setItem(options);
  };

  const selectAll2 = () => {
    setItem(receiver);
  };

  let arr2 = [];
  arr2 = [...new Set(selected)];
  useEffect(() => {
    console.log(selected);
    setItem(arr2);
    localStorage.setItem("selected",item)
  }, [selected]);

  useEffect(() => {
    setData2(customer);
  }, [customer]);




  return (
    <div>
      <div className="dropdown">
        <div className="visible">
          <div className="all-selected">
            {item &&
              item.map((item) => (
                <div className="selected-item">
                  {console.log(item)}
                  {item}
                  
                </div>
              ))}


          </div>
          <input
            type="email"
            pattern=".+@globex\.com"
            onChange={nameReceiver}
            onKeyPress={(e) => handleKeyPress(e)}
          ></input>

          <div onClick={setTrue}>
            <span>open</span>
            
          </div>
        </div>
        <div className={!opened ? "invisible" : "options"}>
          <h4>customer</h4>
          <Link to="/customers">
            <h3>Add Receiver</h3>
          </Link>
          {data2 &&
            data2.map((item) => (
              <div
                onClick={() => setSelected((selected) => [...selected, item])}
              >
                {item}
              </div>
            ))}
            
          <h4>receiver</h4>
          {data &&
            data.map((item) => (
              <div
                onClick={() => setSelected((selected) => [...selected, item])}
              >
                {item}
              </div>
            ))}

          <h6 onClick={selectAll}>select all customers</h6>
          <h6 onClick={selectAll2}>select all receivers</h6>

         
        </div>
      </div>
    </div>
  );
}

export default ToComponent;
