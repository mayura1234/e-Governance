// import React, { useEffect,useState} from 'react';
import './login.css';
// import {Link,useNavigate} from 'react-router-dom';
// function Login()
// {

//     const [user_name,setName]=useState("");
//     const [passwd,setPasswd]=useState("");
//     const history= useNavigate();

//  useEffect(()=> {
//     if(localStorage.getItem('user')){
//         history.push("/add")
//     }
// },[])

//  async function login()
// {
//   console.warn(user_name,passwd)
//   let item={user_name,passwd};
//   let result= await fetch("http://localhost:8081/api/users",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json",
//         "Accept":"application/json"
//     },
//     body: JSON.stringify(item)

//   });
//   result= await result.json();
//   localStorage.setItem("user",JSON.stringify(result))
//   history.push("/add")

// }
//     return(
//         <div>
//             <center>
//             <div className="container-md">
//                 <form>
//                     <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGIN</h1>
//                     <div className="form-group">
//                         <input 
//                         type="text"
//                         className="form-control"
//                         placeholder="Username" 
//                         id="username"
//                         onChange={(e)=>setName(e.target.value)}
//                         required
//                         />
//                     </div>
//                     <br />
//                     <div className="form-group">
//                         <input 
//                         type="password"
//                         className="form-control"
//                         placeholder="Password" 
//                         id="password"
//                         onChange={(e)=>setPasswd(e.target.value)}
//                         required
//                         />
//                     </div>
//                     <br />
//                     <input type="submit" value="LOGIN" onClick={login}/><br />
                        
//                     <div className="check">
//                         <label>
//                             <input className="form-check-input" type="checkbox" />
//                             &nbsp; Remember me
//                             <br />
//                         </label>
//                     </div>
//                     <br />
//                     <div>
//                         Don't have an account ? <Link to='/signup'>Create it.</Link>
//                     </div>
//                     <br />
//                 </form>
//             </div>
//             </center>
//         </div>

//     )
// }

// export default Login


import React, { Component } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth_usr";

import { withRouter } from '../common/with-router';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
       This field is required...
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.router.navigate("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <center><h2>LOGIN</h2></center>
        <div className="card card-container">
          {/* <img */}
             {/* src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" */}
             {/* alt="profile-img" */}
             {/* className="profile-img-card" */}
           {/* /> */}

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div> <br />

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div> <br />
            
            <div className="form-group">
              <button
                className="btn btn-success btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
              
            </div>
            

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);