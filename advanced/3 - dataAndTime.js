// Создание дат
const nowTime = new Date()
console.log(nowTime) // Mon Feb 24 2025 17:37:38 GMT+0300 (Москва, стандартное время)

console.log(new Date('07-22-2004')) // можем создать свою дату, июль 22 число 2004г
console.log(new Date('07/22/2004')) // тоже валидный способ
console.log(new Date('2004/07/22')) // тоже валидна (год месяц число)
console.log(new Date('22 Jul 2004')) // тоже валидна
console.log(new Date('22 июля 2004')) // Invalid date как и если наприме мы число с месяцем местами поменяем, порядок важен

console.log(new Date(2004, 7, 22)) // можно записывать аргументами, год месяц число НО, месяцы идут не с 1 по 12, а с 0 по 12 (0 - январь), следовательно 7 месяц это август
console.log(new Date(2004, 15, 22)) // 15 месяц в данном случае это третий после января (12 январь, 13 февраль, 14 март, 15 апрель). 15 по сути == 3 но год в 15 месяце уже 2005 что очевидно
console.log(new Date(2025, 1, 24 + 100)) // можно добавлять дни, получится дата через 100 дней после сегодняшнего числа
console.log(new Date(0)) // выдаст дату эпохи unix (момент отправной точки для многих компьютерных систем). 0 значит что с этого момента прошло 0 миллисекунд (грубо говоря начало)
console.log(new Date(1 * 24 * 60 * 60 * 1000)) // на один день позже unix date
console.log(Date.now()) // возвращает количество миллисекунд, которое прошло с момента начала unix date
console.log(new Date(Date.now())) // вернет время текущее

console.log(nowTime.getDate())
console.log(nowTime.getFullYear())
console.log(nowTime.getMonth())
console.log(nowTime.getDay()) // выдаст 1 так как понедельник
console.log(nowTime.getSeconds())
console.log(nowTime.getDate()) // выдаст 24 так как 24 число
console.log(nowTime.getTime()) // миллисекунды от unix

console.log(new Date(nowTime.setFullYear(2030))) // ну и если можно брать, значит можно и установить, поменяли год с 2025 на 2030

// Операции с датами
console.log('Лекция 2 ----------------------------')
// Часто встретимся с кейсами, где нужно вычесть одну дату из другой чтобы получить какую то разницу (для даты постов например, вчера сегодня)
const date1 = new Date(2025, 1, 24)
const date2 = new Date(2025, 1, 24)
console.log(Number(date1)) // кол-во мил с unix
console.log(Number(date2)) // кол-во мил с unix
console.log(Number(date2 - date1)) // разница в мил

function differenceInDay (first, second) {
    return (second - first) / (1000 * 60 * 60 * 24)
}
console.log(differenceInDay(date1, date2)) // 28 дней разницы. чтобы месяц определить это уже сложнее так как есть разное кол во дней, но это все равно можно реализовать

// Сравнение дат
console.log('Лекция 3 ----------------------------')
console.log(date1 < date2) // true
console.log(date1.getTime() < date2.getTime()) // сравнение сверху подразумевает это сравнение
console.log(date1 == date2) // я поставил одинаковые даты но все равно false, потому что переменная хранит только ссылку на объект в стэке (базу не забываем)
console.log(date1.getTime == date2.getTime) // а вот так уже true
console.log(Number(date1) == Number(date2)) // и вот так true
console.log(+(date1) == +(date2)) // и вот так true) 

// Упражнение 1
/* Необходимо сделать функцию, которая проверяет, сегодня ли день рождение у пользователя */
const user = {
    name: 'Vasia',
    birthday: '02/24/2021'
}
function happyBirthday (user) {
    const userBirthday = new Date(user.birthday)
    const nowTime = new Date();
    if (userBirthday.getDate() === nowTime.getDate() && userBirthday.getMonth() === nowTime.getMonth()) {
        return true;
    } 
    return false;
}
console.log(happyBirthday(user))


// Интернализация дат
console.log('Лекция 5 ----------------------------')

const dataForTraining = new Date();
console.log( new Intl.DateTimeFormat('ru-Ru').format(dataForTraining)) // выведет 24.02.2025 (так как 'ru-Ru)
console.log( new Intl.DateTimeFormat('en-US').format(dataForTraining)) // в сша 2/24/2025
//Но также можно работать персонально с месяцем днем годом секундой ну и так далее. Также как и в случае с числами, вторым аргументом помимо страны DateTimeFormat принимает объект со свойствами
const options = {
    hour: 'numeric',
    minute: 'numeric'
}

const options2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'short',
    year: '2-digit'
}

console.log( new Intl.DateTimeFormat('ru-Ru', options).format(dataForTraining)) // выведет 21:09 (только часы и минуты)
console.log( new Intl.DateTimeFormat('ru-Ru', options).format(dataForTraining)) // выведет 21:09 (только часы и минуты)
console.log( new Intl.DateTimeFormat(navigator.language, options2).format(dataForTraining)) // февраль 25 г. пн в 21:11 (выведет вот это)
console.log( new Intl.DateTimeFormat('en-US', options2).format(dataForTraining)) // February 25 Mon at 9:11 PM

console.log(navigator.language) // выдаст ru-Ru (можем использовать в первом аргументе)