function check() {
let intelligenceLevel = ["Awesome","Amazing","Dumb","Fool","Creative" ];
let name =document.querySelector("input").value;

let randomIndex = parseInt(Math.random()*intelligenceLevel .length);

alert(intelligenceLevel[randomIndex])

}

