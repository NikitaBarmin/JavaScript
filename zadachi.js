//Задача 3: Проверка числа на четность и положительность

/* Описание: Создайте функцию checkNumber, которая принимает один аргумент number. Функция должна проверять, является ли число четным и положительным. Она должна возвращать:
"Четное положительное", если число четное и положительное.
"Нечетное положительное", если число нечетное и положительное.
"Отрицательное или ноль", если число отрицательное или равно нулю. */


/* function moreThanNull (number) {
    return number % 2 === 0
}

function checkNumber (number) {
    if (number <= 0) {
        return 'Отрицательное или ноль'
    } else if (moreThanNull(number)){
        return 'Четное положительное'      
    } 
    return 'Четное отрицательное'

}
console.log(checkNumber(2))

function numbersCheck (number) {
    if (number <= 0) {
        return 'Отрицательное или ноль'
    } else if (number % 2 === 0){
        return 'Четное положительное'
    }
    return 'Нечетное положительное'
}

console.log(numbersCheck(0)) */



/* Задача 1: Калькулятор с проверкой типа операции

Описание: Создайте функцию calculator, которая принимает три аргумента: num1, num2 и operation. operation может быть строкой “add”, “subtract”, “multiply” или “divide”. Функция должна выполнять соответствующую операцию и возвращать результат. Если operation не является одним из допустимых значений, функция должна вернуть строку “Неверная операция”.

Пример использования:

console.log(calculator(5, 3, "add"));      // Выведет 8
console.log(calculator(10, 2, "divide"));   // Выведет 5
console.log(calculator(7, 4, "subtract")); // Выведет 3
console.log(calculator(2, 6, "multiply")); // Выведет 12
console.log(calculator(4, 2, "power"));    // Выведет "Неверная операция"

Задача 2: Фильтрация массива строк

Описание: Создайте функцию filterStrings, которая принимает два аргумента: strings (массив строк) и minLength (минимальная длина строки). Функция должна вернуть новый массив, содержащий только те строки из исходного массива, длина которых больше или равна minLength.

Пример использования:

const words = ["apple", "banana", "kiwi", "orange", "grape"];
console.log(filterStrings(words, 5)); // Выведет ["banana", "orange", "grape"]
console.log(filterStrings(words, 4)); // Выведет [ 'apple', 'banana', 'orange', 'grape' ]
console.log(filterStrings(words, 7)); // Выведет []

Задача 4: Приветствие по имени (с опциональным возрастом)

Описание: Создайте функцию greet, которая принимает два аргумента: name (строка) и age (число, необязательный аргумент).

Если age передан, функция должна вернуть строку вида “Привет, {name}! Тебе {age} лет.”.
Если age не передан, функция должна вернуть строку вида “Привет, {name}!”.
Пример использования:

console.log(greet("Алиса", 25)); // Выведет "Привет, Алиса! Тебе 25 лет."
console.log(greet("Боб"));       // Выведет "Привет, Боб!"
Задача 5: Сумма чисел в массиве (с проверкой на тип)

Описание: Создайте функцию sumArray, которая принимает один аргумент numbers (массив). Функция должна суммировать только числовые элементы массива и возвращать общую сумму. Если в массиве есть нечисловые элементы, они должны игнорироваться.

Пример использования:

const mixedArray = [1, 2, "hello", 4, 5, true, 8, null, 10];
console.log(sumArray(mixedArray)); // Выведет 30 (1 + 2 + 4 + 5 + 8 + 10)
console.log(sumArray([1, 2, 3])) // выведет 6
console.log(sumArray(["a", "b", "c"])) // выведет 0 */

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



/* 
if (age > 24 && hasWork) {
    credit += 500;
    return credit;
} else if (age > 24) */

const age = 25;
const hasWork = true;
const money = 1500;
const macBookCost = 2000;

function canHaveCredit (age, hasWork) {
    let credit = 0;
    switch (true) {
        case age > 24:
            credit +=400;
        case hasWork:
            credit += 100;
        break;
        default:
            credit ++;
    }
    return credit;
}

