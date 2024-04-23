///func for adding one tile - exe twice at the begginning
///

// create_tiles();

draw_board();
function draw_board() {
    const header_div = document.createElement("div");
    header_div.className = "header";
    const container_div = document.createElement("div");
    container_div.className = "container";
    if (window.innerHeight > window.innerWidth) {
        container_div.style.height = "60vw";
        container_div.style.width = "60vw";
        header_div.style.height = "15vh";
        header_div.style.width = "60vw";

    } else {
        container_div.style.height = "60vh";
        container_div.style.width = "60vh";
        header_div.style.height = "15vh";
        header_div.style.width = "60vh";
    }
    document.body.appendChild(header_div);
    document.body.appendChild(container_div);
    // window.onresize = function () {
    //     if (window.innerHeight > window.innerWidth) {
    //         container_div.style.height = "60vw";
    //         container_div.style.width = "60vw";
    //         header_div.style.height = "15vh";
    //         header_div.style.width = "60vw";

    //     } else {
    //         container_div.style.height = "60vh";
    //         container_div.style.width = "60vh";
    //         header_div.style.height = "15vh";
    //         header_div.style.width = "60vh";
    //     }
    // }
}
function create_tiles() {

    let tile_size = (((parseInt(container_div.style.width) / 4) - 10).toString() + "vw");

    console.log(parseInt((parseInt(container_div.style.width) / 4)));

    const row = 4;
    const column = 4;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            let tile = document.createElement("div");
            tile.className = "tile";
            tile.innerText = (i * 4 + j + 1)
            document.querySelector(".container").appendChild(tile);
        }
    }

    // tile_size = (((parseInt(container_div.style.width) / 4) - 10).toString() + "vw");
    // for (tile of document.getElementsByClassName("tile")) {
    //     tile.style.width = tile_size;
    //     tile.style.height = tile_size;
    //     console.log(tile_size);
    // }

}
