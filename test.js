const carousel = document.querySelector(".carousel");
const buttons = document.querySelectorAll(".buttons");
let counter = 1;
let width = 60;
carousel.style.transform = 'translate(-' + (counter*width) + 'vw)';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        execute(e);
    })
})

window.onkeydown = execute;
function execute(e) {
    if (counter >= 5 || counter <= 0) return;
    console.log(counter);
    e = e || window.event;
    if (e.type === 'keydown' && e.keyCode >= 37 && e.keyCode <= 40) {
        let key = e.keyCode;
        switch (key) {
            case 39:
                move('right');
                break;
            case 37:
                move('left');
                break;
        }
    } else if (e.type === 'click') {
        let button = e.target.id;
        switch (button) {
            case 'rightButton':
                move('right');
                break;
            case 'leftButton':
                move('left');
                break;
        }
    }
}

function move(direction) {
    switch (direction) {
        case 'right':
            // if (counter >= 5) return;
            counter++;
            break;
        case 'left':
            // if (counter <= 0) return;
            counter--;
            break;
    }
    carousel.style.transition = "transform 0.5s";
    carousel.style.transform = 'translateX(-' + (counter*width) + 'vw)';
}

carousel.addEventListener('transitionend', check);
function check() {
    if (counter >= 5) {
        counter = 1;
        carousel.style.transition = "none";
        carousel.style.transform = 'translateX(-' + (counter*width) + 'vw)';
    } else if (counter <= 0) {
        counter = 4;
        carousel.style.transition = "none";
        carousel.style.transform = 'translateX(-' + (counter*width) + 'vw)';
    }
}