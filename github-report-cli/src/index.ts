import { githubApiService } from './githubApiService';
import { JSONResponse } from './User';


let github = new githubApiService();
github.getUserInfo('avimehenwal');
// console.log(githubApiService);
// console.log(JSONResponse);

