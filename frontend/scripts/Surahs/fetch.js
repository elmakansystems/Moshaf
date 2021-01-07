import hide from "../loader.js";
import nav from "../nav.js";
import surah from "./link.js"
import footer from "../footer.js"
import color, { fontColor, localTheme } from "./bg.js";
import openMenu, { closeMenu as close }  from "../menu.js";
import sidebar from "../sidebar.js";
import { fontBolder, fontSizer } from "./text.js";

const getData = async () => {
    const container = document.querySelector(".container");
    try {
        const apiData = await fetch("https://api.alquran.cloud/v1/surah");
        const { data } = await apiData.json();
        if(data){
        document.querySelector("#nav").innerHTML += nav()
        document.querySelector("#sidebar").innerHTML += sidebar()
        document.querySelector("#nav").style.top = "0"
        document.querySelector("#footer").innerHTML += footer()
        hide()
        data.map((d) => { return (container.innerHTML += surah(d.number, d.name));});
          openMenu()
          close()
          localTheme()
          color()
          fontColor()
          fontBolder()
          fontSizer()
          return data;
    }
  } catch (error) {
    console.log(error);
  }
};


export default getData