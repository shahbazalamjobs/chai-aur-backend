import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express()
const port = process.env.PORT || 4000

const githubData = {
  "login": "shahbazalamjobs",
  "id": 125631878,
  "node_id": "U_kgDOB3z9hg",
  "avatar_url": "https://avatars.githubusercontent.com/u/125631878?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shahbazalamjobs",
  "html_url": "https://github.com/shahbazalamjobs",
  "followers_url": "https://api.github.com/users/shahbazalamjobs/followers",
  "following_url": "https://api.github.com/users/shahbazalamjobs/following{/other_user}",
  "gists_url": "https://api.github.com/users/shahbazalamjobs/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shahbazalamjobs/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shahbazalamjobs/subscriptions",
  "organizations_url": "https://api.github.com/users/shahbazalamjobs/orgs",
  "repos_url": "https://api.github.com/users/shahbazalamjobs/repos",
  "events_url": "https://api.github.com/users/shahbazalamjobs/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shahbazalamjobs/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shahbaz Alam",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "shahbazalamjobs",
  "public_repos": 79,
  "public_gists": 0,
  "followers": 5,
  "following": 24,
  "created_at": "2023-02-17T04:59:34Z",
  "updated_at": "2026-01-28T05:38:41Z"
}

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/twitter', (req, res) => {
    res.send("Twitted username : shahbazalamjobs")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})