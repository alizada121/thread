import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';

function View() {
    const message = useSelector((item) => item.message);
    const [data,setData]=useState([])
    
    useEffect(()=>{
        const filterId=localStorage.getItem("idView")
        setData(message.filter((e) => e.id==filterId));
        console.log(data)

    },[])
    

  return (
    <div>
      {data &&
                  data.map((item) => (
                    <div >
                     <p> name:{item.name}</p>
                     <p>from:{item.from}</p>
                      <p>to:{item.to}</p>
                    </div>
                  ))}

    </div>
  )
}

export default View