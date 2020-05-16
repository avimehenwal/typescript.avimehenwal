import axios from 'axios';
import { User } from './User'

export class githubApiService {

  async getUserInfo(userName: string) {
    let baseURL = 'https://api.github.com/users/'
    const response = await axios.get(baseURL + userName)
    let jsondata = response.data
    console.log(jsondata)
    let avi = new User(jsondata);
    console.log(avi);
  }

  getRepos() {

  }
}