$controlContainers.forEach(($controlContainer) => {
    isSupport ? $controlContainer.classList.add(`GroundGlassUnCB`) : $controlContainer.classList.add(`GroundGlassCB`);
});

// let $DialogShade = $(`.DialogShade`);
// let $Dialog = $(`.Dialog`);
// isSupport ? $Dialog.classList.add(`GroundGlassUnCB`) : $Dialog.classList.add(`GroundGlassCB`);
// let isShowDialog = false;
// let $$DialogContent = $$(`.title,.content,.buttons`);
// let $$DialogBtns = $$(`.buttons button`);
// let $DialogCloseBtn = $(`.DialogCloseBtn`);
class Dialog {
    constructor($root,$DialogBtn, options = {}) {
        this.$root = $root;
        this.$DialogBtn = $DialogBtn;
        this.$DialogShade = in$(this.$root, `.DialogShade`);
        this.$Dialog = in$(this.$root, `.Dialog`);
        this.isShowDialog = false;
        this.$$DialogContent = in$$(this.$root, `.title,.content,.buttons`);
        this.$$DialogBtns = in$$(this.$root, `.buttons button`);
        this.$DialogCloseBtn = in$(this.$root, `.DialogCloseBtn`);
        this.options = options;
        this.onCancel = options.onCancel || function () {

        }
        this.onOk = options.onOk || function () {

        }
        this.init();
        this.bind();
    }
    init() {
        isSupport ? this.$Dialog.classList.add(`GroundGlassUnCB`) : $Dialog.classList.add(`GroundGlassCB`);
    }
    bind() {
        console.log(this.$DialogBtn);
        this.$DialogBtn.addEventListener(`click`, () => {
            this.$DialogBtn.classList.add(`show`);
            this.$DialogShade.classList.add(`show`);
            this.DialogShow(this.$Dialog);
            // this.$Dialog.style[`animation-play-state`] = `running`;
            this.isShowDialog = true;
        })

        this.$DialogBtn.addEventListener(`mouseleave`, () => {
            if (!this.isShowDialog) {
                this.$DialogBtn.classList.remove(`show`);
            }
        })
        this.$Dialog.addEventListener(`animationend`, () => {
            console.log(`播放结束`);
            if (this.isShowDialog) {
                this.$$DialogContent.forEach(index => index.classList.add(`show`));
            }
            else {
                this.$DialogShade.classList.remove(`show`);
                this.$DialogBtn.classList.remove(`show`);
            }

        })
        console.log(this.$$DialogBtns);
        //弹窗按钮点击事件
        this.$$DialogBtns.forEach(index => {
            index.addEventListener(`mouseenter`, () => {
                index.classList.add(`selected`);
            });
            index.addEventListener(`mouseleave`, () => {
                index.classList.remove(`selected`);
            });
            console.log(index.innerHTML);
            switch (index.innerHTML) {
                case `确定`: {
                    index.addEventListener(`click`, () => {
                        this.onOk();
                        this.DialogClose(this.$Dialog, this.$$DialogContent);

                    });
                } break;
                case `取消`: {
                    index.addEventListener(`click`, () => {
                        this.onCancel();
                        this.DialogClose(this.$Dialog, this.$$DialogContent);

                    });
                } break;
            }
        })
        //弹窗关闭按钮点击事件
        this.$DialogCloseBtn.addEventListener(`click`, () => {
            this.DialogClose(this.$Dialog, this.$$DialogContent);

        })
    }

    animSet($node, animName) {
        $node.style[`animation-name`] = animName;
    }
    animPlay($node, animStatue) {
        switch (animStatue) {
            case `播放`: {
                $node.style[`animation-play-state`] = `running`;
            }; break;
            default: {
                $node.style[`animation-play-state`] = `paused`;
            };
        }
    }
    DialogShow($node) {
        this.animSet($node, `DialogShow`);
        this.animPlay($node, `播放`);
    }
    DialogClose($node, $$nodeContent) {
        this.animSet($node, `DialogClose`);
        this.animPlay($node, `播放`);
        $$nodeContent.forEach(index => index.classList.remove(`show`));
        this.isShowDialog = false;
    }

}
let $DialogBtn = $(`.DialogBtn`);
let dialog= new Dialog(document,$DialogBtn, {
    onOk() {
      console.log(`点击了确定键`)
    },
    onCancel() {
      console.log(`点击了取消键`)
    }
});

// function animSet($node, animName) {
//     $node.style[`animation-name`] = animName;
// }
// function animPlay($node, animStatue) {
//     switch (animStatue) {
//         case `播放`: {
//             $node.style[`animation-play-state`] = `running`;
//         }; break;
//         default: {
//             $node.style[`animation-play-state`] = `paused`;
//         };
//     }
// }
// function DialogShow($node) {
//     animSet($node, `DialogShow`);
//     animPlay($node, `播放`);
// }
// function DialogClose($node, $$nodeContent) {
//     animSet($node, `DialogClose`);
//     animPlay($node, `播放`);
//     $$nodeContent.forEach(index => index.classList.remove(`show`));
//     isShowDialog = false;
// }

// $DialogBtn.addEventListener(`click`, () => {
//     $DialogBtn.classList.add(`show`);
//     $DialogShade.classList.add(`show`);
//     DialogShow($Dialog);
//     $Dialog.style[`animation-play-state`] = `running`;
//     isShowDialog = true;
// })

// $DialogBtn.addEventListener(`mouseleave`, () => {
//     if (!isShowDialog) {
//         $DialogBtn.classList.remove(`show`);
//     }
// })
// $Dialog.addEventListener(`animationend`, () => {
//     console.log(`播放结束`);
//     if (isShowDialog) {
//         $$DialogContent.forEach(index => index.classList.add(`show`));
//     }
//     else {
//         $DialogShade.classList.remove(`show`);
//         $DialogBtn.classList.remove(`show`);
//     }

// })
// //弹窗按钮点击事件
// $$DialogBtns.forEach(index => {
//     index.addEventListener(`mouseenter`, () => {
//         index.classList.add(`selected`);
//     });
//     index.addEventListener(`mouseleave`, () => {
//         index.classList.remove(`selected`);
//     });
//     switch (index.innerText) {
//         case `确定`: {
//             index.addEventListener(`click`, () => {
//                 console.log(`点击了确定按钮`);
//             });
//         } break;
//         case `取消`: {
//             index.addEventListener(`click`, () => {
//                 DialogClose($Dialog, $$DialogContent);

//                 console.log(`点击了取消按钮`);
//             });
//         } break;
//     }
// })
// //弹窗关闭按钮点击事件
// $DialogCloseBtn.addEventListener(`click`, () => {
//     DialogClose($Dialog, $$DialogContent);

// })



