const container = document.querySelector(".container");
const resizeButton = document.querySelector(".change-grid");
let gridSize = 16;

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
        let brightness = 100;
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    
        square.addEventListener("mouseenter", () => {
            square.classList.add("active");
            brightness = brightness - 10;

            square.style.backgroundColor = getRandomColor();
            square.style.filter = `brightness(${brightness}%)`;
        })

        container.appendChild(square);
    }
}

function resizeGrid() {
    let newSize = prompt("Enter new grid size (1-100).");

    if (newSize !== null && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
        gridSize = parseInt(newSize);
        createGrid(gridSize);
    }
}

resizeButton.addEventListener("click", resizeGrid)

createGrid(gridSize);