function canBuyMacBook (age, hasWork, money, macBookCost) {
    const moneyInCredit = canHaveCredit(age, hasWork);
    const moneyOverall = moneyInCredit + money;
    let canBuy = false;
    if (moneyOverall > macBookCost) {
        canBuy = true;
        return canBuy;
    } 
    return canBuy;
}

console.log(canBuyMacBook (age, hasWork, money, macBookCost))

   /*  /Задача 1 */
/* Дан список задач
const tasks = ['Задача 1']
Сделать функции:
-Добавление задачи в конец
-Удаление задачи по названию
-Перенос задачи в начало списка по названию
Всегда меняем исходный массив. */

const tasks = ['Задача 1'];

function AddTask (taskName) {
     tasks.push(taskName);
}


function DeleteTask (taskName) {
    const indexOfElement = tasks.indexOf(taskName);
    if (indexOfElement === -1) {
         return;
    } else {
       return tasks.splice(indexOfElement, 1)
        /* return tasks;  */// конкретно в нашем случае return tasks необязателен так как мы не закидываем результат функции в отдельную переменную. Мы просто вызываем эту функцию с элементом (на этот моменте удаляется элемент. и в консоль лог выводим значение нового массива. Но если нам нужно положить функцию в переменную и потом в консоль закинуть переменную, то функция обязана чтото возвращать, иначе будет undefined)
    }

}
AddTask('Задача 2')
AddTask('Задача 3')
AddTask('Задача 4')
console.log(tasks)
console.log('-----')
/* -Перенос задачи в начало списка по названию */

function PrioritizeOfElement (taskName) {
    const deleteElement = DeleteTask(taskName);
    if(!deleteElement) {
        return;
    }
    tasks.unshift(deleteElement[0])
}
PrioritizeOfElement('Задача 4')
console.log(tasks)

//Задача 2
/* Дан произвольный url - 
'https://purpleschool.ru/course/javascript'
Нужно сделать функцию, которая выводит в консоль:
-Протокол (https)
-Доменном имя (purpleschool.ru)
-Путь внутри сайта (/course/javascript) */

const url = 'https://purpleschool.ru/course/javascript'

function urlString (url) {
    const massiveUrl = url.split('/');
    const [protokol, _, domen, ...path] = massiveUrl;
    const pathInString = path.join('/')
    console.log(`Протокол: ${protokol.split(':')[0]}`) 
    console.log(`Доменное имя: ${domen}`) 
    console.log(`Путь внутри сайта: /${pathInString}`)
}

urlString(url)

//Задача 1
/* Вывести в консоль строку "Я люблю JS !" из массива, проходя циклом в обратном порядке, не используя метод ResizeObserverSize. 
const arr = ['i', 'JS', 'люблю', 'Я'] */

const arr = ['!', 'JS', 'люблю', 'Я'];
const arrMassive = [];
for (let i = arr.length-1; i >= 0; i--) {
    arrMassive.push(arr[i])    
}

const arrString = arrMassive.join(' ')
console.log(arrString)

//Задача 2
/* Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчёта:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
- Расчёта среднего расхода и среднего дохода */

const operations = [1000, -100, 300, -600, 10000];
const balance = 99;
function finalBalance (operations, balance) {
    for (element of operations) {
        balance += element;
    }
    return balance;
}

function finalBalance (operations, balance) {
    for (let i = 0; i < operations.length; i ++) {
        balance += operations[i];
    }
    return balance;
}

function finalBalance (operations, balance) {
    for (index in operations) {
        balance += operations[index];
    }
    return balance;
}

console.log(finalBalance(operations, balance))

/* function minusBalance (operations, balance) {
    let isBalancePlus = true;
    for (element of operations) {
        balance += element;
        if (balance < 0) {
             isBalancePlus = false;
             break;
        }
    }
    return isBalancePlus;
}

console.log(minusBalance(operations, balance)); */

function middlePlusAndMinus (operations) {
    let PlusSum = 0;
    let PlusAmount = 0;
    let MinusSum = 0;
    let MinusAmount = 0;
    for (let i = 0; i < operations.length; i ++) {
        if (operations[i] > 0) {
            PlusSum += operations[i];
            PlusAmount++;
        } 
        if (operations[i] < 0) {
            MinusSum += operations[i];
            MinusAmount++;
        } 

    }
    return [MinusSum/MinusAmount, PlusSum/PlusAmount]
}

