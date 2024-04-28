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
    for (let i = 0; i < 16; i++) {
        let box = document.createElement("div");
        box.className = "box";
        box.setAttribute("id", ("box" + i));
        container_div.appendChild(box);
    }
}
add_tile();
add_tile();

function add_tile() {
    let tile = document.createElement("div");
    tile.className = "tile";
    if ((Math.floor(Math.random() * 10) % 2 == 0)) {
        tile.innerText = 2;
    } else tile.innerText = 4;

    let pos = document.querySelector("#box" + (Math.floor(Math.random() * 15)));
    if (pos.innerHTML === "") {
        pos.appendChild(tile);
    } else {
        add_tile();
    }
}
// document.addEventListener("keydown", move_tiles);
function move_tiles(e) {
    if (e.key=="ArrowDown"){
        for (t of document.querySelectorAll(".tile")){
            console.log(parseInt(t.parentElement.id));

        }
        
    }
    // console.log(e.key);

}
