// forEach and entries()

const score = [5, 10, 0, 15];

for (const [i, el] of score.entries()) {
    console.log(`Раунд ${i + 1}: ${el}`)
} //Выведет раунд 1: 5, раунд 2: 10 и так далее. перебирает каждый элемент [индекс, элемент] (НАОБОРОТ НЕ ПОЛУЧИТСЯ)

//Тоже самое но с помощью forEach. forEach в целом является функцией высшего порядка, которая как раз таки принимает параметром другую функцию. forEach позволяет пробегаться по каждому элементу массива и делать с ним то, что делает функция которая лежит в параметре. Но в отличии от цикла for нельзя цикл прервать, поэтому использовать тогда когда нужно перебрать все элементы.

score.forEach(function (scoreEl, id, arr) { // вот тут есть еще третий аргумент сам массив (в нашем случае score), который может писаться в консоль в каждой итерации
    console.log(`Раунд ${id+1}: ${scoreEl}`) // сначала element потом индекс. выполняем эту функцию для каждого из элементов. не возвращает новый массив а просто грубо говоря итерируется по каждому элементу делая с ними что то.
})

//map

/* Тоже пробегается по каждому элементу массива, но он в отличии от форич ВОЗВРАЩАЕТ какое то значение. и то есть map как бы создает новый массив куда кладет элементы прежнего массива, прошедшие через "цикл функции" который выполняется внутри map. Также как и forEach принимает три аргумента (el id arr). Ненужные можно отрабасывать соответственно */

const tranzactionsInUSD = [100, -50, 30, 20, -15];

const tranzactionsInRUB = tranzactionsInUSD.map((tranzaction) => {
    return tranzaction * 60;
})

console.log(tranzactionsInRUB)
console.log(tranzactionsInUSD)

//filter

/* const operations = [10, -5, 30, 40, -3];

const operationsPlus = operations.filter((element) => {
    if (element > 0) {
        return true; 
    }
})

console.log(operationsPlus) */ // filter пробегается по элементам старого массива, и если callback функция после какой то проверки вернула true для какого то элемента, то он закидывается в новый массив. ПРОЩЕ ГОВОРЯ МЫ ОСТАВЛЯЕМ В НОВОМ МАССИВЕ ТОЛЬКО ТЕ ЭЛЕМЕНТЫ КОТОРЫЕ УДОВЛЕТВОРЯЮТ УСЛОВИЮ В ФУНКЦИИ.

// ЦЕПОЧКА МЕТОДОВ.
/* Так как map, filter и так далее создают новый массив, к нему мы можем применить другие методы. Например: */

/* const operations = [10, -5, 30, 40, -3];
const operationsPlus = operations
.filter(element =>  {
    return element > 0
})   
.map(element =>  {
    return element * 60
})   
console.log(operationsPlus)  */

const operations = [10, -5, 30, 40, -3];
const operationsPlus = operations.filter(element => element > 0).map(element => element * 60)
console.log(operationsPlus)


//Задача 
/* Имеется массив изменения цен prices, где внутри 1й элемент массива является ценой в момент X, а 2й - ценой в момент Y. Нужно преобразовать данные в массив, где будут отображены только положительные изменения цен: [100, 150] */

const prices = [[100, 200], [120, 100], [200, 350]];

const newPrices = prices.map((element) => {
    const elementDiference = element[element.length - 1] - element[0];
    return elementDiference
})
    .filter (element => {
        return element > 0
    })

console.log(newPrices)


// reduce

/* const tranzakt = [200, -50, 20, -40, 30];
let finalBalance = 0;
 for (element of tranzakt) {
    finalBalance += element
 }

console.log(finalBalance) */

// Теперь тоже самое с помощью reduce.
/* В чем суть reduce.Используется для "сведения" массива к одному значению. Он принимает в себя три аргумента. 1 - текущее значение "аккумулятора" (в нашем случае начальный баланс 0). 2 - элемент массива в текущей итерации (начинаем с 200). 3 - индекс этого элемента. reduce проходится по всем элементам. После каждой итерации меняется значение аккумулятора (в зависимости от того что делается в функции. Начальное значения acc можно указать после второй квадратной скобки (тело колбэка). */

const tranzakt = [200, -50, 20, -40, 30];
const finalBalance = tranzakt.reduce((acc, tranzaction, id) => {
    console.log(`Аккумулятор: ${acc}, Текущее значение: ${tranzaction}, Индекс: ${id}`)
    return acc += tranzaction
}, 0) // текущее значение (acc). если бы его не было то acc был бы равен первому элементу массива (второй аргумент reduce соответственно второму, а так как acc задан(0), то второе значение равно первому элементу массива).
console.log(finalBalance)


//Задача1. Найти среднее значение последовательности чисел с помощью reduce.

/* const numbers = [1, 4, 4, 10];

function averageNumber (numbers) {
    let sum = 0;
    let amountOfNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        amountOfNumbers++;
    }
    return sum / amountOfNumbers
}

console.log(averageNumber(numbers)) */ 
//Теперь с помощью reduce

const numbers = [1, 4, 4, 10];

const averageNumber = numbers.reduce((acc, currentNumber, id) => {
    console.log(`Аккумулятор: ${acc}, Текущее значение: ${currentNumber}, Индекс: ${id}`)
    if (id != numbers.length-1) { 
        return acc + currentNumber       
    } else {
        return (acc + currentNumber) / numbers.length
    }
    
}, 0)
console.log(averageNumber)


// find and findindex

//Ищем первый элемент  больше 5 сначала старым способом потом новым

const elements = [2,6,7,4];

/* let elMore5;
for (const element of elements) {
    if (element < 5) {
        continue;
    } else {
        elMore5 = element;
        break;     
    }
}
console.log(elMore5) */

