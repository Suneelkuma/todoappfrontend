import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
const About = () => {
  const [userData, setuserData] = useState({})
  const navigate = useNavigate();
 
const callAboutPage = async () => {
try {
  // const res = await fetch('/about', {
  //   method: "GET",
  //   headers:{
  //     Accept:"application/json",//for accepting token
  //     "Content-Type":"application/json"
  //   },
  //   credentials:"include"//for token
  // });

  const res = await fetch('https://todoapp-4ojt.onrender.com/about', {
    method: "GET",
    headers:{
      Accept:"application/json",//for accepting token
      "Content-Type":"application/json"
    },
    credentials:"include"//for token
  });

    const data = await res.json();//data contains all the data of the user
    console.log(data);
 setuserData(data);
if (!res.status===200) {
  const error = new Error(res.error);
  throw error;
}

} catch (error) {
  console.log(error);
       navigate('/signin')
}
}
useEffect(() => {
callAboutPage();//cannot use async function inside useeffect
},[]);
  return (
    <div className='container mt-4 ml-7'>
    <form method='#' class="card" style={{width: "60%",height:"380px",margin:"10px 20px 0px 200px",color:"blue"}}>
  <div class="card-body">
  <h5 class="card-title">ID:{userData._id}</h5>
  <h5 class="card-title">Name:{userData.name}</h5>
    <h5 class="card-title">email:{userData.email}</h5>

    
    
  </div>
</form>
    </div>
  )
}

export default About
