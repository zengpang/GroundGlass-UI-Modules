class Tooltip{
    constructor($root)
    {
         this.$root=$root;
         this.$root.tooltip=this;
         this.align=$root.dataset.align;
         this.text=$root.dataset.text;
         this.render();
         this.setRoot();
         this.show();
    }
    render()
    {
        let $tooltip=document.createElement(`div`);
        $tooltip.classList.add(`toolTip`);
        $tooltip.classList.add(this.align);
        $tooltip.innerText=this.text;
        this.$tooltip=$tooltip;
        this.$root.appendChild($tooltip);
    }
    setRoot()
    {
      this.$root.showTooltip=this.show.bind(this);
      this.$root.hideTooltip=this.hide.bind(this);
    }
    show()
    {
        this.$tooltip.classList.add(`show`);
    }
    hide()
    {
        this.$tooltip.classList.remove(`show`);
    }
}
class TooltipBar {
    constructor($container) {
        this.$container = $container;
        this.$$tooltipBtn = $container.querySelectorAll(`.tooltipBtn`);
        this.bind();
    }
    bind() {
        this.$$tooltipBtn.forEach(index => {
            index.onmouseenter = (event) => {
                this.$$tooltipBtn.forEach(index => { index.style.background = `#20c99f00`; });
                index.style.background = `#20c99f`;
                if(index.tooltip)
                {
                    index.showTooltip();
                }
                else
                {
                    new Tooltip(index);
                }
            };
            index.onmouseleave=(event)=>{
                index.style.background = `#20c99f00`;
                index.hideTooltip();
            };
        });
    }
}
$controlContainers.forEach(($controlContainer) => {
    isSupport ? $controlContainer.classList.add(`GroundGlassUnCB`) : $controlContainer.classList.add(`GroundGlassCB`);
    new TooltipBar($controlContainer);
});
