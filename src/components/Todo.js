
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Todo = () => {

    const [userData, setuserData] = useState([])
    const navigate = useNavigate();
   
  const callAboutPage = async () => {
  try {
    // const res = await fetch('/fetchalltodos', {
    //   method: "GET",
    //   headers:{
    //     Accept:"application/json",//for accepting token
    //     "Content-Type":"application/json"
    //   },
    //   credentials:"include"//for token
    // });

    const res = await fetch('https://todoapp-4ojt.onrender.com/fetchalltodos', {
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
    <div>
        {
            userData.map((e)=>{
                <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{e.action}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{e.activity}</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
            })
        }
        </div>
  )
}

export default Todo