import { useState, useEffect } from 'react';
import axios from 'axios';

export const EmployeeList = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8080/employee").then(({data}) => {
        setUser(data);
      });
    },[])
    return (
      <div className="list_container">
        {user.map(u =>
          <div className="employee_card">
            <img className="employee_image" src={u.image} alt='avatar'/>
            <span className="employee_name">{u.employee_name}</span>
            <span className="employee_title">{u.title}</span>
          </div>
        )}
        
      </div>
    );
  };