import React, { Component } from "react";
// import axios from 'axios';
// import {useEffect,useState}from 'react';
// import React from 'react';
import UserService from '../services/user-service'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }
 
  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },



  // componentDidMount() {
  //   UserService.getPublicContent()
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           content: result
  //         });
  //       },

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
      <div className='container'>
             <div className='py-4'>
             <table className="table border shadow">
                <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Password</th>
                <th scope="col">Email</th>
                  <th scope="col">UserName</th>
                 </tr>
              </thead>
              <tbody>
      
                 {
                this.state.content.map((Content,index)=>{
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{Content.user_name}</td>
                <td>{Content.passwd}</td>
                <td>{Content.email}</td>
                <td>{Content.username}</td>
                </tr>
                
            })
            }
              </tbody>
           </table>
             </div>
          
        </div>

      

     

      // <div className="container">
      //   <header className="jumbotron">
      //     {/* <p>{this.state.content}</p> */}
      //     {/* <div>{this.state.content.map(content =><div>{this.state.content.UserService}</div>)}</div> */}
      //   </header>
      // </div>
    );
  }
 }


{/* function Home() { */}
{/* //   // const cors =require('cors');
//   const [users,setUsers]=useState([])

//   useEffect(()=>{ */}
{/* //       loadUsers();
//   }, []);
//   // app.use(cors({ */}
{/* //   //     origin:"http://localhost:8081/users"
//   // }))
  
//   const loadUsers = async () => { */}
{/* //       const result = await axios.get("http://localhost:8081/users").then(
//           Response=>{ */}
{/* //               console.log(Response.data);
//           }
//       ).catch(console.error('error'));
//    setUsers(result.data);
//   };

// return (
//   <div className='container'>
//       <div className='py-4'>
//       <table className="table border shadow">
//         <thead>
//           <tr>
//           <th scope="col">ID</th>
//           <th scope="col">Name</th>
//           <th scope="col">Password</th>
//           <th scope="col">Email</th>
//           <th scope="col">UserName</th>
//           </tr>
//         </thead>
//         <tbody>

//           { */}
{/* //           users.map((user,index)=>{ */}
{/* //           <tr>
//           <th scope="row" key={index}>{index+1}</th>
//           <td>{user.user_name}</td>
//           <td>{user.passwd}</td>
//           <td>{user.email}</td>
//           <td>{user.username}</td>
//           </tr>
          
//       })
//       }
//         </tbody>
//       </table>
//       </div>
    
//   </div> */}
{/* // )
// }

// export default Home */}