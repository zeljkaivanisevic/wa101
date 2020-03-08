import express from 'express';
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
const staticMiddleware = express.static('public')
app.use('/', staticMiddleware)
app.get('/', (req, res) => res.send('Prikaz datuma, vremena i vremenske prognoze<br><a href="http://localhost:3000/datum">Datum i vrijeme</a> <br><a href="http://localhost:3000/prognoza">Prognoza</a>'))
app.get('/datum', (req, res) => {
    let moment = require('moment');
    let vr = moment().format('DD/MM/YYYY HH:mm')
    res.json(vr)
})
app.get('/prognoza', (req, res) => {
    let p = ['sunčano', 'kišovito', 'oblačno']
    const random = p[Math.floor(Math.random() * p.length)];
    res.json(random)
})
app.listen(port, () => console.log(`Slušam na portu ${port}!`))

