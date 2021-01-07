const surah = (  name ,  ayahs , number )=>{

   document.title = ` المصحف |  ${name} ` 
   let ayas = "" ,
   bsm ="" ,
   aaya = ""
   let bsmState = false;
   if( number !== 9){
    bsmState = !bsmState
    bsm = ayahs[0].text.substr(0 , 39)
    aaya = ayahs[0].text.replace(bsm , "")
    ayahs[0].text = aaya
   }
   
   ayahs.map((a , i)=>{
            ayas+= `<div class="aya-line" >
                      <a href="/aya.html?ch=${number}&v=${a.numberInSurah}&n=${a.number}" data-font data-bold >${a.text}</a>
                      <span class="number"  data-theme>${i+1}</span>
                    </div>
               `
           })
   return(   
   `
        <div class="surah">
            <header class="surah__name" data-theme>
                    <center>
                        <h1 dir="rtl" >${name}</h1>
                    </center>
             </header>
             <div class="surah__body just">
                ${
                    (bsmState) ?  ( `<center>
                        <br />
                           <div class='bsm' data-font data-bold>${bsm}</div>
                        <br />
                    </center>`) : ""
                }
                ${ayas}
             </div>
        </div>
   `)}
export default surah   