console.log(middlePlusAndMinus(operations))


//Условие: Написать функцию, которая принимает массив чисел и возвращает их сумму. Используйте цикл for (или for...of).

const numberQuantity = [100, -50, 30, 20, 40];
let sumNumbersInMassive = 0;
function sumOfNumbers (massivOfNumbers) {
    for (let i = 0; i< massivOfNumbers.length; i++) {
        sumNumbersInMassive += massivOfNumbers[i]
    }
    return sumNumbersInMassive
}

console.log(sumOfNumbers(numberQuantity));

//Условие: Написать функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа. 

const numberQuantity2 = [100, -50, 30, 20, 40];

let newMassive = [];
function numbersPlus (massivOfNumbers) {
    for (let i = 0; i< massivOfNumbers.length; i++) {
        if (massivOfNumbers[i] < 0) {
            continue;           
        } else {
            newMassive.push(massivOfNumbers[i])
        }
    }

    return newMassive;
}

console.log(numbersPlus(numberQuantity2))


// Условие: Написать функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.
const numberQuantity3 = [100, -50, 30, 20, 40];

function doubleElements (massivOfNumbers) {
    const doubleMassive = massivOfNumbers.map((element) => element * 2)
    return doubleMassive;
}
console.log(doubleElements(numberQuantity3))


// Условие: Написать функцию, которая принимает массив строк и число minLength. Функция должна вернуть новый массив, содержащий только те строки, длина которых больше или равна minLength.

const numberQuantity4 = [100, -50, 30, 20, 40];

let minLength = 1000;

function findNumbersMoreThanMin (massivOfNumbers) {
    const massivWithBigNumbers = massivOfNumbers.filter((element) => element > minLength)
    return massivWithBigNumbers
}
console.log(findNumbersMoreThanMin(numberQuantity4))


//Условие: Написать функцию, которая принимает массив чисел и возвращает их сумму.

const numberQuantity5 = [100, -50, 30, 20, 40];
function sumNumbers (massivOfNumbers) {
    const summa = massivOfNumbers.reduce((acc, element) => {
         return acc += element;
    }, 0)
    return summa  
}
console.log(sumNumbers(numberQuantity5))


// Условие: Написать функцию высшего порядка createMultiplier, которая принимает число multiplier. Функция должна возвращать другую функцию, которая принимает число и возвращает результат умножения этого числа на multiplier.

function createMultiplier (multiplier) {
    return function (number1) {
        return multiplier * number1;
    }
}

const resultMultiplier = createMultiplier(2);
console.log(resultMultiplier(7))

//Написать функцию, которая принимает два массива чисел и возвращает новый массив, содержащий только уникальные числа, которые присутствуют хотя бы в одном из массивов (не дублируются ни в первом, ни во втором массиве).


//Напишите функцию, которая принимает массив чисел и возвращает сумму всех четных чисел в массиве, используя цикл for. Если массив пуст, функция должна вернуть 0.
let sumOfEvenNumbers = 0;
function returnSum (randomMassive) {
    if (randomMassive.length === 0) {
        return 0;
    }
    for (let i = 0; i < randomMassive.length; i ++) {
        if (randomMassive[i] % 2 === 0) {
            sumOfEvenNumbers += randomMassive[i]
        } else {
            continue;
        }
    }
    return sumOfEvenNumbers;
}

console.log(returnSum([1, 2, -5, -2, 4, 7, 3]))


//  Напишите функцию, которая принимает массив строк и возвращает количество строк, длина которых больше 5 символов. Используйте цикл for...of.
let amountOfLengthMoreFiveStrings = 0;

const randomMassive2 = ['Никита', 'Рыба', 'Аквариум', 'Перфоратор', 'Морж']
function amountOfStrings (massiveOfStrings) {
    for (const element of massiveOfStrings) {
        if (element.length > 5) {
            amountOfLengthMoreFiveStrings++;
        } else {
            continue;
        }
    }
    return amountOfLengthMoreFiveStrings;
}

console.log(amountOfStrings(randomMassive2))

