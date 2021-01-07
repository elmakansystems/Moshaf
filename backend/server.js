const  express = require ('express')
const  showAya = require ('./components/aya.js')
const  err = require ('./components/err.js')
const  showSurah = require ('./components/surah.js')
const  cors = require ("cors")
const app = express()

app.use(cors())

app.get('/' , (req, res)=>{
    res.send(err())
})
app.get('/api/quran/:surah' , (req, res )=>{
    res.send(showSurah(req.params.surah))
 })
app.get('/api/quran/:surah/:aya' , (req, res )=>{
    res.send(showAya( req.params.surah ,req.params.aya))

})

const PORT = 18120

app.listen(PORT , console.log(`app working on port ${PORT}`))


