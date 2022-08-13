const css = ($node, cssObj) => Object.assign($node.style, cssObj);
const Animation = {
    slide($from, $to, direction) {
        $from.style = ``;
        $to.style = ``;
        console.log(`slide`, arguments);
        css($from, {
            transform: `translateX(0)`,
          
            zIndex: 10
        });
        css($to, {
            transform: `translateX(${direction === `right` ? `-` : ``}100%)`,
        
            zIndex: 10
        });
        setTimeout(() => {
            css($from, {
                transform: `translateX(${direction === `left` ? `-` : ``}100%)`,
        
                transition: `all .4s`
            })
            css($to, {
                transform: `translateX(0)`,
                transition: `all .4s`
            })
        })
    },
    fade($from, $to) {
        $from.style = ``;
        $to.style = ``;
        css($from, {
            opacity: 1,
            zIndex: 10
        })
        css($to, {
            opacity: 0,
            zIndex: 9
        })
        setTimeout(() => {
            css($from, {
                opacity: 0,
                zIndex: 10,
                transition: `all .4s`
            })
            css($to, {
                opacity: 1,
                zIndex: 9,
                transition: `all .4s`
            })
        })
        setTimeout(() => {
            css($from, {
                zIndex: 9
            })
            css($to, {
                zIndex: 10
            })
        }, 400)
    },
    zoom($from, $to) {
        $from.style = ``;
        $to.style = ``;
        css($from, {
            transform: `scale(1)`,
            opacity: 1,
            zIndex: 10
        })
        css($to, {
            transform: `scale(10)`,
            opacity: 0,
            zIndex: 9
        })
        setTimeout(() => {
            css($from, {
                transform: `scale(10)`,
                opacity: 0,
                zIndex: 10,
                transition: `all .4s`
            })
            css($to, {
                opacity: 1,
                transform: `scale(1)`,
                zIndex: 9,
                transition: `all .4s`
            })
        })
        setTimeout(() => {
            css($from, {
                zIndex: 9,
            })
            css($to, {
                zIndex: 10
            })
        }, 400)
    }
}
class Carousel {
    constructor($root, animation) {
        this.$root = $root;
        this.$arrowpreBtn = in$(this.$root, `.arrows .arrowBtn.arrow-pre`);
        this.$arrownextBtn = in$(this.$root, `.arrows .arrowBtn.arrow-next`);
        this.$$indicators = in$$(this.$root, `.indicators>li`);
        this.$$carouseItem = in$$(this.$root, `.carouseItem`);
        this.animation = animation;
        this.bind();
    }
    bind() {
        this.$arrownextBtn.addEventListener(`click`, () => {
            let fromIndex = this.getIndex();
            let toIndex = this.getNextIndex();
            this.setPage(fromIndex, toIndex, `left`);
            this.setIndicator(toIndex);
        })
        this.$arrowpreBtn.addEventListener(`click`, () => {
            let fromIndex = this.getIndex();
            let toIndex = this.getPreIndex();
            this.setPage(fromIndex, toIndex, `right`);
            this.setIndicator(toIndex);
        });
        this.$$indicators.forEach($indicator => $indicator.onclick = (e) => {
            // let index = [...this.$$indicators].indexOf(e.target);
            // this.setIndicator(index);
            // this.setPage(index);
            let fromIndex=this.getIndex();
            let toIndex=[...this.$$indicators].indexOf(e.target);
            this.setIndicator(toIndex);
            let direction=fromIndex>toIndex?'right':'left';
            this.setPage(fromIndex,toIndex,direction);
        })

    }
    getIndex() {
        return [...this.$$indicators].indexOf(this.$root.querySelector(`.indicators .active`));
    }
    getPreIndex() {
        return (this.getIndex() - 1 + this.$$indicators.length) % this.$$indicators.length;
    }
    getNextIndex() {
        return (this.getIndex() + 1) % this.$$indicators.length;
    }
    setPage(fromIndex, toIndex, direction) {
        // this.$$carouseItem.forEach(index => {
        //     index.classList.remove(`show`);
        // });
        this.animation(this.$$carouseItem[fromIndex], this.$$carouseItem[toIndex], direction);
        // this.$$carouseItem.forEach(index => {
        //     index.classList.remove(`show`);
        // });
        // [...this.$$carouseItem][index].classList.add(`show`);
    }
    setIndicator(index) {
        this.$$indicators.forEach(index => {
            index.classList.remove(`active`);
        });
        [...this.$$indicators][index].classList.add(`active`);
    }
    setAnimation(animation) {
        this.animation = animation;
    }
}
// $controlContainers.forEach(($controlContainer) => {
//     isSupport ? $controlContainer.classList.add(`GroundGlassUnCB`) : $controlContainer.classList.add(`GroundGlassCB`);
//     new Carousel($controlContainer);
// });
let $controlContainer=[...$controlContainers][0];
isSupport ? $controlContainer.classList.add(`GroundGlassUnCB`) : $controlContainer.classList.add(`GroundGlassCB`);
let carousel=new Carousel($controlContainer,Animation.slide);
document.querySelector(`#animation-select`).onchange=function(){
    carousel.setAnimation(Animation[this.value]);
}