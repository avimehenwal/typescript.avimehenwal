
export class User {
  email: any;
  hireable?: boolean;
  site_admin?: boolean;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  id?: number;
  login?: string;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  bio?: string;
  updated_at?: string;
  created_at?: string;

  constructor(JSONResponse: Object) {
    Object.entries(JSONResponse).forEach(([key, value]) => {
      console.log('KEY: %s \t\t\t\t\t VALUE: %s', key, value);
      // @ts-ignore
      this[key] = value
    });
  }
}

export let JSONResponse = {
  login: 'avimehenwal',
  node_id: 'MDQ6VXNlcjM2MjQwNTk=',
  avatar_url: 'https://avatars3.githubusercontent.com/u/3624059?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/avimehenwal',
  html_url: 'https://github.com/avimehenwal',
  followers_url: 'https://api.github.com/users/avimehenwal/followers',
  following_url: 'https://api.github.com/users/avimehenwal/following{/other_user}',
  gists_url: 'https://api.github.com/users/avimehenwal/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/avimehenwal/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/avimehenwal/subscriptions',
  organizations_url: 'https://api.github.com/users/avimehenwal/orgs',
  repos_url: 'https://api.github.com/users/avimehenwal/repos',
  events_url: 'https://api.github.com/users/avimehenwal/events{/privacy}',
  received_events_url: 'https://api.github.com/users/avimehenwal/received_events',
  name: 'Avi Mehenwal',
  company: 'I am looking for a job',
  blog: 'https://avimehenwal.in/',
  location: 'Paderborn, Germany',
  bio: 'Have been using Vim for about 5 years now, mostly because I can\'t figure out how to exit it.',
  created_at: '2013-02-18T08:03:32Z',
  updated_at: '2020-05-06T08:32:11Z',
  type: 'User',
  site_admin: false,
  email: null,
  hireable: true,
  id: 3624059,
  public_repos: 74,
  public_gists: 3,
  followers: 12,
  following: 67,
}
