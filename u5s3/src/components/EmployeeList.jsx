import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            <Link to={`/employees/${u.id}`}>
              <img className="employee_image" src={u.image} alt='avatar'/>
              <span className="employee_name">{u.employee_name}</span>
              <span className="employee_title">{u.title}</span>
            </Link>
          </div>
        )}
        
      </div>
    );
  };