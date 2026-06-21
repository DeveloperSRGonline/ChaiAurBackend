require('dotenv').config()
const express = require('express');
const app = express();

const githubData = {
  "login": "DeveloperSRGonline",
  "id": 177343433,
  "node_id": "U_kgDOCpILyQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/177343433?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DeveloperSRGonline",
  "html_url": "https://github.com/DeveloperSRGonline",
  "followers_url": "https://api.github.com/users/DeveloperSRGonline/followers",
  "following_url": "https://api.github.com/users/DeveloperSRGonline/following{/other_user}",
  "gists_url": "https://api.github.com/users/DeveloperSRGonline/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DeveloperSRGonline/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DeveloperSRGonline/subscriptions",
  "organizations_url": "https://api.github.com/users/DeveloperSRGonline/orgs",
  "repos_url": "https://api.github.com/users/DeveloperSRGonline/repos",
  "events_url": "https://api.github.com/users/DeveloperSRGonline/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DeveloperSRGonline/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shivam Garade",
  "company": null,
  "blog": "https://portfolio-shivam-garade.vercel.app",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "From Nothing heading towards Something by failing more than most people try...",
  "twitter_username": "srgwebsquare",
  "public_repos": 77,
  "public_gists": 0,
  "followers": 2,
  "following": 7,
  "created_at": "2024-08-02T15:55:42Z",
  "updated_at": "2026-06-21T07:18:46Z"
}

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter',(req,res)=>{
    res.send('Welcome to twitter')
})

app.get('/github',(req,res) => {
  res.json(githubData)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});