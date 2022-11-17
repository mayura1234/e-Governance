import React, { Component } from "react";
// import axios from 'axios';
// import {useEffect,useState}from 'react';
// import React from 'react';
import UserService from '../services/user-service'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }
 
  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
//       <div className='container'>
//              <div className='py-4'>
//              <table className="table border shadow">
//                 <thead>
//                   <tr>
//                   <th scope="col">ID</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Password</th>
//                 <th scope="col">Email</th>
//                   <th scope="col">UserName</th>
//                  </tr>
//               </thead>
//               <tbody>
      
//                  {
//                 this.state.content.map((Content,index)=>{
//                   return(
//                 <tr>
//                 <th scope="row" key={index}>{index+1}</th>
//                 <td>{Content.user_name}</td>
//                 <td>{Content.passwd}</td>
//                 <td>{Content.email}</td>
//                 <td>{Content.username}</td>
//                 </tr>
//                   )
                
//             })
//             }
//               </tbody>
//            </table>
//              </div>
//         </div>
//  );
// }
// }


     //UNWANTED   

      <div className="container">
        <header className="jumbotron">
          <p>{this.state.content}</p> 
          {/* <div>{this.state.content.map(content =><div>{this.state.content.UserService}</div>)}</div> */}
          <div> <h3>ABOUT CPGRAMS</h3>

Centralised Public Grievance Redress and Monitoring System (CPGRAMS) is an online platform available to the citizens 24x7 to lodge their grievances to the public authorities on any subject related to service delivery. It is a single portal connected to all the Ministries/Departments of Government of India and States. Every Ministry and States have role-based access to this system. CPGRAMS is also accessible to the citizens through standalone mobile application downloadable through Google Play store and mobile application integrated with UMANG.

The status of the grievance filed in CPGRAMS can be tracked with the unique registration ID provided at the time of registration of the complainant. CPGRAMS also provides appeal facility to the citizens if they are not satisfied with the resolution by the Grievance Officer. After closure of grievance if the complainant is not satisfied with the resolution, he/she can provide feedback. If the rating is ‘Poor’ the option to file an appeal is enabled. The status of the Appeal can also be tracked by the petitioner with the grievance registration number. 
<p>Note : If you have not got a satifactory redress of your grievance within a reasonable period of time,relating to Ministries/Departments and Organisations under the purview of Directorate of Public Grievances(DPG), Cabinet Secretariat, GOI, you may seek help of DPG in resolution. Please click here for details. </p>
    <br /></div>
        </header>
      </div>
    );
  }
}