import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is ready')
})

const jokes = [
  {
    id: 1,
    title: "Backend Developer’s Diet",
    content: "I started a Node.js diet… I only consume async and await results."
  },
  {
    id: 2,
    title: "Frontend vs Backend",
    content: "Frontend dev: 'It works on my screen.' Backend dev: 'It works on my server.' DevOps: 'It works on my machine.'"
  },
  {
    id: 3,
    title: "JavaScript Confusion",
    content: "Why does JavaScript developer wear glasses? Because they don’t C#."
  },
  {
    id: 4,
    title: "Debugging Life",
    content: "I don’t have bugs in my code… just unexpected features."
  },
  {
    id: 5,
    title: "Programmer’s Relationship",
    content: "My code and I are in a long-term relationship… it has too many issues but I’m still committed."
  }
]

app.get('/api/jokes', (req, res) => {
  res.json(jokes)   // better than res.send for APIs
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
