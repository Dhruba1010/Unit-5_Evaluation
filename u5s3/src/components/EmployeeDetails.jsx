import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


export const EmployeeDetails = () => {
    const {id} = useParams();
    
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
      axios.get(`http://localhost:8080/employee/${id}`).then(({data})=> {
        setUserDetails(data);
      })
    },[])


    return (
      <div className="user_details">
        <img className="user_image" src={userDetails.image} alt='avatar'/>
        <h4 className="user_name">{userDetails.employee_name}</h4>
        <span className="user_salary">${userDetails.salary}</span>
        <span className="tasks">
            <li className="task">{userDetails.tasks}</li>
        </span>
        Status: <b className="status">{userDetails.status}</b>
        Title: <b className="title">{userDetails.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    );
  };