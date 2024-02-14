const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
let active = 0;

function changeColor(color){
    if (active == 0) {
        box2.style.top = "-75%";
        box1.style.top = "20%";
        box1.style.borderColor = color;
        active += 1;
    }
    else {
        box1.style.top = "-75%";
        box2.style.top = "20%";
        box2.style.borderColor = color;
        active -= 1;
    }
}