//  Напишите функцию, которая принимает массив чисел и возвращает наибольшее число в массиве. Функция должна обрабатывать случай, когда массив пуст, возвращая null. Используйте цикл for.
const numbersInMassive = [3, 2, 4, 5, 1, 9, 2, 3];
let theBiggestNumber = 0;
function returnTheBiggestNumber (massiveOfNumbers) {
    let max = massiveOfNumbers[0];
    if (massiveOfNumbers.length === 0) {
        return null;
    }
    for (let i = 0; i < massiveOfNumbers.length; i++) {
        if (massiveOfNumbers[i] > max) {
            max = massiveOfNumbers[i];
        }
    }
    return max;
}

console.log(returnTheBiggestNumber(numbersInMassive))

//  Напишите функцию, которая принимает число и возвращает строку “Четное” если число четное, “Нечетное” если нечетное, и “Ноль” если число равно 0. Используйте условный оператор ternary.


function isEvenNumber (number) {
    return number === 0 ? 'Ноль' : number % 2 === 0 ? 'Четное' : 'Нечетное'
}
const value = isEvenNumber(0);
console.log(value)


// //Задача1. Найти среднее значение последовательности чисел с помощью reduce.

 const numberssss = [1, 4, 4, 10];

 const averageNumberAmongNumbers = numberssss.reduce((acc, numberrrr, i) => {
    console.log(`Аккумулятор: ${acc}, Текущее значение: ${numberrrr}, Индекс: ${i}`)
    if (i !== numberssss.length - 1) {
        return acc + numberrrr
    } else {
        return (acc + numberrrr) / numberssss.length
    }

 }, 0)

 console.log(averageNumberAmongNumbers)


 // Дано массив чисел. Найдите произведение всех чисел в массиве, которые больше 5. Если массив пуст, верните 1.

const massiveNumbers = [1, 2, 7, 8, 9];

function multiplyOfNumbersThatMoreThanFive (massiveNumbers) {
        if (massiveNumbers.length === 0 || !Array.isArray(massiveNumbers)) {
            return 1;
        }
        if (massiveNumbers.some((element) => element >5) === false) {
            return 'В массиве нет элементов больше 5'
        }      
    const multiplyOfNumbers = massiveNumbers
        .filter((element) => element > 5)
        .reduce((acc, currentNumber) => {
            return acc * currentNumber
        })
    return multiplyOfNumbers
}

console.log(multiplyOfNumbersThatMoreThanFive(1))

/* Правила распределения:

Создайте три новые группы - "High", "Medium", "Low".
Студенты с оценкой 4 или 5 должны попасть в группу "High".
Студенты с оценкой 3 должны попасть в группу "Medium".
Студенты с оценкой 1 или 2 должны попасть в группу "Low".
const students = [
    { name: "Alice", grade: 4, group: "A" },
    { name: "Bob", grade: 2, group: "B" },
    { name: "Charlie", grade: 3, group: "C" },
    { name: "Diana", grade: 5, group: "A" },
    { name: "Eve", grade: 1, group: "B" },
  ];
  
  const distributedGroups = distributeByGrade(students);
  console.log(distributedGroups);
  
    Результат должен быть таким:
    {
        High: [
          { name: "Alice", grade: 4, group: "High" },
          { name: "Diana", grade: 5, group: "High" }
        ],
        Medium: [
          { name: "Charlie", grade: 3, group: "Medium" }
        ],
        Low: [
          { name: "Bob", grade: 2, group: "Low" },
          { name: "Eve", grade: 1, group: "Low" }
        ]
    } High: [], Medium: [], Low: [] */
 
/* const students = [
    { name: "Alice", grade: 4, group: "A" },
    { name: "Bob", grade: 2, group: "B" },
    { name: "Charlie", grade: 3, group: "C" },
    { name: "Diana", grade: 2, group: "A" },
    { name: "Eve", grade: 1, group: "B" },
];

function distributeByGrade (students) {
    if (!students) {
        return {};
    }
    let high = [];
    let medium = [];
    let low = [];
    for (let student of students) {
        switch (true) {
            case student.grade >= 4:
                student.group = 'High';
                high.push(student)
                break;
            case student.grade === 3:
                student.group = 'Medium';
                medium.push(student)
                break;
            case student.grade < 3 && student.grade >= 1:
                student.group = 'Low';
                low.push(student)
                break;
            default:
                student.group = 'Отрицательный грейд'  
        }
    }
    return {
        High: high,
        Medium: medium,
        Low: low
    }
}
console.log(distributeByGrade(students)) */
console.log('-------------------------------------')
const products = [
]

