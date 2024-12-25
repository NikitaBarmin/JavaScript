//Задача 1
/* Вася положил в банк 12 000% на вклад 7% годовых с капитализацией 1 раз в месяц. Сможет ли он купить дом за 13 500$ через два года после снятия вклада. И вывести остаток.
Итог = Сумма * (1 + 7%(не в процентах а в долларах)) ^ кол-во месяцев */
const money = 12000;
const homeCost = 13500;
const time = 24;
let percent = 0.07;
const monthPercent = percent / 12; 
const result = money * (1 + monthPercent)**time
if (result > homeCost) {
    console.log(`Вы можете позволить себе купить этот дом, так как ваш капитал составляет: ${result}. Остаток составляет: ${result - homeCost} `)
} else {
    console.log(`Вы не сможете позволить себе купить этот дом, так как ваш капитал составляет: ${result}. Вам не хватает: ${homeCost - result} `)
}

/* Про операторы равенства. == - нестрогое (не учитывает тип), === - строгое (учитывает тип). На практике лучше не использовать нестрогое и всё оборачивать в Number() (приводить к числу). */


//Switch case

const role = 'admin';

switch(role) {
    case 'manager': // проверяет, role === manager, очень важно что оператор равенства строгий
        console.log('Ваша роль: менеджер');
    case 'admin':
        console.log('Ваша роль: админ');
        break;
    case 'ceo':
        console.log('Ваша роль: ceo');
        break;
    default:
        console.log('Мы тебя не знаем')
}
const number = 1;
switch(true) {
    case number > 0: // проверяет, true === number > 0
        console.log('Число положительное');
        break;
    case number < 0:
        console.log('Число отрицательное');
    default:
        console.log('Ноль')
}

/* Также можно не ставить брейк в каком то поинте. Тогда будут проверяться сразу два кейса до брейка. */


//Тернарный оператор

const moneyy = 2000;
const bmwPrice = 100000;
const fordPrice = 10000;

let message;
if (moneyy > bmwPrice) {
    message = 'Куплю бмв'
} else if (moneyy > fordPrice){
    message = 'Куплю форд'
} else {
    message = "Куплю велосипед"
}
console.log(message)

//Тоже самое но с помощью тернарного оператора:

const moneyy1 = 20000;
const bmwPrice2 = 100000;
const fordPrice3 = 10000;

const str = moneyy1 > bmwPrice2 ? 'Куплю бмв' : moneyy1 > fordPrice3 ? 'Куплю форд' : 'Куплю велосипед'
console.log(str)
/* Плюсы тернарного оператора ещё в том, что внутри шаблонной строки мы можем записывать тернарный оператор, так как он является "присваиванием к какой то переменной". if например засунуть в шаблон мы не можем так как это условие */

//Задача 2
/* Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 +/- 15?". Если ответ верен выведите в консоль: "Успех", если нет - "вы робот". Если после этого он введет "Я не робот", то тоже "успех". */

/* const answer = Number(prompt('Сколько будет 7+/-15?'));
const answer1 = 22;
const answer2 = -8; */

if (answer === answer1) {
    console.log('Успех')
} else if (answer === answer2) {
    console.log('Успех')
}  else {
    const answerText = prompt('Сколько будет 7+/-15? Если затрудняетесь, введите: "Я не робот"');
    switch(true) {
        case answerText === 'Я не робот':
            console.log('Успех')
        break;
        default:
            console.log('Вы робот!')
    }
}

const res = prompt('Сколько будет 7+/-15?');
const answer1 = 22;
const answer2 = -8;

if (res === 'Я не робот') {
    console.log('Успех')
} else {
    const numberRes = Number(res)
    switch(numberRes) {
        case 22:
        case -8:
            console.log('Успех')
        break;
        default:
            console.log('Вы робот!')
    }
}



/* switch(true) {
    case answer === 22:
        console.log('Успех');
        break;
    default:
        console.log('Вы робот!')
    
}
 */