import axios from 'axios';

export class githubApiService {

  async getUserInfo(userName: string) {
    let baseURL = 'https://api.github.com/users/'
    const response = await axios.get(baseURL + userName)
    console.log(response);
  }

  getRepos() {

  }
}