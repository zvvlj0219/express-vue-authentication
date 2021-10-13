import axios from 'axios';

const url = 'user';

class authService {
  //login
  static login(email,password){
    console.log('authservice login')
    return axios.post(`${url}/login`,{
      email:email,
      password:password
    })
  }
  //register
  static register(email,username,password){
    console.log('authservice register')
    return axios.post(`${url}/register`,{
      email:email,
      username:username,
      password:password
    })
  }

  //access to posts
  static info(){
    return axios.get('/posts')
  }
}

export default authService;