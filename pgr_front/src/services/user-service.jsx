import axios from 'axios';
import authHeader from './auth_header';

const API_URL = 'http://localhost:8081/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'USER', { headers: authHeader() });
  }

  getROBoard() {
    return axios.get(API_URL + 'RO', { headers: authHeader() });
  }

  getGROBoard() {
    return axios.get(API_URL + 'GRO', { headers: authHeader() });
  }
  getComplaints(){
    return axios.get(API_URL + 'Complaints', { headers : authHeader() });
  }
  postAddCom(){
    return axios.post(API_URL + 'AddCom', {headers: authHeader() });
  }
}

export default new UserService();