function addProduct (name, price, quantity) {
    if (typeof name !== 'string' || (typeof price !== 'number' || typeof quantity !== 'number')) {
        return;
    }
    const newObj = {
        name,
        price,
        quantity
    }
    products.push(newObj);
}

function getTotalValue () {
    let sum = 0;
    for (const product of products) {
        sum +=product.price;
    }
    return sum;
}

function findProductByName (name) {
    const productByName = products.find((element) => element.name === name);
    if (!productByName) {
        return;
    }
    return productByName;
}

function getProductWithDiscount (discount) {
    const discountInNumber = discount / 100;
    for (const product of products) {
        product.price = product.price - product.price * discountInNumber; 
    }
    return products;
}

addProduct('Яблоко', 50, 10)
addProduct('Груша', 100, 5)
addProduct('Апельсин', 200, 3)
addProduct('Клубника', 500, 7)
console.log(products)
const totalValue = getTotalValue();
console.log(totalValue)
const productByName = findProductByName('Яблоко')
console.log(productByName)
getProductWithDiscount(35)
console.log(products)

/* Задача 1: “Фильтрация и преобразование массива”
Описание:
Дан массив чисел. Вам нужно написать функцию, которая фильтрует массив, оставляя только четные числа, а затем возводит каждое из них в квадрат. */
const numbers = [5, 3, 6, 9, 11, 12];
function evenSquare (massiveNumbers) {
    const newMassive = massiveNumbers
    .filter((massiveNumber) => {
        if (massiveNumber % 2 == 1) {
            return false;
        } else {
            return true;
        }
    })
    .map ((massiveNumber) => massiveNumber ** 2)
    return newMassive;
}
console.log(evenSquare(numbers))

/* На вход программе подаётся одна строка. Напишите программу, которая определяет сколько в ней одинаковых соседних символов. */
const stringg = 'Никита 11 Баарррмин'
function identicalSymbols (string) {
    let quantityNeigbours = 0;
    let previousChar = '';
    for (el of string) {
        if (el === previousChar) {
            quantityNeigbours++;
        }
        previousChar = el;                           
    }
    return quantityNeigbours;
}
console.log(identicalSymbols(stringg))

/* Дано натуральное число. Напишите программу, которая определяет, состоит ли указанное число из одинаковых цифр. */

function sameNumber (number) {
    const stringNumber = String(number);
    let theSameNumber = false;
    const firstNumber = stringNumber[0];
    if (stringNumber.length <= 1) {
        theSameNumber = true;
        return theSameNumber;
    }
    for (const element of stringNumber) {
        if (element == firstNumber) {
            theSameNumber = true;
        } else {
            theSameNumber = false;
        }
    }
    return theSameNumber;
}
console.log(sameNumber(555555))

// Есть строка с различными натуральными числами. Необходимо переставить местами максимальный и минимальный элемент.

function maxAndMinChanged (number) {
    let stringNumber = String(number);
    if (isNaN(String(number))) {
        return;
    }
    let maxElement = stringNumber[0];
    let minElement = stringNumber[0];
    for (element of stringNumber) {
        if (element > maxElement) {
            maxElement = element;
        }
        if (element < minElement) {
            minElement = element;
        }        
    }
    
    if (maxElement == minElement) {
        return stringNumber;
    }
    const tempChar = '*';
    let tempString = stringNumber.replaceAll(maxElement, tempChar);
    let newString = tempString.replaceAll(minElement, maxElement);
    newString = newString.replaceAll(tempChar, minElement);
    return newString; 
}
console.log(maxAndMinChanged(29318));

/* Задача 2: Фильтрация массива чисел
Описание: Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только те числа, которые больше среднего значения исходного массива. */

