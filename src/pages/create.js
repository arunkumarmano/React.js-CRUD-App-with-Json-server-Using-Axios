import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Create = () => {


  const [add, setAdd] = useState({
    name: "",
    age: "",
  });


  const navigate = useNavigate();
  const onsubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3030/users/", add).then((res) => {
      alert("successfully created");
      navigate("/");
    });
  };

  
  return (
    <div className="d-flex container  vh-100  justify-content-center align-items-center">
      <div className="bg-secondary w-70 p-5">
        <form onSubmit={onsubmit}>
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAdd({ ...add, name: e.target.value })}
          />
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setAdd({ ...add, age: e.target.value })}
          />
          <button className=" btnn btn-primary mt-3 me-2">submit</button>
          <Link className="btn btn-info" to={"/"}>
            Back
          </Link>
        </form>{" "}
      </div>
    </div>
  );
};

export default Create;
