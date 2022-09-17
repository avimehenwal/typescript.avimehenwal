import { githubApiService } from './githubApiService';
import { JSONResponse } from './User';
import * as _ from 'lodash'
import chalk from 'chalk';


if (process.argv.length < 3) {
  console.log(chalk.red.bold('Kindly provide userName as argument!'));
} else {
  let username = process.argv[2]
  console.log(chalk.green.bold('Username: ', username));

  let github = new githubApiService();
  github.getUserInfo(username);
  // github.getRepos(username);

  // console.log(githubApiService);
  // console.log(JSONResponse);
}

