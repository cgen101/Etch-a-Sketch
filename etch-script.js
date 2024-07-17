const grid = document.getElementById("container"); 
const slider = document.getElementById("myRange");
const sliderVal = document.getElementById("slideValue");
const clearButton = document.getElementById("clear");
const chooseColor = document.getElementById("pickColor");
const sideNav = document.getElementById("adjustments");
let gridElems = document.getElementsByClassName("gridDiv");

document.addEventListener('DOMContentLoaded', function() {
    createGrid(16); 
    sliderVal.textContent = `16 x 16`; 
})

slider.oninput = function() { 
    createGrid(slider.value); 
    sliderVal.textContent = `${slider.value} x ${slider.value}`; 
};

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
    
    listenForHover();
}

//Helper fxn to add listener to each div
function listenForHover() { 
    for (let i=0; i<gridElems.length; i++) { 
        gridElems[i].addEventListener("mouseover", function() { 
            gridElems[i].style.backgroundColor = chooseColor.value;
        })
    }
}

//Fxn to clear grid
clearButton.addEventListener("click", function() { 
    for (let i = 0; i < gridElems.length; i++) {
        gridElems[i].style.backgroundColor = "white"; 
    }
})

function openNav() { 
    sideNav.style.width="250px"; 
}
function closeNav() { 
    sideNav.style.width="0px"; 
}






