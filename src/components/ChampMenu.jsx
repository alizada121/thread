import React,{useState,useEffect,useRef} from 'react'
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import "./styling.css"

function ChampMenu() {
    const message = useSelector((item) => item.message);
    const [value,setValue]=useState()
    const [type1,setType1]=useState()
    const [filtered,setFiltered]=useState([])
    const [filter,setFilter]=useState(false)
    const draftRef=useRef()
    const editRef=useRef()
    const viewRef=useRef()
    
// console.log(message.draft)
// const [messageDetails,setMessageDetails]=useState([])


useEffect(()=>{
  if(message.draft==true){
      draftRef.current.style.display="block"
      editRef.current.style.display="block"
      viewRef.current.style.display="none"
      console.log("girdi")


  }else{
    draftRef.current.style.display="none"
    editRef.current.style.display="none"
    viewRef.current.style.display="block"

    console.log("girdi")
  }

    if(message.mail){
      setType1("mail")
    }else{
      setType1("sms")
    }
},[])

const searchValue = (e) => {
  setValue(e.target.value)
 
}

useEffect(() => {

    let result=[]
   
    result=message.filter((e) => e.name?.toLocaleLowerCase()==value?.toLocaleLowerCase())
   setFiltered(result)

   if(value?.length==0){
    setFilter(false)
  }
  
}, [value])

const search=()=>{
 if(filtered.length>0){
  setFilter(true)
 }else{
  setFilter(false)
   
 }

 
}
  return (
    <div className='messagesTable'>
        <div className='tools'>
        <Link to="/message">
        <div className='addButton'>
          Add new thread
        </div>
        </Link>

        <div className='search'>
      <input placeholder="Search" type="text" className="searchInput" value={value} onChange={searchValue}>
      </input>
      <button onClick={search}>search</button>
      </div>

      
</div>
{filter?
   <table>
   <tr>
     <th>Name</th>
     <th>Type</th> 
     <th>Date</th>
     <th>Action</th>
   </tr>

    {filtered && filtered.map((item)=>(
     <tr>
         <td className="nameCol"><span  ref={draftRef}>draft</span> <div>{item.name}</div></td>
         <td>{type1}</td>    
         <td >{item.startDate}</td>
         <Link to="/edit">
         <td onClick={()=>{localStorage.setItem("id",item.id)}}><div ref={editRef}>edit</div> </td>

         </Link>
         <Link to="/view">
         <td onClick={()=>{localStorage.setItem("idView",item.id)}}><div ref={viewRef}>view</div> </td>

         </Link>

     </tr>
 ))} 

 </table>

:

<table>
<tr>
  <th>Name</th>
  <th>Type</th> 
  <th>Date</th>
  <th>Action</th>
</tr>

 {message && message.map((item)=>(
  <tr>
      <td className="nameCol"><span  ref={draftRef}>draft</span> <div>{item.name}</div></td>
      <td>{type1}</td>    
      <td >{item.startDate}</td>
      <Link to="/edit">
      <td  ref={editRef} onClick={()=>{localStorage.setItem("id",item.id)}}><div>edit</div></td>
      </Link>

      <Link to="/view">
         <td onClick={()=>{localStorage.setItem("idView",item.id)}}><div ref={viewRef}>view</div> </td>

         </Link>
  </tr>
))} 

</table>
}


       

    </div>
  )
}

export default ChampMenu