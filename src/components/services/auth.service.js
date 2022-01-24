import axios from "axios";

const API_URL = "https://run.mocky.io/v3/1706a0bc-6025-4e7f-92e5-fd1480b0d2dc/user/register";

class AuthService {
  login(username, password) {
    return (axios
      .get(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
    )
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password, confirmPassword) {
    return (axios
      .get(API_URL + "signup", {
        username,
        password,
        confirmPassword
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
    )
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