const elMore5 = elements.find((el) => {
    return el > 5
})
console.log(elMore5) // Метод find ищет ПЕРВЫЙ ЭЛЕМЕНТ МАССИВА, УДОВЛЕТВОРЯЮЩИЙ УСЛОВИЮ. если элемент не будет найден, выведен undefined

const elMore5Index = elements.findIndex((el) => {
    return el > 5
})
console.log(elMore5Index) // Метод findIndex ищет ИНДЕКС ПЕРВОГО ЭЛЕМЕНТА МАССИВА, УДОВЛЕТВОРЯЮЩЕГО УСЛОВИЮ. если элемента не будет, выведет -1 (индекс несущ элемента). нужен например если нам в if нужно проверить, есть ли элемент. if (elements.findIndex((el) => element === el) !=== -1) {.... какая то логика}. тут если что elements массив, element - его элемент, el - какое то заданное число которое мы проверяем с массивом.


// Задача. Написать функцию, которая возвращает true, если элемент есть, и false если его нет
const arr = [1, 2, 3, 4, 5];
const number = 5;

function sum (arr, number) {
    for (element of arr) {
        if (arr.find((element) => element === number)) {
            return true;
        }
        return false;
    }
}

console.log(sum(arr, number))

// some. Если хотим проверить, есть ли элемент в списке массива, то

console.log(arr.some((element) => element === 5)) // проверяет, есть ли в массиве элемент равный 5, если да то возврпащает true, нет - false



// flat и flatMap

const flatMassive = [[5, 10], [15, 30], [1, 2]];

const flattim = flatMassive.flat(); // flat = "плоский", убирает вложенность массива. То есть щас подмассивы уйдут и массив будет состоять из 6 элементов.
console.log(flattim)

const flatMassive2 = [[5, 10], [15, 30], [1, [2, [3]]]];

const flattim2 = flatMassive2.flat(Infinity); // но если вложенность больше одной, то flat() уберет только одну вложенность, так как по умолчанию flat() = flat (1). Поэтому внутри flat нужно передавать аргумент 2. если передать выше то ниче не изменится (эффект будет как от двух). Если вложенность неизвестна, но нужно получить из массива с вложенными элементами плоский массив, то передайте аргумент Infinity. Тогда метод рекурсивно обойдёт массив и сделает на его основе новый плоский.
console.log(flattim2)

//flatMap это комбинация методов map и flat (сначала что то делает с элементами кидая их в новый массив, а потом флэтит)


//sort

const names = ['Никита', 'Ваня', 'Анастасия', 'Вика'];
console.log(names)
names.sort()
console.log(names) // метод sort воспринимает все элементы массива как строки. если мы ничего не передадим в sort то она просто отсортирует имена строки по алфавиту

const numberrs = [-50, 20, 30, 40, -100]
numberrs.sort()
console.log(numberrs) // тут она числа все равно будет воспринимать как строки ( -50 = '-50'). вернет она -100, -50, 20, 30, 40 так как начнет со знака - (идет выше цифр), и дальше по возрастанию

//Теперь про параметры sort. Она принимает два параметра, a и b. Это два идущих рядом элемента. и вот по ним мы и можем сортировать не строки. ОЧЕНЬ ВАЖНЫЙ МОМЕНТ - СОРТ НЕ СОЗДАЕТ НОВЫЙ МАССИВ КАК МНОГИЕ ДРУГИЕ МЕТОДЫ, А ИЗМЕНЯЕТ НАЧАЛЬНЫЙ
// < 0 - a, b - сохраняет порядок
// >0 - a, b - меняет местами
/* Например я хочу отсортировать по возрастанию */
const numberrrs = [-50, 20, 30, 40, -100]

numberrrs.sort ((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
})
console.log(numberrrs)

// Или по другому

numberrrs.sort ((a, b) => a - b) // a-b возвратит как то значение, и если это значение будет >0, то элементы поменяются местами, если наоборот то порядок сохранится
console.log(numberrrs)


// new Array - способо создать массив (например состоящий из 100 элементов), не заполняя элементы в ручную.

const newArr = new Array()
console.log(newArr) // выведет пустой массив
const newArr2 = new Array(1, 2, 3, 4, 5)
console.log(newArr2) // выведет обычный массив, аналогичный const newArr2 = [1, 2, 3, 4, 5]
const newArr3 = new Array(5) // new Array в себя может принимать параметр. параметр указывает на длину массива
console.log(newArr3) // выведет empty x 5 (это не undefined а просто пустота). и эту пустоту нельзя например исправить пробегаясь по массиву методом map и добавляя туда какие то числа (всё равно выведет empty x 5)

// Пустоту можно заполнить методом fill

newArr3.fill(1, 0, 3) // три параметра - 1й этозначение которое примут элементы, 2й это с какого элемента начнутся эти значения (в данном случае с элемента с индексом 0), 3й это по какой элемент будут идти эти значения (не включая, то есть в данном случае элемент с индексом 3 не будет включен)
console.log(newArr3) // в итоге будет [1, 1, 1, empty x 2]

newArr3.fill(2, 3, 5)
console.log(newArr3) // [1, 1, 1, 2, 2]

// Метод from

const arr3 =  Array.from({length: 5}, (element, i) => { // Array.from принимает первым аргументом обьект, хранящий длину массива, и вторым функцию которая возвращает уже значение элементов (какую то логику). Функция также в себя может принимать element и индекс в качестве аргументов. Фактически эта функция выполняет то же, что и map, но которая работает с только что созданным массивом. 
    return i+1
})
console.log(arr3) // вернет [1, 2, 3, 4, 5]