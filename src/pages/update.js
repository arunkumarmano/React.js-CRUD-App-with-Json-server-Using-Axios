import React,{useState,useEffect} from "react";
import { useParams ,useNavigate,Link} from "react-router-dom";
import axios from "axios";
const Update = () => {
  const [add, setAdd] = useState({
    id:"",
    name: "",
    age: "",
  });
  const {id}=useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3030/users/'+id)
      .then(res => setAdd(res.data))
      .catch(err => console.log(err));
  }, []);
    

  const onsubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3030/users/"+id ,add).then((res) => {
      alert("successfully Updated");
      navigate("/");
    });
  };
  return (
    <div>
      <div className="d-flex container  vh-100  justify-content-center align-items-center">
        <div className="bg-secondary w-70 p-5">
        
          <form onSubmit={onsubmit}>
          <label>Id:</label>
            <input
              type="text"
              className="form-control"
             value={add.id} onChange={(e) => setAdd({ ...add, id: e.target.value })}
            />
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
             value={add.name} onChange={(e) => setAdd({ ...add, name: e.target.value })}
            />
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              value={add.age}     onChange={(e) => setAdd({ ...add, age: e.target.value })}
            />
            <button className="btn btn-primary mt-3 me-2">Update</button>
            <Link className="btn btn-info mt-3" to={'/'}>
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
