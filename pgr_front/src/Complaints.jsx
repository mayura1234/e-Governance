import React from 'react'
import {useEffect,useState}from 'react';
import axios from 'axios';
function Complaints() {
     // const cors =require('cors');
     const [complaints,setComplaints]=useState([])

     useEffect(()=>{
         loadComplaints();
     }, []);
     // app.use(cors({
     //     origin:"http://localhost:8081/users"
     // }))
     
     const loadComplaints = async () => {
         const result = await axios.get("http://localhost:8081/complaints").then(
             Response=>{
                 console.log(Response.data);
             }
         );
      setComplaints(result.data);
            }
  return (
    <div>
      <div className='container'>
             <div className='py-4'>
              <h2>All Complaints</h2><br />
             <table className="table border shadow">
                <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Descri</th>
                  <th scope="col">date</th>
                <th scope="col">loct</th>
                  <th scope="col">us_id</th>
                 </tr>
              </thead>
              <tbody>
      
                 {
                complaints.map((Contents,index)=>{
                  return(
                   <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{Contents.descri}</td>
                <td>{Contents.dte}</td>
                <td>{Contents.loct}</td>
                <td>{Contents.us_id}</td>
                </tr>
                  )
                
            })
            }
              </tbody>
           </table>
             </div>
          
        </div>
    </div>
  )

        }
export default Complaints
