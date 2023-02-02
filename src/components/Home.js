import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import CreateTodo from './CreateTodo';
import Todo from './Todo';
const Home = () => {
  const [userData, setuserData] = useState("");
  const [show,setShow]=useState(false)
  const navigate = useNavigate();
 
const callAboutPage = async () => {
try {
  // const res = await fetch('/about', {
  //   method: "GET",
  //   headers:{
  //     Accept:"application/json",//for accepting token
    
  //   },
  //   credentials:"include"//for token
  // });

  const res = await fetch('https://todoapp-4ojt.onrender.com/about', {
    method: "GET",
    headers:{
      Accept:"application/json",//for accepting token
    
    },
    credentials:"include"//for token
  });

    const data = await res.json();//data contains all the data of the user
    console.log(data);
 setuserData(data.name);
 setShow(true)


} catch (error) {
  console.log(error);
       navigate('/register')
}
}
useEffect(() => {
callAboutPage();//cannot use async function inside useeffect
},[]);
  return (
    <div className='container'>
      <div className='div1' style={{color:'white',textAlign:"center",marginTop:"240px"}}>
      <h1>WELCOME TO HOME</h1>
      {show?<h1>{userData}<Todo/></h1>:null}
      
      {/* <CreateTodo/> */}
      </div>
    
     

      
    </div>
  )
}

export default Home
