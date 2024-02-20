
import express from 'express'
const app = express()

//Mock
const teams = [
  {id: 1, team: 'Brazil', group: 'G'},
  {id: 1, team: 'French', group: 'B'},
  {id: 1, team: 'USA', group: 'A'},
  {id: 1, team: 'Germany', group: 'E'}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/teams', (req, res) => {
  res.status(200).send(teams)
})

export default app


