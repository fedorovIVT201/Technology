const number = document.querySelector('#inputNumb')
const result = document.querySelector('#resultFirstExecise')
const age = document.querySelector('#inputAge')
const result1 = document.querySelector('#resultSecondExecise')
const ponies = document.querySelector('#inputPonies')
const pony = document.querySelector('#inputPony')
const ponyFindButton = document.querySelector('#findPony')
const result2 = document.querySelector('#resultThirdExecise')
const Bk = document.querySelector('#inputBk')
const Tx = document.querySelector('#inputTx')
const findTxButton = document.querySelector('#findTx')
const result3 = document.querySelector('#resultFourthExecise')
const age1 = document.querySelector('#inputAge1')
const result4 = document.querySelector('#resultFifthExecise')
const height = document.querySelector('#inputHeight')
const result5 = document.querySelector('#resultSixthExecise')
const Block = document.querySelector('#inputBlock')
const result6 = document.querySelector('#resultSeventhExecise')
const nomero = document.querySelector('#inputNomber')
const result7 = document.querySelector('#resultEighthExecise')
const glukoza = document.querySelector('#inputGluk')
const result8 = document.querySelector('#resultNinethExecise')

function sumArray(array) {
    let num = array.split(", ");
    let sum = 0;
    num.forEach(element => {
        sum+=Number.parseInt(element, 10);
    });
    return sum.toString();
}
function getAboveZero(arg1) {
    let num = arg1.split(", ");
    let numbersAboveZero = num.filter(function(number){
        return number > 0;
    })
    return numbersAboveZero;
}
function getPonies(arg1, arg2) {
    let ponies = arg1.split(", ");
    let rightPony = ponies.find(function(poni){
        return poni == arg2;
    });
    if (rightPony == undefined) return false;
    else return rightPony;
} // TwilightSparkle, RainbowDash, AppleJack, Rarity, Pinkie Pie, Fluttershy
function isTxIncluded(arg1, arg2) {
    let Bk = arg1.split(", ");
    let rightBk = Bk.find(function(poni){
        return poni == arg2;
    });
    if (rightBk == undefined) return false;
    else return true;
}
function getSizes(arg1) {
    let words = arg1.split(", ");
    let lenghts = words.map(function(word){
        return word.length;
    });
    return lenghts;
}
function getWithSpaces(arg1) {
    let resArr = [];
    let sum = 0;
    let words = arg1.split(", ");
    words.forEach(element => {
        sum+=element.length;
    });
    resArr.push(words.join(" "));
    resArr.push(sum);
    return resArr;
}
function getEpisodes(arg1) {
    let asd = arg1.split(", ");
    let Block = {
        title: asd[0],
        episodes: asd[1]
    };
    return "Аниме " + Block.title + " включает " + Block.episodes + " серий";
}
function triple(arg1) {
    let nomer = Number.parseInt(arg1, 10);
    let proiz = nomer * 3;
    //let proiz = (nomer, b = 3) => return nomer * b;
    return proiz;
}
function getAvgGlucose(arg1) {
    let glu = arg1.split(", ");
    let sum = 0;
    glu.forEach(element => {
        sum+=Number.parseFloat(element);
    });
    return sum/glu.length
}
number.addEventListener("input", () => {
    result.textContent = sumArray(number.value)
})
age.addEventListener("input", () => {
    result1.textContent = getAboveZero(age.value)
})
ponyFindButton.addEventListener("click", () => {
    result2.textContent = getPonies(ponies.value, pony.value)
})
findTxButton.addEventListener("click", () => {
    result3.textContent = isTxIncluded(Bk.value, Tx.value)
})
age1.addEventListener("input", () => {
    result4.textContent = getSizes(age1.value)
})
height.addEventListener("input", () => {
    result5.textContent = getWithSpaces(height.value)
})
Block.addEventListener("input", () => {
    result6.textContent = getEpisodes(Block.value)
})
nomero.addEventListener("input", () => {
    result7.textContent = triple(nomero.value)
})
glukoza.addEventListener("input", () => {
    result8.textContent = getAvgGlucose(glukoza.value)
})