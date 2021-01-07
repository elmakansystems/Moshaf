const sidebar = ()=>(
    `
        <aside>
            <div class="close-btn">
                <img src="../images/close.svg"/>
            </div>
            <div class='side-contianer'>
                <center>
                    <h3>
                        اعدادت الصفحة    
                    </h3>
                    <br/>
                </center>
                <div class='col'>
                    <div class="theme">
                        <div class="row">
                            <input id="color-theme" type="color" value="#0e4600"/>
                            <label dir="rtl"> اختر لون الموقع</label>
                        </div>
                    </div>
                </div>
                <br/>
                <div class='col'>
                    <div class="theme">
                        <div class="row">
                            <input id="color" type="color" value="#0e4600"/>
                            <label dir="rtl"> اختر لون الخط</label>
                        </div>
                    </div>
                </div>
                <div class='col'>
                    <div class='font-size'>
                        <div class="slider">
                            <p dir="rtl">
                                <div class="row" dir="rtl">
                                    <span>غير حجم الخط</span>
                                    <span p id="size-amount">16px</span>
                                </div>
                            </p>
                            <br />
                            <input type="range" value="16" min="10" max="64" id="font-size" >
                        </div>
                    </div>
                </div>
                <div class='col'>
                    <div class='font-bold'>
                        <div class="slider">
                            <p dir="rtl">
                                <div class="row" dir="rtl">
                                    <span>غير عرض الخط</span>
                                    <span p id="bold-amount">400</span>
                                </div>
                             </p>
                             <br />
                            <input type="range" value="400" min="400" max="900" step="100" id="bold-size" >
                         </div>
                    </div>
                </div>
            </div>
        </aside>
    `
)

export default sidebar