let name = prompt("ismingizni kriting");
let year11 = +prompt("hozirgi yilni kriting");
let year22 = +prompt("tug'ilgan yilinigizni kriting");


while (isNaN(year11) || year11 == 0) {
    year22 = +prompt("hozirgi yilni kritishingiz kerak");
}
while (isNaN(year22) || year22 == 0) {
    year22 = +prompt("tug'ilgan yilinigizni kritishingiz kerak");
}
function calcul(year1 = year11,year2 = year22) {
    let answer = year1 - year2
    console.log(`${name} , yoshingiz ${answer}`);
}
calcul()