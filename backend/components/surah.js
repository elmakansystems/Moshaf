const data  =  require ( "../source/quran.min.js")
const err =  require ( "./err.js")


const showSurah = (i)=>{
    let [quran] = data
    const surah = quran.data.surahs.filter( s => s.number == i)
    if(surah.length > 0) return surah
    else return err()
    
}



module.exports = showSurah