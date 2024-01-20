let colorIterate = 0;
const tColor = ["#FEFEFA", "#001F3F", "#CC313D", "#0E1111"]
const bColor = ["#0E1111", "#AAAAAA", "#F7C5CC", "#FEFEFA"]
const bImg = ["images/vending_machine.jpg", "images/sky.jpg", "images/pinkcity.jpg", "images/plant.jpg"]

function DarkMode(){
    var list = document.getElementsByTagName("li");
    var para = document.getElementsByTagName("p");
    var bar = document.getElementsByClassName("title-decor");
    var hr = document.getElementsByClassName("in-between");
    var btn = document.querySelector("#color-change");
    var image = document.querySelector("#image");

    document.body.style.background = bColor[colorIterate];
    btn.style.color = bColor[colorIterate];
    btn.style.outlineColor = bColor[colorIterate];
    btn.style.backgroundColor = tColor[colorIterate];
    image.src= bImg[colorIterate];

    for (var i=0; i < list.length; i++){    
        list[i].style.color= tColor[colorIterate];
    }
    for (var i=0; i < para.length; i++){    
        para[i].style.color= tColor[colorIterate];
    }
    for (var i=0; i < bar.length; i++){    
        bar[i].style.backgroundColor= tColor[colorIterate];
    }
    for (var i=0; i < hr.length; i++){    
        hr[i].style.borderColor= tColor[colorIterate];
    }

    colorIterate++;

    if (colorIterate > 3){
        colorIterate = 0;
    }
}