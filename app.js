const container = document.querySelector(".container");
const resizeButton = document.querySelector(".change-grid");
let gridSize = 16;

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 640 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    
        square.addEventListener("mouseenter", () => {
            square.classList.add("active");
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