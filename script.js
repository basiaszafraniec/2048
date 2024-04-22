create_tiles();

function create_tiles() {
    const header_div = document.createElement("div");
    header_div.className = "header";
    const container_div = document.createElement("div");
    container_div.className = "container";
    if (window.innerHeight > window.innerWidth) {
        container_div.style.height = "100vw";
        container_div.style.width = "100vw";
    } else {
        container_div.style.height = "100vh";
        container_div.style.width = "100vh";
    }
    tile_size = (((parseInt(container_div.style.width) / 4) - 15).toString() + "vw");
    console.log(parseInt((parseInt(container_div.style.width) / 4)));
    document.body.appendChild(header_div);
    document.body.appendChild(container_div);
    const row = 4;
    const column = 4;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            let tile = document.createElement("div");
            tile.className = "tile";
            tile.style.width = tile_size;
            tile.style.height = tile_size;
            tile.innerText = (i * 4 + j + 1)
            document.querySelector(".container").appendChild(tile);
        }
    }
}