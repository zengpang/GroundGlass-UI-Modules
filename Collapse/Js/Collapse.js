
class Collapse{
    constructor($container)
    {
      this.$container=$container;
      this.$$arrows=$container.querySelectorAll(`.arrows`);
      this.$$itemContents=$container.querySelectorAll(`.itemContent`);
      this.init();
      this.bind();
    }
    init()
    {

    }
    bind()
    {
        this.$container.addEventListener("click", (event)=>{
              let clickBtn = event.path.find(index=>index.classList&&index.classList.contains(`collapseItem`));
              if(clickBtn)
              {
                this.$$arrows.forEach(index=>index.classList.remove(`btnunfold`));
                this.$$itemContents.forEach(index=>index.classList.remove(`unfold`));
                clickBtn.querySelector(`.arrows`).classList.add(`btnunfold`);
                clickBtn.querySelector(`.itemContent`).classList.add(`unfold`);
              }
        },false)
    }
    
}

$controlContainers.forEach(($controlContainer)=>{
    isSupport? $controlContainer.classList.add(`GroundGlassUnCB`):$controlContainer.classList.add(`GroundGlassCB`);
    new Collapse($controlContainer);
});
