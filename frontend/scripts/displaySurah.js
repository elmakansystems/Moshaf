import getSurah from "./fetchsurah.js";
import openMenu, { closeMenu as close }  from "./menu.js";
import sidebar from "./sidebar.js";
import surah from "./singleSurah.js";
import color, { fontColor, localTheme } from "./Surahs/bg.js";
import { fontBolder, fontSizer } from "./Surahs/text.js";

let quranContainer = document.querySelector(".quran-container")

const displaySurah = async () =>{
  const surahData = await getSurah()
  let { number , name , revelationType , ayahs} = surahData
  quranContainer.innerHTML += surah(  name  , ayahs , number )
  document.getElementById("sidebar").innerHTML += sidebar()
  fontSizer()
  fontBolder()
  localTheme()
  fontColor()
  color()
  openMenu()
  close()
}

export default displaySurah