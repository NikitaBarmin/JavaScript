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