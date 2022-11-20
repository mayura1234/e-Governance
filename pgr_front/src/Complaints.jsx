// import React from 'react'
// import {useEffect,useState}from 'react';
// import axios from 'axios';
// // import UserService from './services/user-service';
// function Complaints() {
//      // const cors =require('cors');
//      const [complaints,setComplaints]=useState([])

//      useEffect(()=>{
//          loadComplaints();
//      }, []);
//      // app.use(cors({
//      //     origin:"http://localhost:8081/users"
//      // }))
     
//      const loadComplaints = async () => {
//          const result = await axios.get("http://localhost:8081/api/test/").then(
//              Response=>{
//                  console.log(Response.data);
//              }
//          );
//       setComplaints(result.data);
//             }
//   return (
//     <div>
//       <div className='container'>
//              <div className='py-4'>
//               <h2>All Complaints</h2><br />
//              <table className="table border shadow">
//                 <thead>
//                   <tr>
//                   <th scope="col">ID</th>
//                   <th scope="col">descri</th>
//                   <th scope="col">date</th>
//                 <th scope="col">loct</th>
//                   <th scope="col">us_id</th>
//                  </tr>
//               </thead>
//               <tbody>
      
//                  {
//                 complaints.map((Contentss,index)=>{
//                   return(
//                    <tr>
//                 <th scope="row" key={index}>{index+1}</th>
//                 <td>{Contentss.descri}</td>
//                 <td>{Contentss.dte}</td>
//                 <td>{Contentss.loct}</td>
//                 <td>{Contentss.us_id}</td>
//                 </tr>
//                   )
                
//             })
//             }
//               </tbody>
//            </table>
//              </div>
          
//         </div>
//     </div>
//   )

//         }
// export default Complaints






import React, { Component } from "react";
// import axios from 'axios';
// import {useEffect,useState}from 'react';
import UserService from './services/user-service'
import EventBus from "./common/EventBus";

export default class Complaints extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conts: []
    };
  }

  componentDidMount() {
    UserService.getComplaints().then(
      response => {
        this.setState({
          conts: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {

    return (
      // <div className="container">
      //   <header className="jumbotron">
      //     <h3>{this.state.content}</h3>
      //   </header>
      // </div>

<div className='container'>
             <div className='py-4'>
              <h2>Complaints....</h2><br />
             <table className="table border shadow">
                <thead>
                  <tr>
                <th scope="col">ID</th>
                {/* <th scope="col">Password</th> */}
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">image</th>
                <th scope="col">Location</th>
                <th scope="col">User_id</th>
                 </tr>
              </thead>
              <tbody>
      
                 {
                this.state.conts.map((Contents,index)=>{
                  return(
                   <tr>
                <th scope="row" key={index}>{index+1}</th>
                
                <td>{Contents.descri}</td>
                <td>{Contents.dte}</td>
                <td>{Contents.imag}</td>
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

    );
  }

}



