

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './layout/Navbar';
import Home from './pages/Home';
// import Rooutes from './Rooutes';
import Login from './pages/login';
import Signup from './pages/Signup';
// import Contact from './pages/Contact';
// import './App.css';
import { Routes, Route,Link } from 'react-router-dom';
// function App() {
//   return (
//     <div className="App">
//       {/* <Navbar /> */}
//       <Router>
//         <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/Login"  element={<Login/>} />
//         <Route path="/Signup" element={<Signup/>} />
//         <Route path="/Contact" element={<Contact />} />
//         </Routes>
//       {/* <Home /> */}
//       </Router>
//     </div>
//   );
// }

// export default App;



import Profile from './pages/profile_component';
import {Component} from 'react';
import AuthService from "./services/auth_usr"; 
import EventBus from "./common/EventBus";

import BoardGRO from './pages/BoardGRO';
import BoardRO from './pages/BoardRO';
import BoardUSER from './pages/BoardUSER';

import Complaints from './Complaints';
import AddCom from './AddCom';

// import GRO from './layout/GRO';
// import RO from './layout/RO';
// import USER from './layout/USER';


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showUSER: false,
      showRO: false,
      showGRO: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showUSER:user.roles.includes("ROLE_USER"),
        showRO: user.roles.includes("ROLE_RO"),
        showGRO: user.roles.includes("ROLE_GRO"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showRO: false,
      showGRO: false,
      showUSER: false,
      currentUser: undefined,
    });
  }

  render() {
    // const { currentUser, showModeratorBoard, showAdminBoard } = this.state;  
    const { currentUser, showRO, showGRO,showUSER } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          {/* <Link to={"/"} className="navbar-brand">
            PGR 
          </Link> */}
          <h2>PGR</h2>
          <div className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link> 
             </li> 

            {showRO && (
              <li className="nav-item">
                <Link to={"/Complaints"} className="nav-link">
                 Complaints
                </Link>
              </li>
            )}

            {showGRO && (
              <li className="nav-item">
                <Link to={"/USER"} className="nav-link">
                  Users
                </Link>
              </li>
            )}


            {showGRO && (
              <li className='nav-item'>
                <Link to={"/Complaints"} className="nav-link">
                  Complaints
                </Link>
              </li>
            )}


            {showUSER && (
              <li className='nav-item'>
                <Link to={"/AddCom"} className="nav-link">
                  ADD Complaint
                </Link>
                </li>
               
            )}



{/*         
            {currentUser && (
              <li className="nav-item">
                <Link to={"/USER"} className="nav-link">
                   Users
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {/* {currentUser.username} */}
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/Signup"} className="nav-link">
                  Sign Up
                </Link>
              </li>
              
            </div>
            
          )}
        </nav>

        <div className="container mt-3">
        
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/USER" element={<BoardUSER />} />
            <Route path="/RO" element={<BoardRO />} />
            <Route path="/GRO" element={<BoardGRO />} />
            <Route path="/" element={<Home/>} />
            <Route path="/Login"  element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path='/Complaints' element={<Complaints />} />
            <Route path="/AddCom" element={<AddCom/>} />

          </Routes>
         
        </div>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
