import React, { Component } from "react";
// import axios from 'axios';
// import {useEffect,useState}from 'react';
import UserService from "../services/user-service";
import EventBus from "../common/EventBus";

export default class BoardUSER extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: []
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          contents: response.data
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




  // function BoardUSER() {
 
  //   const [content,setUsers]=useState([])

  //   useEffect(()=>{
  //       loadUsers();
  //   }, []);
   
    
  //   const loadUsers = async () => {
  //       const result = await axios.get("http://localhost:8081/api/test/").then(
  //           Response=>{
  //               console.log(Response.data);
  //           }
  //       );
  //    setUsers(result.data);
  //   };


    return (
      // <div className="container">
      //   <header className="jumbotron">
      //     <h3>{this.state.content}</h3>
      //   </header>
      // </div>

<div className='container'>
             <div className='py-4'>
              <h2>All the users....</h2><br />
             <table className="table border shadow">
                <thead>
                  <tr>
                  <th scope="col">ID</th>
                  {/* <th scope="col">Password</th> */}
                <th scope="col">Email</th>
                <th scope="col">Name</th>

                  {/* <th scope="col">UserName</th> */}
                 </tr>
              </thead>
              <tbody>
      
                 {
                this.state.contents.map((Contents,index)=>{
                  return(
                   <tr>
                <th scope="row" key={index}>{index+1}</th>
                {/* <td>{Contents.user_name}</td> */}
                {/* <td>{Contents.passwd}</td> */}
                <td>{Contents.email}</td>
                <td>{Contents.username}</td>
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

