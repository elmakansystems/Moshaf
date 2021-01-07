
const err = require( "./err.js" )
const showSurah  =require( "./surah.js")


const showAya = (s , a)=>{
    const [surah] = showSurah(s)
    const aya = surah.ayahs.filter(ay => ay.numberInSurah == a)
    if(aya.length > 0 ) return aya
    else return err()
}



module.exports = showAya