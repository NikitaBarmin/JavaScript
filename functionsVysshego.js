//Функции высшего порядка

/* Функции высшего порядка это функция, которая либо принимает другую функцию, либо возвращает другую функцию. */

const a = function (b) {
    b++;
}

function highPoryadok (a) { //принимает в качестве аргумента функцию a (по другому называется callback - передаем функцию в качестве аргумента в функцию высшего порядка и потом вызываем когда нам надо)
    return;
}

function highPoryadok2 () {
    return a // возвращает значение функции a
}


//Пример 1

function sum (a, b) {
    return a + b
}


function subtract (a, b) {
    return a - b
}

function power (a, b) {
    return a ** b
}

function calculate (a, b, fn) {
    console.log(fn.name)
    const rez = fn(a, b)
    return rez;
}

let result = calculate(3, 5, sum)
console.log(result)

result = calculate(3, 5, power)
console.log(result)

result = calculate(3, 5, subtract)
console.log(result) // ПРИМЕР 1 ЭТО ПРИМЕР КОЛБЭКА

//Пример 2 (возвращаем новую функцию)
/* function powerNumber (power1) {
    return function number (num) {
        return num ** power1
    }
}

console.log(powerNumber(5)(3))

const powerrr = powerNumber(3);
console.log(powerrr(3)) */


// Задание 1. Переписать используя стрелочную функцию

const powerNumber = (num) => (power2) => num ** power2;

console.log(powerNumber(4)(5))

const powerrrr = powerNumber(3);
console.log(powerrrr(5))


