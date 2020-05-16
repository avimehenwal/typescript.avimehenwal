import axios from 'axios'


export class githubApiService {
  getUserInfo(userName: string) {
    axios
      .get('https://api.github.com/users/' + userName)
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err))
  }

  getRepos() {

  }
}