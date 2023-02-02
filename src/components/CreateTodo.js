import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {
    const navigate=useNavigate();
    const [activity,setActivity]=useState("");
    const [status,setStatus]=useState("");
    const [action,setAction]=useState("");
    const handleLogin = async (e) => {
      e.preventDefault();
  
      const res = await fetch("/createTodo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activity, 
          status,
          action
        }),
      });
      const data = res.json();
      console.log(data);
  
      if (res.status === 422 || !data) {
        window.alert("Invalid Credentials");
      } else {
          // dispatch({type:"USER",payload:true})//type mtlb jo action perform karne jaa rahe hai..  payload mtlb extra information (all will be checked in Usereducer.js) from where we will change its state
        window.alert("Created successfully");
        navigate("/");
      }
    };
  return (
    <div className='container' style={{backgroundColor:"skyblue",margin:"20px 10px 20px 280px",width:"60%", border:"1px solid black"}}>
    <form className="row g-3">
    
<div className="row-md-2 my-4">
  <label htmlFor="email" className="form-label">Activity</label>
  <input value={activity} onChange={(e)=>setActivity(e.target.value)} type="text" name='email' className="form-control" id="email"/>
</div>


<div className="row-md-2 my-4">
  <label htmlFor="password" className="form-label">Status</label>
  <input value={status} onChange={(e)=>setStatus(e.target.value)} type="text" name='password' className="form-control" id="password"/>
</div>
<div className="row-md-2 my-4">
  <label htmlFor="password" className="form-label">Action</label>
  <input value={action} onChange={(e)=>setAction(e.target.value)} type="text" name='password' className="form-control" id="password"/>
</div>
<button type="submit" onClick={handleLogin} class="btn btn-primary">Submit</button>



</form>
  </div>
  )
}

export default CreateTodo