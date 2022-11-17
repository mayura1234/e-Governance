import React, { Component } from "react";

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
    return (
      // <div className="container">
      //   <header className="jumbotron">
      //     <h3>{this.state.content}</h3>
      //   </header>
      // </div>

<div className='container'>
             <div className='py-4'>
             <table className="table border shadow">
                <thead>
                  <tr>
                  <th scope="col">ID</th>
                  {/* <th scope="col">Name</th> */}
                  {/* <th scope="col">Password</th> */}
                <th scope="col">Email</th>
                  <th scope="col">UserName</th>
                 </tr>
              </thead>
              <tbody>
      
                 {
                this.state.contents.map((Contents,index)=>{
                  return(
                   <tr>
                <th scope="row" key={index}>{index+1}</th>
                {/* <td>{Content.user_name}</td> */}
                {/* <td>{Content.passwd}</td> */}
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
