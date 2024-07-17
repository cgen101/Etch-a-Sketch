const grid = document.getElementById("container"); 
var slider = document.getElementById("myRange");

document.addEventListener('DOMContentLoaded', function() {
    createGrid(16); 
})


function createGrid(x) { 
    for(let i=0; i < x*x; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = "gridDiv";
        newDiv.style.width = `calc(100% / ${x})`;
        newDiv.style.height = `calc(100% / ${x})`;
        grid.appendChild(newDiv); 
    }
}