// import React ,{useEffect,useState}from 'react'
// import axios from 'axios';

// export default function Home() {

//     const [users,setUsers]=useState([])

//     useEffect(()=>{
//         loadUsers();
//     }, []);

//     const loadUsers = async () => {
//         const result = await axios.get("http://localhost:8081/users");
//         setUsers(result.data);
//     };
//       return (
//     <div className='container'>
//         <div className='py-4'>
//         <table className="table border shadow">
//           <thead>
//             <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Name</th>
//             <th scope="col">Password</th>
//             <th scope="col">Email</th>
//             </tr>
//           </thead>
//           <tbody>

//             {
//             users.map((user,index)=>{
//             <tr>
//             <th scope="row" key={index}>{index+1}</th>
//             <td>{user.user_name}</td>
//             <td>{user.passwd}</td>
//             <td>{user.email}</td>
//             </tr>
            
//         })
//         }
//           </tbody>
//         </table>
//         </div>
      
//     </div>
//   )
// }


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
// import Mic from '../Images/Mic.jpg';
// import './home.css';
// import Header from'../layouts/header';
// import { Route,Routes} from 'react-router-dom';
// import Sidebar from '../sidebar';
// import Signup from './Signup';
import Header from '../layout/Navbar';
// import Login from './login';



const Hm=props=> { 
  return (
    <Container>
      {/* <Sidebar />  */}
      <Header />
      <div className='container'>
            {/* <figure className='position-relative'> */}
           {/* <img src={Mic} alt="centered-image" className='img-fluid' />  */}
          {/* </figure> */}
          
          <h3>ABOUT CPGRAMS</h3>

Centralised Public Grievance Redress and Monitoring System (CPGRAMS) is an online platform available to the citizens 24x7 to lodge their grievances to the public authorities on any subject related to service delivery. It is a single portal connected to all the Ministries/Departments of Government of India and States. Every Ministry and States have role-based access to this system. CPGRAMS is also accessible to the citizens through standalone mobile application downloadable through Google Play store and mobile application integrated with UMANG.

The status of the grievance filed in CPGRAMS can be tracked with the unique registration ID provided at the time of registration of the complainant. CPGRAMS also provides appeal facility to the citizens if they are not satisfied with the resolution by the Grievance Officer. After closure of grievance if the complainant is not satisfied with the resolution, he/she can provide feedback. If the rating is ‘Poor’ the option to file an appeal is enabled. The status of the Appeal can also be tracked by the petitioner with the grievance registration number. 
<p>Note : If you have not got a satifactory redress of your grievance within a reasonable period of time,relating to Ministries/Departments and Organisations under the purview of Directorate of Public Grievances(DPG), Cabinet Secretariat, GOI, you may seek help of DPG in resolution. Please click here for details. </p>
    <br />
    {/* <switch><Routes>
            <Route path="/" exact component={home} />
            {/* <Route path="/sidebar" exact component={sidebar} /> */}
            {/* <Route path="/contact" exact component={contact} /> */}
            {/* <Route path="/DEPT/Garbage" exact component={Garbage} /> */}
            {/* <Route path="/DEPT/construct"exact component={construct} /> */}
            {/* <Route path="/DEPT/KWA" exact component={KWA} /> */}
            {/* <Route path="/help" exact component={help} /> */}
            {/* <Route path="/Login" exact component={Login} />
            <Route path="/Signup" exact component={Signup} />
            {/* <Route path="/profile" exact component={profile} /> */}
            {/* <Route path="/settings" exact component={settings} /> */}
            {/* </Routes>
      </switch> */} 

    </div>
     </Container>
  )
}

export default Hm
