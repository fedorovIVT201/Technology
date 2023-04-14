const number = document.querySelector('#inputNumb')
const result = document.querySelector('#resultFirstExecise')
const age = document.querySelector('#inputAge')
const result1 = document.querySelector('#resultSecondExecise')
const integ = document.querySelector('#inputDivid')
const result2 = document.querySelector('#resultThirdExecise')
const faceage = document.querySelector('#inputFaceage')
const result3 = document.querySelector('#resultFourthExecise')
const age1 = document.querySelector('#inputAge1')
const result4 = document.querySelector('#resultFifthExecise')
const height = document.querySelector('#inputHeight')
const result5 = document.querySelector('#resultSixthExecise')
function getNumb(arg1) {
    return arg1.toString();
}
function getAge(arg1) {
    let age = Number.parseInt(arg1, 10) + 1;
    return age.toString();
}
function getRemainder(arg1) {
    let num = arg1.split(" ");
    return num[0] % num[1];
}
function faceControl(arg1) {
    if (arg1 >= 18) return "Welcome";
    else return "Отказ";
}
function getNextAge(arg1) {
    if(arg1=="") return 0;
    else return Number.parseInt(arg1, 10) + 1
}
function canRide(arg1) {
    return arg1 >= 140;
}
number.addEventListener("input", () => {
    result.textContent = getNumb(number.value)
})
age.addEventListener("input", () => {
    result1.textContent = getAge(age.value)
})
integ.addEventListener("input", () => {
    result2.textContent = getRemainder(integ.value)
})
faceage.addEventListener("input", () => {
    result3.textContent = faceControl(faceage.value)
})
age1.addEventListener("input", () => {
    result4.textContent = getNextAge(age1.value)
})
height.addEventListener("input", () => {
    result5.textContent = canRide(height.value)
})