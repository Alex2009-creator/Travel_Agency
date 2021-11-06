let section = document.querySelector('section');
let btniFrame = document.getElementsByClassName('btn_p');
let iFrame = document.getElementsByTagName('iframe');
let flag;
let i;

section.addEventListener('click', function (e) {
    if (!e) e = window.event;
    let target = e.target;
    if (target.tagName == 'BUTTON') {
        console.log('button!!!' + target.tagName);
        for (i = 0; i < btniFrame.length; i++) {
            if (btniFrame[i] == target) {
                showMap(i);
            }
        }
    }
}, false);

showMap = function (ind) {
    if (!flag) {
        iFrame[i].style.display = 'block';
        btniFrame[i].textContent = 'Скрыть карту';
        flag = true;
    } else {
        iFrame[i].style.display = 'none';
        btniFrame[i].textContent = 'Показать карту';
        flag = false;
    }
}