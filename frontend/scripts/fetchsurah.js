import footer from "./footer.js";
import hide from "./loader.js";
import nav from "./nav.js";
const getSurah = async () => {
    let id = window.location.href.split("?")[1]
    let quranContainer = document.querySelector(".quran-container")
    try {
      const apiData = await fetch(`https://quran-api.moshaf.xyz/api/quran/${id}`);
      const [data]  = await apiData.json();     
      if(data){       
        hide()
          document.querySelector("#nav").innerHTML += nav()
          document.querySelector("#nav").style.top = "0"
          document.querySelector("#footer").innerHTML += footer()
        return data;
        }
    } catch (error) {
      hide()
      console.log(error.message);
      quranContainer.innerHTML += `<h1>البيانات غير صحيحة</h1> `
    }
  };

export default getSurah
