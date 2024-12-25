let a = 20;
a += 2; // a = a + 2
console.log(a);
a -= 2; //a = a + 2
console.log(a);
a *= 2; //a = a * 2;
console.log(a);

const town = "Дзержинск"
const street = "Циолковского"
console.log(town + ", " + street + " " + 94 + "а")

let b = 41;
console.log (a > b)
console.log (a >= b)
console.log (a < b)
console.log (a <= b)
console.log (a == b)



/* Порядок операторов определяет, какие действия компилируется первее ( операторы это +, -, =, \ и так далее). В основном они все компилируется слева направо, но не все. Есть таблица на MDN (приоритеты операторов) */


//Типы данных

/* JavaScript динамически типизированный язык. Грубо говоря, типы данных не у переменной, а у того что лежит внутри неё. Мы можем менять тип переменной на лету, то есть сначала в ней к примеру лежало число, потом переопределили на строку или undefined и так далее.*/

let d = null;
console.log(typeof d)
let e = 5
let f = 5.5
console.log(typeof e)
console.log(typeof f)
let g = "строка"
console.log(typeof g)
let h;
console.log (typeof h)
let i = undefined
console.log(typeof i)
console.log (typeof (e > f))
/* Ещё есть BigInt для работы с большими числами, которые не поддерживает простая строка, и Symbol, которая создает уникальное значение для каждой строчки. */

// Упражнение 1
/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

const salary = 80;
let hour = 5
let day = 5
const time = hour * day
const order = 40
let lastDays = 11
lastDays -= 2
//1
console.log(lastDays*hour > order)
//2
const money = salary * order
console.log(money)

// Шаблонные строки

const name = "Никита"
const age = 20
const hobby = "тренажерный зал"

const overall = name + ", " + age + " " + "лет" + ": " + "ходит в" + " " + hobby
console.log(overall)
const overall2 = `${name}, ${age} лет: ходит в ${hobby}`
console.log(overall2)

/* Шаблонные строки заметно упрощают запись совместного употребления разных типов данных. */

//Преобразование типов

const one = "10"
const two = 11
console.log(Number(one) + two) // Получим 21
console.log(one + two) // Получим 1011
 /* Boolean() String() Number() - преобразовывают один тип в соответственно булин стринг намбер. Если попробуем преобразовать например строку в число и сложить с чем то, высветится Nan (тип данных number. NaN - not a number) */

//Преобразование в false
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN)) // Всё это false