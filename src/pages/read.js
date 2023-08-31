import React,{useState} from "react";
import { useParams,useNavigate, Link } from "react-router-dom";
import axios from "axios";
const Read=()=>{
    const {id}=useParams();
  const navigate =useNavigate();
   const [read,setRead]=useState([])

    axios.get('http://localhost:3030/users/'+id)
    .then(res=>(
     setRead(res.data)   
    ))
    .catch(err=>{
        console.log(err);
    })
return(
    <div className="container w-50 d-flex justify-content-center align-items-center vh-100">
 <div className=" container bg-secondary  justify-content-center align-items-center p-3"> 
 <div> <h4> <label>Id:</label>
 {read.id}</h4></div>

 <div><h4><label>Name:</label>
 {read.name}</h4></div> 

 <div>  <h4> <label>Age:</label>
{read.age}</h4></div>
   <Link to={'/'} className="btn btn-info mt-2 mb-2">Back</Link>
 </div>  
    </div>
)
}

export default Read;