const HLTV = require('hltv-api').default
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    const news = await HLTV.getNews()
    res.json(news)
})

app.get('/results', async (req, res) => {
    const results = await HLTV.getResults()
    res.json(results)
})

app.get('/matches', async (req, res) => {
    const matches = await HLTV.getMatches()
    res.json(stats)
})

app.get('/:matchId(*)', async (req, res) => {
    const stats = await HLTV.getMatches(req.params.matchId)
    res.json(stats)
})

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})
