const grid = document.getElementById("container"); 
const slider = document.getElementById("myRange");
const sliderVal = document.getElementById("slideValue");
const clearButton = document.getElementById("delIcon");
const expButton = document.getElementById("saveIcon");
const chooseColor = document.getElementById("pickColor");
const sideNav = document.getElementById("adjustments");
const randomColor = document.getElementById("randColorButt");
const backToBlack = document.getElementById("boringButt");
const credit = document.getElementById("tooltip");
let gridElems = document.getElementsByClassName("gridDiv");

//Load initial 16x16 grid
document.addEventListener('DOMContentLoaded', function() {
    createGrid(16); 
    sliderVal.textContent = `16 x 16`; 
})

//Change grid density
slider.oninput = function() { 
    createGrid(slider.value); 
    sliderVal.textContent = `${slider.value} x ${slider.value}`; 
};

//Change color to desired 
chooseColor.oninput = function() { 
    listenForHover(chooseColor.value);
};

backToBlack.addEventListener("click", function() { 
    listenForHover("#000000000");
})


//Disco mode 
randomColor.addEventListener("click", function() { 
    for (let i=0; i<gridElems.length; i++) { 
        gridElems[i].addEventListener("mouseover", function() { 
            gridElems[i].style.backgroundColor = getRandomColor();
        })
    }
})


//Helper fxn to generate grid
function createGrid(x) { 
    grid.innerHTML='';
    for(let i=0; i < x*x; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = "gridDiv";
        newDiv.style.width = `calc(100% / ${x})`;
        newDiv.style.height = `calc(100% / ${x})`;
        grid.appendChild(newDiv); 
    }
    
    listenForHover("#000");
}

//Helper fxn to add listener to each div
function listenForHover(currColor) { 
    for (let i=0; i<gridElems.length; i++) { 
        gridElems[i].addEventListener("mouseover", function() { 
            gridElems[i].style.backgroundColor = currColor;
        })
    }
}

//Fxn to clear grid
clearButton.addEventListener("click", function() { 
    for (let i = 0; i < gridElems.length; i++) {
        gridElems[i].style.backgroundColor = "#eeeeee"; 
    }
})

//Randomize color helper fxn
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Listen for click to save sketch as .png
expButton.addEventListener('click', function() {
    html2canvas(document.getElementById('container')).then(canvas => {
        let link = document.createElement('a');
        link.download = 'etch-a-sketch.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

//Animate heading
jQuery(document).ready(function(){
    $('h1').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
      var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
      $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
 });

function openNav() { 
    sideNav.style.width="250px"; 
}
function closeNav() { 
    sideNav.style.width="0px"; 
}
function showPop() { 
    credit.textContent="built by cgen101, 2024";
    credit.style.display="block";
}
function closePop() { 
    credit.style.display="none";
}







