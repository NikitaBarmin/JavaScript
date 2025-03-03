// Лекция 1 - Конвертация и проверка чисел
console.log(10 === 10.0) // true, в js нет отдельных типов как в других некоторых языках (int и float), тут int === float
/* Числа в js при компиляции конвертируются в двоичный код(01), соответственно занимают определенное место в памяти. Также из-за этого есть проблемы с числом 0.1 и с дробными числами.*/
console.log(0.1 + 0.2) // 0.30000000000000004 вот что выдает)))
console.log(0.2 + 0.2) // с этим все норм, только 0.1 шалит

console.log(Number('10 set')) // делает число
console.log(+('10')) // албтернативный способ сделать число

console.log(Number.parseInt('11. set')) // делает тоже самое что и Number, но убирает всё что после точки, и даже если в строке есть текст НО ОНА НАЧИНАЕТСЯ С ЧИСЛА, срежет текст и выведет число. с обычным Number такое не работает (выведет NaN). Также если Number.parseInt('set 11.5) - NaN так как начинается не с числа
console.log(Number.parseFloat('11.5')) // парсит в число включая точку

console.log(Number.isNaN(Number('11fsf'))) // isNan проверяет, удачно ли прошла конвертация. если удачно то выведет false. Но она работает часто не совсем корректно
console.log(Number.isNaN(Number('10 / 0'))) // 10 / 0 === Infinity (бесконечность). В случае с NaN снова выведет false , что это мол число
console.log(Number.isFinite(10 / 0)) // Поэтому есть метод лучше. isFinite - является ли "конечным числом"? в данном случае выведет false

console.log(Number.isInteger(10)) // true
console.log(Number.isInteger(10.4)) // false

//Лекция 2 - Библиотека math
console.log('Лекция 2. ------------------')
/* Math это вообще такой же объект со своими свойствами(методами), которые базовые в этой лекции и опишу. */
console.log(Math.sqrt(36)) // корень
console.log(Math.cbrt(27)) // куб
console.log(36 ** (1/2)) // альтернатива всем этим методам, так можно с любой степенью
console.log(Math.sign(100)) // берет знак числа, но так как в js нет понятий как чисто - и +, от положительного числа sign берет 1 
console.log(Math.sign(-100)) // тут -1
console.log(Math.abs(100)) // модуль (так и будет 100)
console.log(Math.abs(-100)) // будет 100 (модуль)
console.log(Math.exp(3)) // результат экспоненты в 3 степени
console.log(Math.max(1, 2, 5, -7, 19)) // выведет max
console.log(Math.max(1, true, '2', -5, null, 11)) // такая запись тоже валидна
console.log(Math.max(1, true, 'ываыв', -5, null, 11)) // а вот тут уже выведет NaN так как строку без числа он не может сконвертировать
console.log(Math.min(1, 2,3)) // тоже самое только min
/* Но в кейсах у нас редко может встретиться просто строка, обычно массив чисел. */
const arr = [1, 2, 5, 7, -11]
console.log(Math.max(arr)) // NaN, массив не может
console.log(Math.max(...arr)) // а вот когда через spread преобразовали, всё хорошо

console.log(Math.random()) //выведет рандомное число от 0 до 1 (границы указать в качестве параметра нельзя другие), но можно домножить

//Лекия 3 - Округление
console.log('Лекция 3 --------------------')

console.log(Math.round(1.6)) // 2 округление
console.log(Math.round(1.4)) // 1 округление
console.log(Math.ceil(1.6)) // 2 всегда в большую
console.log(Math.ceil(1.4)) // 2 всегда в большую
console.log(Math.floor(1.6)) // 1 всегда в меньшую
console.log(Math.floor(1.4)) // 1 всегда в меньшую
console.log(Math.trunc(1.6)) // обрезает всё что после точки
console.log(Math.trunc(1.4)) //обрезает всё что после точки

console.log((1.49394343).toFixed(1)) // округляет число, в скобках до какого знака, если 0 то в данном случае будет 1, если параметр 1, то будет 1.5 (так как 1.49 округление в большую). метод возвращает строку так что надо в Number оборачивать
console.log(Number((1.493443904390).toFixed(1))) // вот так число

// Упражнение - Функция случайного числа
/*Написать функцию, которая принимает min и max, и возвращает рандомное целое число включая них самих.*/
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) // + 1 так как мы хотим включить max в результаты
}
console.log(randomNumber(1, 2))

// Лекция 5 - Остаток от деления
console.log('Лекци 5 ----------')

console.log(15 % 2) // вернет 1 так как остаток от 15 / 2 = 7 (1) 
console.log(14 % 2) // вернет 0

function isEven (n) {
    return n % 2 === 0;
}
console.log(isEven(12)) // true
console.log(isEven(17)) // false

// Лекция 6 -  Разделитель чисел
console.log('Лекция 6 ----------------------')

