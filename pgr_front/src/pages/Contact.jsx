import React from 'react';
import axios from 'axios';
import {useEffect,useState}from 'react';
// import {app} from 'react';

function Contact() {
    // const cors =require('cors');
    const [users,setUsers]=useState([])

    useEffect(()=>{
        loadUsers();
    }, []);
    // app.use(cors({
    //     origin:"http://localhost:8081/users"
    // }))
    
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/users").then(
            Response=>{
                console.log(Response.data);
            }
        );
     setUsers(result.data);
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>

            {
            users.map((user,index)=>{
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.user_name}</td>
            <td>{user.passwd}</td>
            <td>{user.email}</td>
            </tr>
            
        })
        }
          </tbody>
        </table>
        </div>
      
    </div>
  )
}

export default Contact
