let matrixx= [];
function generateMatrix(matLength, gr, grEa, pred,booom,all,matrix) {
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEa; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < booom; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < all; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 6;
        }
    }
    return matrix;
}

let matrix = generateMatrix(30,300,50,50,30,30,matrixx)





var side = 25;

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let bombarr = []
let qarArr = []
let allEaterArr = []

function setup() {
//     for (let i = 0; i < 30; i++) {
//         let x = Math.floor(Math.random() * 30);
//         let y = Math.floor(Math.random() * 30);
//         if (matrix[y][x] == 0) {
//             matrix[x][y] = 5;
//         }
//     }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                let bmb = new Bomb(x, y);
                bombarr.push(bmb)
            }
            else if (matrix[y][x] == 6) {
                let AllEat = new AllEater(x, y);
                allEaterArr.push(AllEat)
            }
        }
    }
    

}
            



function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x]==4)
            {
                fill("black")
            }
            // else if (matrix[y][x]==5)
            // {
            //     fill("blue")
            // }
            else if (matrix[y][x]==6)
            {
                fill("white")
            }
           

            rect(x * side, y * side, side, side);             
        }
        
    }


    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in bombarr) {
        bombarr[i].explode()
    }
    for (let i in allEaterArr) {
        allEaterArr[i].eat()
      }
}