const num1 = 350000000
const num2 = 350_000_000.6;
const num3 = 350.000;
const num4 = 350_000;
//num 3 не равно num4 ну очевидно почему
//Также можно использовать "_" в кейсах наприме с валютой
const moneyInPenny = 20_10 // 20 рублей 10 копеек в копейках (2010 копеек)
console.log(num1 === num2) // увидим true. в случаях когда число трудно прочитать, можно для удобства использовать _. сразу скажу, есть ограничения
console.log(Number(num2)) // переведется в число, всё хорошо
console.log(Number.parseFloat(num2))
// У ларичева в Number нельзя было переводить число с _, у меня можно (видимо вышло обновление). Так что юзаем на постоянке

// Лекция 7 - BigInt
console.log('Лекция 7 ----------------')

console.log(Number.MAX_SAFE_INTEGER) // максимально возможное число
console.log(Number.MIN_SAFE_INTEGER) // минимально возможное число
// Если попробуем закинуть в переменную и добавить там +1 или +2 например к max, то получим некорректные результаты.
//Чтобы выйти за рамки этих чисел, в js есть BigInt
console.log(2390328904844388904389053898905389053980n)
console.log(BigInt(2390328904844388904389053898905389053980)) // это два способа сделать BigInt число, но второй не совсем правильный. Если в качестве аргумента кидаем число, снова после определенного знака пойдут некорректные числа так как память заканчивается
console.log(BigInt('2390328904844388904389053898905389053980')) // а вот так уже хорошо, запоминаем и работаем со строкой если через BigInt делаем

console.log(10n + 10n) // из обычных чисел можно тоже делать BigInt но это бесполезно. тут представим что вместо 10 большое число. bigint можно складывать умножать вычитать и т.д.
/* console.log(10n + 10) */ // ошибка (миксовать не можем разные типы)
/* console.log(10.5n) */ // ошибка, bigint не может быть числом с плавающей точкой
console.log(10n / 3n) //вернет 3n, а не 3.3333333333333
console.log(10n < 20) // можно сравнивать, вернет true
console.log(10n == 10) // true
console.log(10n === 10) // false (типы разные)

//Лекция 8 - Интернализация чисел
console.log('Лекция 8 ----------')
/* Часто мы будем встречаться с задачами где надо в зависимости от страны, региона и т.д. указать валюту, погоду и т.д.. Можно было для каждого случая писать функцию, но мы че ебланы что ли? в js есть более умная вещь. */
const options1 = {
    style: 'currency', // стиль валюта значит что число это валюта
    currency: 'RUB' // валюта - рубли 
}
const options2 = {
    style: 'currency', // стиль валюта значит что число это валюта
    currency: 'USD' // валюта - usd 
}
const options3 = {
    style: 'decimal', // числа будут форматироваться как обычные десятичные (будут ставиться пробелы)
}
const options4 = {
    style: 'unit', // градусы
    unit: 'celsius' // по цельсию
}
const options5 = {
    style: 'percent', // проценты
}
const options6 = {
    style: 'currency', // стиль валюта значит что число это валюта
    currency: 'EUR' // валюта - евро 
}
console.log(new Intl.NumberFormat('ru-Ru', options1).format(10000),) // Intl такой же обьект со свойстами (мы создаем new), нам сейчас конкретно интересн numberFormat. Он принимает в себя два аргумента, первый это локацию (в первом примере ru-Ru - Россия. Это значит что наши деньги будут записываться так, как записываются в России. второй опции, по которым мы будем форматировать число. Опций видимо куча, в лекции разобрали только парочку). создаю объект для опций. далее к NumberForman мы применяем метод format, аругментом которого указываем число которое будет у нас выступать в качестве валюты (в данном примере это валюта). в итоге из 10000 мы получим 10 000,00 Р (Ну вместо Р там прикольный знак рубля)
console.log(new Intl.NumberFormat('en-US', options2).format(10000)) // получаем $10,000.00
console.log(new Intl.NumberFormat('ru-Ru', options3).format(10000)) // получаем 10 000
console.log(new Intl.NumberFormat('ru-Ru', options4).format(10)) // получаем 10 и значок градусов
console.log(new Intl.NumberFormat('ru-Ru', options5).format(0.1)) // 10%
console.log(new Intl.NumberFormat('en-US', options6).format(10000)) // 10%

// Задача 2
/* Напишите функцию которая в качестве параметров принимает три аргумента:
- Сумма
- Валюта исходная
- Валюта для конвертации
И возвращает строку уже сконвертированной суммы с постфиксом валюты. Если не смог то null. Для примера 3 валюты. */

function convert (sum, initialCurrency, convertCurrency) {
    const allCurrencies = [
        {name: 'USD', value: 1},
        {name: 'RUB', value: 1/88.17},
        {name: 'EUR', value: 1.05}
    ]
    const initial = allCurrencies.find((element) => {
        return element.name == initialCurrency
    })
    if (!initial) {
        return null;
    }
    const convert = allCurrencies.find((element) => {
        return element.name == convertCurrency
    })
    if (!convert) {
        return null;
    }
    console.log(convert)
    return new Intl.NumberFormat('ru-Ru', {style: 'currency', currency: convert.name}).format(sum * initial.value / convert.value)
}
console.log(convert(10000, 'RUB', 'USD'))
