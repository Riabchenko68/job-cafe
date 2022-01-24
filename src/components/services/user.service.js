import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://run.mocky.io/v3/1706a0bc-6025-4e7f-92e5-fd1480b0d2dc/user/register';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new UserService();