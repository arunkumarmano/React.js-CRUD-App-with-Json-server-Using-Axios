import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [post, setPost] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3030/users')
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, []);


  console.log(post)
  return (
    <div className="container">
    <h3>CRUD App using json </h3><div><Link to={"/Create"} className="btn btn-primary">Create+</Link></div>
      <table className="table mt-3  bg-secondary">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
         {
          post.map((p)=>(
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>
               <Link className="btn btn-info" to={`/update/${p.id}`}>Update</Link>
               <Link className="btn btn-primary ms-2" to={`/read/${p.id}`}>Read</Link>
                <button className="btn btn-danger ms-3 " onClick={e=>Ondelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))
         }
        </tbody>
      </table>
    </div>
  );

function Ondelete(id){
 
    const conform= window.confirm(" Would you want to delete")
     if(conform)
     {
      axios.delete("http://localhost:3030/users/"+id)
     .then(res=>{
      alert("Deleted succesfully");
    navigate('/')
     } )
     .catch(err=>{
      console.log(err)
     })
   
    }

  }
};

export default Home;
