
for (let i = 0; i < 10; i++) {
    console.log(`Наш баланс: ${i} евро`) // цикл, где первое это с чего начинаем, второе это ограничение, третье шаг
}
const massive = ['Задача 1', 'Задача 2', 'Задача 3']

for (let i = 0; i < massive.length; i ++) {
    console.log(massive[i])
}

// continue и break

const massive1 = ['Задача 1', 'Задача 2', 'Задача 3']

for (let i = 0; i < massive1.length; i ++) {
    if (massive1[i] === 'Задача 2') {
        continue; 
    }
    console.log(massive[i]) //continue говорит: "если я встречаюсь, то забей хуй на код который ниже, переходи к следующему значению циклу. В итоге выведет Задача 1 и Задача 3"
}

const massive2 = ['Задача 1', 'Задача 2', 'Задача 3']

for (let i = 0; i < massive2.length; i ++) {
    if (massive2[i] === 'Задача 2') {
        break; 
    }
    console.log(massive[i]) //continue говорит: "если я встречаюсь, то останавливай выполнение цикла и записывай только те элементы массива, которые успели пройти цикл"
}

//Задача 1
/* Вывести в консоль строку "Я люблю JS !" из массива, проходя циклом в обратном порядке, не используя метод ResizeObserverSize. 
const arr = ['i', 'JS', 'люблю', 'Я'] */
/* const arr = ['!', 'JS', 'люблю', 'Я']
for (let i = arr.indexOf(arr[arr.length-1]); i < arr.length; i++) {
    const inNewMassive = arr.splice(arr[i], 1)
    const newArray = newArr.concat(inNewMassive)
    console.log(newArray)
}
const newMassive = [];
for (let i = arr.length - 1; i >= 0; i--) {
    newMassive.push(arr[i])
}
const join = newMassive.join(' ');
console.log(join) */

//Цикл в цикле

const arrayy = [['Никита', 20, 'Дзержинск'], ['Адагамкин', 20, 'Пафос']]
const newArrayy = [];
for (let i = 0; i < arrayy.length; i++) {
    for(let j = 0; j < arrayy[i].length; j ++) {
        newArrayy.push(arrayy[i][j])
    }
}
console.log(newArrayy) // Сделал из массива в котором два массива массив, в котором 6 элементов.

const arrayy1 = [['Никита', 20, 'Дзержинск'], ['Адагамкин', 20, 'Пафос']]

for (let i = 0; i < arrayy1.length; i++) {
    for(let j = 0; j < arrayy1[i].length; j ++) {
        console.log(arrayy1[i][j])
    }
}

// Циклы while и do while
/* Цикл while лучше использовать, когда нам например нужно вынуть из массива элемент по какому то условию. Если просто перебор всех элементов, то for. */

const numberss = [3, 2, 6, 9, 11]

let i = 0;
while (numberss[i] < 10 && i < numberss.length) {
    console.log(numberss[i])
    i++;
} // пока элемент массива меньше 10, он будет их выводить. выведет 3 2 6 9

const numberss2 = [3, 2, 6, 9, 11]

for (let i = 0; i < numberss2.length; i++) {
    if (numberss2[i] > 10) {
        break;
    }
    console.log(numberss2[i]); // то же самое, но с помощью for
}


/* const numberss1 = [3, 2, 6, 9, 11]

for (let i = 0; i < numberss1.length; i++) {
    if (numberss1[i] < 5) {
        continue;
    }
    console.log(numberss1[i]);
} */

/* Цикл do while примечателен тем, что внутрянка цикла стоит перед условием, то есть цикл так или иначе выполнится минимум один раз. */

let j = 0;
do {
    console.log(j)
    i++;
} while(j < 0) // хоть условие когда меньше 0, но все равно выведется 0 (цикл выполнился так как внутрянка перед условием)


//for of and for in

const digits = [1, 5, 6, 7]

for(i = 0; i < digits.length; i++) {
    console.log(digits[i])
}

for(element of digits) {
    console.log(element) // перебирает не индексы, а значения элементов массива
}

for(index in digits) {
    console.log(index) // выведет индексы массива, работает с индексами
}

//Задача 2
/* Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчёта:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
- Расчёта среднего расхода и среднего дохода */


const operations = [1000, -700, 300, -500, 10000];
const beginBalance = 1100;

function findBalance (arrayOfoperations, beginBalance) {
    let balance = beginBalance; 
    for (i = 0; i < arrayOfoperations.length; i ++) {
        balance += arrayOfoperations[i]        
    }
    return balance;
}

console.log(findBalance(operations, beginBalance))

function minusBalance (operations, beginBalance) {
    let balance = beginBalance; 
    let isOkay = true;
    for (i = 0; i < operations.length; i ++) {
        balance += operations[i] 
        if (balance < 0) {
            isOkay = false;
            break;
        }       
    } 
    return isOkay;
}

console.log(minusBalance(operations, beginBalance))

function averageNumber (arrayOfoperations) {
    let minusSum = 0;
    let minusElement = 0;
    let plusSum = 0;
    let plusElement = 0;
    for (element of arrayOfoperations) {
       if (element < 0) {
        minusSum += element;
        minusElement ++;
       }
       if (element > 0) {
        plusSum += element;
        plusElement++;
       }
    }
    return [minusSum/minusElement, plusSum/plusElement]
}

console.log(averageNumber(operations))



