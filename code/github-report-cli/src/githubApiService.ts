import axios from 'axios';
import { User } from './User'

export class githubApiService {

  async getUserInfo(userName: string) {
    let baseURL = 'https://api.github.com/users/' + userName
    const response = await axios.get(baseURL)
    let jsondata = response.data
    console.log(jsondata)
    let avi = new User(jsondata);
    console.log(avi);
  }

  async getRepos(userName: string) {
    let URL = 'https://api.github.com/users/' + userName + '/repos'
    const response = await axios.get(URL)
    let jsondata = response.data
    console.log(jsondata)
    console.log(typeof jsondata)
    console.log(typeof jsondata.length)
    console.log(jsondata.length)
  }
}