function filterNumbers (massive) {
    const sum = massive.reduce((acc, currentNumber, id) => {
        if (id !== massive.length - 1) {
            return acc += currentNumber
        } else {
            return (acc + currentNumber) / massive.length
        }
    }, 0);
    const filter = massive.filter((element) => element > sum)
    return filter;
}
const average = filterNumbers([10, 2, 3, 4, 5])
console.log(average)



/* Задача 4: Проверка на палиндром (с учетом регистра и пробелов)
Описание: Напишите функцию, которая проверяет, является ли строка палиндромом (читается одинаково в обоих направлениях), игнорируя регистр и пробелы.
 */

function palindromString (string) {
    const cleanString = string.toLowerCase().trim()
    const palindrom = cleanString.split('').reverse().join('')
    console.log(palindrom)
    return cleanString == palindrom;
}
const what = palindromString('saippuakivikauppias')
console.log(what)

/* Задача 1: Преобразование массива в объект “счетчик”
Описание: Дан массив строк. Необходимо создать объект, в котором ключами будут уникальные строки из массива, а значениями - количество раз, которое каждая строка встречается в массиве. */

function massiveCounter (massiveString) {
    const counts = {};
    massiveString.forEach((element) => {
        counts[element] = (counts[element] || 0) + 1;
    })
    return counts;    
}
console.log(massiveCounter(['a', 'b', 'c', 'a', 'a', 'b', 'c', 'c']))

/* Задача 4: Преобразование массива объектов в объект-словарь
Описание: Дан массив объектов, каждый из которых имеет свойства id и name. Нужно создать объект, где ключами будут значения свойства id, а значениями - значения свойства name. */

function objectDictionary (list) {
    const objectDiction = {};
    list.forEach((element) => {
        objectDiction[element.id] = element.name
    })
    return objectDiction;
}

const list = [
    {id: 'one', name: 'Никита'},
    {id: 'two', name: 'Андрей'},
    {id: 'three', name: 'Александр'}
]
console.log(objectDictionary(list))



/* Описание: Напишите функцию, которая принимает массив и размер группы chunkSize и возвращает массив массивов,
где каждый внутренний массив содержит не более chunkSize элементов из исходного массива.*/

function listOfLists (list, size) {
    const newMassive = []
    for (let i = 0; i < list.length; i+=size) {
        newMassive.push(list.slice(i, i + size))
    }
    return newMassive;
}
console.log(listOfLists([1, 2, 3, 4, 5, 6, 7, 8], 3))

/* Задача 1: Трансформация массива в строку с условием
Описание: Дан массив объектов, каждый из которых имеет свойства name и isAvailable. Напишите функцию,
которая формирует строку со списком доступных (isAvailable: true) имен, разделенных запятой и пробелом.
Если в массиве нет доступных имен, функция должна вернуть строку “Нет доступных товаров”.*/

function transformationArrayInString (array) {
    const massiveForJoin = [];
    const iterationObject = Object.keys(array);
    for (const element of iterationObject) {
        if (array[element].isAvailable) {
            massiveForJoin.push(array[element].name)
        } if (!array[element].isAvailable) {
            continue;
        }
    }
    if (massiveForJoin.length === 0) {
        return 'Нет доступных товаров'
    }
    console.log(massiveForJoin)
    const string = massiveForJoin.join(', ')
    return string;    
}
console.log(transformationArrayInString([{name: 'Никита', isAvailable: true}, {name: 'Андрей', isAvailable: false}]))

/* Задача 2: Сортировка и фильтрация массива строк по длине и алфавиту
Описание: Дан массив строк. Напишите функцию, которая фильтрует массив,
оставляя только строки длиной более 3 символов, затем сортирует отфильтрованный массив по длине строк (от самой короткой к самой длинной),
а затем сортирует строки одинаковой длины в алфавитном порядке. */

function sortAndFilter (array) {
    const newMassive = array
    .filter((element) => {
        if (element.length > 3) {
            return element
        }
    })
    .sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length    
        } else {
            if (a < b) { // чем меньше UniCode-код символа, тем выше он в алфавитном порядке. И строки с одинаковыми символами сравнивает посимвольно
                return -1
            }
            if (a > b) {
                return 1
            }
        }
    })
    return newMassive
}
console.log(sortAndFilter(['никита', 'арбуз', 'оп', 'два', 'четыр', 'абгд', 'шест']))












          