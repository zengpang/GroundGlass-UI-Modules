class tabContent {
    constructor(tabTitle, content) {
        this.tabTitle = tabTitle;
        this.content = content;
    }
  
}
function tabContentInit(tabTitleArray, contentArray, arrayindexs) {
    let array = new Array(arrayindexs).fill(``);
    for (let index = 0; index < 5; index++) {
        array[index] = new tabContent(tabTitleArray[index], contentArray[index]);
    }
    return array;
}
class Tabs {
    constructor($container) {
        this.$container = $container;
        this.$tabBar=$container.querySelector(`.tabBar`);
        this.$tabBtns=Array.from($container.querySelectorAll(`.tabBtn`));
        this.$tabContentCom  =$container.querySelector(`.tabContentText`);
        this.$tabbtnBg = $container.querySelector(`.tabBtnBg`);
        this.init();
        this.bind();
    }
    init(){
        this.tabContents = tabContentInit([`Done`, `in Progress`, `confirmed`, `failed`, `waiting`], [`内容1`, `内容2`, `内容3`, `内容4`, `内容5`], 5);
    }
    bind(){
        this.$tabBar.addEventListener("click", (e) => {
            let clickBtn = e.path.find(index => index.classList && index.classList.contains(`tabBtn`))
            if (clickBtn) {
                let tabContentText = this.tabContents.filter(keyIndex => keyIndex.tabTitle == clickBtn.innerText);
                this.$tabContentCom.innerText = tabContentText[0].content;
                this.$tabbtnBg.style.width = clickBtn.offsetWidth + `px`;
                this.$tabbtnBg.style.transform = `translateX(${clickBtn.offsetLeft - clickBtn.offsetWidth * 0.16}px)`;
            }
        }, false);
    }
}
$controlContainers.forEach(($controlContainer)=>{
    isSupport? $controlContainer.classList.add(`GroundGlassUnCB`):$controlContainer.classList.add(`GroundGlassCB`);
    new Tabs($controlContainer)
});









