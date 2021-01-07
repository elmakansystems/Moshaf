const tafseer = (data)=>{
    let resname = ``
     data.map(d=>{
       return resname+= `
       <div class="aya-tafseer">
        <header class="aya-header">
            <button data-theme>${d.resource_name}</button>
        </header>
        <div class="tafseer-body">
             <p data-font data-bold>${d.text}</p>
        </div>
       </div>
       `
    })
   return resname
}

export default tafseer
