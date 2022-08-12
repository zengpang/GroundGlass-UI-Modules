$controlContainers.forEach(($controlContainer) => {
    isSupport ? $controlContainer.classList.add(`GroundGlassUnCB`) : $controlContainer.classList.add(`GroundGlassCB`);
});
let $arrowpreBtn = $(`.arrows .arrowBtn.arrow-pre`);
let $arrownextBtn = $(`.arrows .arrowBtn.arrow-next`);
let $$indicators = $$(`.indicators>li`);
let $$carouseItem = $$(`.carouseItem`);
let carouseItemIndex = 0;

console.log();
//上张按钮
$arrowpreBtn.addEventListener(`click`, () => {
    carouseItemIndex--;
    carouseItemIndex = carouseItemIndex < 0 ? ($$carouseItem.length - 1) : carouseItemIndex;
    $$carouseItem.forEach(index => {
        index.classList.remove(`show`);
    });
    $$indicators.forEach(index => {
        index.classList.remove(`active`);
    });
    [...$$indicators][carouseItemIndex].classList.add(`active`);
    [...$$carouseItem][carouseItemIndex].classList.add(`show`);
});
//下张按钮
$arrownextBtn.addEventListener(`click`, () => {
    carouseItemIndex++;
    carouseItemIndex = carouseItemIndex > ($$carouseItem.length - 1) ? 0 : carouseItemIndex;
    $$carouseItem.forEach(index => {
        index.classList.remove(`show`);
    });
    $$indicators.forEach(index => {
        index.classList.remove(`active`);
    });
    [...$$indicators][carouseItemIndex].classList.add(`active`);
    [...$$carouseItem][carouseItemIndex].classList.add(`show`);
})

class Carousel {
    constructor($root) {

    }
    bind() {

    }
    getIndex() {

    }
    getPreIndex() {

    }
    getNextIndex() {

    }
    setPage() {

    }
    setIndicator(index) {

    }
}
