import footer from "../footer.js"
import openMenu, { closeMenu } from "../menu.js"
import nav from "../nav.js"
import sidebar from "../sidebar.js"
import color, { fontColor, localTheme } from "../Surahs/bg.js"
import { fontBolder, fontSizer } from "../Surahs/text.js"
import accordion from "./accordion.js"
import tafseer from "./tafseer.js"

    let url , v , c , n = ""
    url  = window.location.href.split("=")
    n = url[3]
    v = url[2].split("&")[0]
    c = url[1].split("&")[0]
    const fetchAyaHeader = async ()=>{
        const aya = await fetch(`https://api.alquran.cloud/v1/ayah/${n}`)
        const {data} = await aya.json()
        document.querySelector(".container .aya-txt").innerHTML += ayaHeader(data.text)
    }
    fetchAyaHeader()
    const fetchtafseer = async (c ,v)=>{
        try {
            let url = `https://api.quran.com/api/v3/chapters/${c}/verses/${v}/tafsirs`
            const data = await fetch(url)
            const {tafsirs} = await data.json()
            return tafsirs
        } catch (error) {
            console.log(error.message);
        }
    }
    
    const fetchAya = async ()=>{
        const tafseerData = await fetchtafseer(c,v)
        if(tafseerData){
            document.querySelector("#nav").innerHTML += nav()
            document.querySelector("#nav").style.top = "0"
            document.querySelector("#footer").innerHTML +=footer()
            document.getElementById("sidebar").innerHTML += sidebar()
            document.querySelector(".tafseer-container").innerHTML += tafseer(tafseerData)
            accordion()
            openMenu()
            closeMenu()
            localTheme()
            color()
            fontColor()
            fontBolder()
            fontSizer()
            
        }
        else{
            document.querySelector(".tafseer-container").innerHTML += err()
        }
    }
    export default fetchAya
    const err = ()=>{
        setInterval(() => {
                window.location.href ="/"
        }, 3000)

        return(`
        <center dir="rtl">
        <h1>الصفحة غير متاحة :(</h1>
            <p>سيتم توجيهك للصفحة الرئيسية خلال 5 ثواني</p>
            <a href="/">او اضغط هنا
            </a>
            </center>
            <script>
          `)

    }

    const ayaHeader = (txt)=>{
        if(txt.search("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ") >= 0){
           txt = txt.substr(39)
        }      
        return(`
       
            <h2>
                <center> 
                    ${txt}
                </center>
            </h2>
    `)
    }