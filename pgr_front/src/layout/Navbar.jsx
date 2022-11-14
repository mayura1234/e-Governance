// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//   <div className="container-fluid">
//     {/* <a classname="navbar-brand" href="#"> */}
//         Public Grievance Redressal
//     {/* <button
//     classname="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span> */}
//         {/* </button> */}
//         <button className="btn btn-outline-light">Add User</button>
//     </div>
//     </nav>
//     </div>
//   )
// }




import React from 'react'
//  import './header.css';
import { Link } from 'react-router-dom';

 const header=props=> {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
             <center> <br /><h3>Public Grievance Redressal</h3> </center>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
                {/* <span class="navbar-toggler-icon"></span> */}
            {/* </button> */}

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent" /> */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className='nav-link' to='/'>Home</Link>
              </li> 

              
              {/* <li className="nav-item active">
                <Link className="nav-link" to='/help'>Help</Link>
              </li> */}
              <li className="nav-item active">
                 <Link className="nav-link" to='/Login'>Login</Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to='/contact'>Contact</Link>
              </li>
              
              <li className="nav-item active">
                 <Link className="nav-link" to='/Signup'>Create Account</Link>
              </li>
      </ul>
      </nav>
 </div>

  )
}

export default header