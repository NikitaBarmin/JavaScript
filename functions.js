function logName () {
    console.log(`Моё имя Никита`)
}

console.log(logName()) // выведет сначала действие которое делает консоль лог, а потом возвратит значение "undefined", так как функция ничего не возвращает. То есть тут сначала комплиятор получает значение консоль лога, а потом возвращает значение функции console.log(undefined).
logName() // просто выведет действие которое делает консоль лог. Тут возвращаемое undefined никуда не присваивается и поэтому не выводится. Тут выводится в консоль потому что внутри функции есть консоль лог

//Задача про деньги в банке из модуля "управление потоком"

function changesOfDeposit (deposit, rate, month) {
    const sum = deposit * (1 + rate / 12) ** month;
    return sum;
}

/* changesOfDeposit(1000, 0.08, 12) */ // если просто так напишем то ничего не выведется, нужен консоль лог

const a = changesOfDeposit(1000, 0.08, 12);
console.log(a);

//Анонимная функция. Отличается от обычной тем, что функция это по сути значения константы. Мы не можем вызывать эту функцию до обьявления константы (обычную можем)
const chOfD = function (deposit2, rate2, month2) {
    return deposit2 * (1 + rate2 / 12) ** month2
}
console.log(chOfD(1000, 0.09, 24)) 

//Стрелочные функции. Похожи работой на анонимную, но есть различиние в контексте (потом подробно расскажут) и в записи

const chanOfDep = (deposit3, rate3, month3) => deposit3 * (1 + rate3 / 12) ** month3
console.log(chanOfDep(2000, 0.1, 18))

const sum = num => num * num
console.log(sum(5)) // Если аргумент один, можно отбрасывать скобки у аргумента. Если код очень простой как в данном примере, можно отбрасывать и фигурные скобки и return, при этом можно и не отбрасывать как скобки так и фигурные скобки и return.

//Задача 1
/* Переписать функцию в стрелочную */

function numberInDegree (number, grade) {
    return number ** grade;
}
console.log(numberInDegree(2, 3))

const numInDeg = function (number2, grade2) {
    return number2 ** grade2
}
console.log(numInDeg(2, 3))

const nInD = (number3, grade3) => number3 ** grade3
console.log(nInD(2, 3))

//Параметры по умолчанию
/* Аргументам можно задавать какие то значения по умолчанию, которые она будет принимать в случае отсутствия значений внутри функции. */
const func = (n, g = 5) => n ** g
console.log(func(2, 3))
/* Но можно например сделать и так: */
const fun = (n1, g1) => {
    n1 = n1 ?? 5 // ?? - оператор ИЛИ (но в отличии от || считает за true '' или 0)
    return n1 ** g1
}
console.log(fun(undefined, 3))

/* Про return: как только у нас происходит return внутри функции, дальше её код уже не выполняется. Например: */

function isAccess (age) {
    if (age < 18) {
        return false
    } else {
        console.log('asdasasfafs')
        return true
    }
}

console.log(isAccess(17)) // сразу же выведет false и дальше код в функции не будет читаться (консоль не выведется)

const isAgeAccess = age => age > 18;
console.log(isAgeAccess(16)) // краткая запись которая выведет false


const ageAc = function (age) {
    if (age < 18) {
        return `К сожалению вы не сможете войти: ваш возраст ${age} лет`
    }
    return 'Входите' //можем опустить else так как если код в if не сработает, следовательно пользователю >18. Поэтому можем просто вернуть 'Входите'
}

console.log(ageAc(18))


//Функция в функции. На примере посмотрим как это работает. Допустим, мы хотим создать функцию, которая будет считать сумму перевозки двух товаров для обмена учитывая их вес и расстояние.

const USD_IN_KM = 5
const USD_IN_KG = 3

function presentCost (present) {
    return present * USD_IN_KG
}
function distanceCost (distance) {
    return distance * USD_IN_KM
}

function calculateSum (present1, present2, distance) {
    const price1 = presentCost(present1)
    const price2 = presentCost(present2)
    const distCost = distanceCost(distance)
    return price1 + price2 + distCost
}

console.log(calculateSum(5, 7, 3)) //Функция в функции

function presentCost (present) {
    return present * USD_IN_KG
}
function distanceCost (distance) {
    return distance * USD_IN_KM
}

function presentCostSum (presentOne, presentTwo) {
    return presentOne + presentTwo
}

function calculateSum (present1, present2, distance) {
    const presentPrice = presentCostSum(presentCost(present1),presentCost(present2))
    const distCost = distanceCost(distance)
    return presentPrice + distCost
}
console.log(calculateSum(5, 7, 3)) // Функция в функции в функции


// Задача 2
/* Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false; */


function sumCredit (age, hasJob, money) {
    if (age >= 24 && hasJob) {
        money +=  500;
    } else if (age >= 24) {
        money += 100
    } else {
        money += 0;
    }
    return money;
}

function canBuy (age, hasJob, money, macbookCost) {
    const budget = sumCredit(age, hasJob, money);
    if (budget >= macbookCost) {
        return true;
    }
    return false;
}
console.log(canBuy(24, false, 1900, 2000))















