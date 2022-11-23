// import React from 'react';
// import {useState} from 'react';
// import axios from 'axios';
// import UserService from './services/user-service';

// function AddCom() {
//   const url = "http://localhost:8081/api/test/AddCom"
//   const [data,setData] = useState({
//     descri: "",
//     date: "",
//     img:"",
//     loc:""
//   })

//   function submit(e) {
//     e.preventDefault();
//     axios.post(url,
//       {
//         descri:data.descri,
//         date:data.date,
//         img:data.img,
//         loc:data.loc
//       })
//       .then(res =>{
//         console.log(res.data)
//       })
//   }

//   function handle(e){
//     const newdata ={ ...data }
//     newdata[e.target.id]=e.target.value
//     setData(newdata)
//     console.log(newdata)
//   }





// export default class AddCom extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       conts: []
//     };
//   }
// }
//   componentDidMount() {
//     UserService.postAddCom().then(
//       response => {
//         this.setState({
//           conts: response.data
//         });
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString()
//         });

//         if (error.response && error.response.status === 401) {
//           EventBus.dispatch("logout");
//         }
//       }
//     );
//     } 
//   function AddCom() {
//       const url = "http://localhost:8081/api/test/AddCom"
//       const [data,setData] = useState({
//         descri: "",
//         date: "",
//         img:"",
//         loc:""
//       })
    
//       function submit(e) {
//         e.preventDefault();
//         axios.post(url,
//           {
//             descri:data.descri,
//             date:data.date,
//             img:data.img,
//             loc:data.loc
//           })
//           .then(res =>{
//             console.log(res.data)
//           })
//       }
    
//       function handle(e){
//         const newdata ={ ...data }
//         newdata[e.target.id]=e.target.value
//         setData(newdata)
//         console.log(newdata)
//       }
//     } 
//   render() {
  
//     <div><br />
//         <form onSubmit={(e)=>submit(e)}>
//     <div className="row">
      
//       <div className="form-group col-12 mt-3">
//     <label for="eCom">Write Here</label>
//     <textarea className="form-control" id="descri" rows="3" onChange={(e)=>handle(e)} value={data.descri}></textarea>
//   </div><br />
//   <div className="form-group col-12 mt-3">
//         <input type="date" className="form-control" placeholder="Date" id="date" onChange={(e)=>handle(e)} value={data.date}/>
//       </div><br />
//       <div className="form-group col-12 mt-3">
//         <input type="text" className="form-control" placeholder="Image" id="img" onChange={(e)=>handle(e)} value={data.img}/>
//       </div><br />
//       <div className="form-group col-12 mt-3">
//         <input type="text" className="form-control" placeholder="Location" id="loc" onChange={(e)=>handle(e)} value={data.loc}/>
//       </div><br />
//     </div>
//     <div className="form-group col-12 mt-3">
//     <button type="submit" className="btn btn-primary mb-3">Submit</button>
//   </div><br />
//   </form> </div>
  
// }

// export default AddCom






import React, { Component } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";
// import './signup.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
// import Button  from "./node_modules/react-validation/button";
import CheckButton from "react-validation/build/button";

import AuthService from "./services/auth_usr";

// const required = value => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const email = value => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const vusername = value => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = value => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };

export default class AddCom extends Component {
  constructor(props) {
    super(props);
    this.handleComplaints = this.handleComplaints.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onChangeLoc = this.onChangeLoc.bind(this);

    this.state = {
     descri: "",
     date: "",
      img: "",
     loc: ""
      // message: ""
    };
  }

  onChangeDescription(e) {
    this.setState({
      descri: e.target.value
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  onChangeImg(e) {
    this.setState({
      img: e.target.value
    });
  }

  onChangeLoc(e) {
    this.setState({
      loc: e.target.value
    });
  }

  handleComplaints(e) {
    e.preventDefault();

    this.setState=({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.postAddCom(
        this.state.descri,
        this.state.date,
        this.state.img,
        this.state.loc
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <br />
        <center><h2>ADD Complaint</h2></center>
        <div className="card card-container">
          {/* <img */}
            {/* src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" */}
             {/* alt="profile-img" */}
             {/* className="profile-img-card" */}
           {/* /> */}

          <Form
            onSubmit={this.handleComplaints}
            ref={c => {
              this.form = c;
            }}
          >     
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2>SIGN UP</h2> <br />  */}
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="descri">Description</label>
                  <Input
                    type="text-area"
                    className="form-control"
                    name="descri"
                    value={this.state.descri}
                    onChange={this.onChangeDescription}
                    // validations={[required, vusername]}
                  />
                </div>
                          <br />
                <div className="form-group">
                  <label htmlFor="date">date</label>
                  <Input
                    type="date"
                    className="form-control"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChangeDate}
                    // validations={[required, email]}
                  />
                </div>
                          <br />
                <div className="form-group">
                  <label htmlFor="img">IMG</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="img"
                    value={this.state.img}
                    onChange={this.onChangeImg}
                    // validations={[required, vpassword]}
                  />  
                </div>
                            
                          <br />

                          <div className="form-group">
                  <label htmlFor="loc">Location</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="loc"
                    value={this.state.loc}
                    onChange={this.onChangeLoc}
                    
                  />
                  </div>
                  <br />

                <div className="form-group">
                  <button className="btn btn-success btn-block">Submit</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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

