// Для начала нужно понять, что строка это грубо говоря объект (ОБ ЭТОМ РАССКАЖУТ В ОБЬЕКТАХ), состоящий из символов (в основном букв). Следовательно можно к обьекту применять методы.

const myName = 'Никита Бармин';

console.log(myName[0]) // выведет первый символ строки - Н
console.log(myName.charAt(0)) // альтернативный способ вывести первый символ. Но есть еще один нюанс. Если в строке например будет какой то смайл, то он всегда занимает сразу две позиции (можно вывести в консоль например сделав charAt(0) + charAt(1))
console.log(myName.length) // выведет длину строки
console.log(myName.includes('Ник')) // выведет true, если элемента не будет выведет false
console.log(myName.indexOf('а')) // выведет номер индекса, под каким стоит ПЕРВЫЙ элемент из списка элементов строки.
console.log(myName.lastIndexOf('а')) // выведет номер индекса, под каким стоит ПОСЛЕДНИЙ элемент из списка элементов строки.
console.log(myName.slice(3, 9)) // можно и срезать элементы (первый индекс - с какого элемента начинаем (включительно), второй - по какой )невключительно). Напомню, что slice создает новый массив не меняя исходный (также и со строкой).

// Задача 1 Вытащить имя и фамилию в отдельный переменные.

const nameAndSth = 'Никита огромные яйца Бармин';

const name = nameAndSth.slice(nameAndSth[0], nameAndSth.indexOf(' '));
let surname = '';
if (nameAndSth.includes('Бармин')) {
    surname = nameAndSth.slice(nameAndSth.lastIndexOf('Б'))
}
console.log(name)
console.log(surname)

// Преобразование строки
const myName2 = 'Никита Бармин маленький мальчишка'
console.log(myName2.toLowerCase()) // всё в нижний регистр
console.log(myName2.toUpperCase()) // всё в верхний регистр
console.log(myName2.replace('Н', 'Б')) // заменит Н на Б (меняет только первую если их несколько). И НЕОБЯЗАТЕЛНЬО ЧТОБЫ БУКВУ, НА КОТОРУЮ МЫ ХОТИМ ЗАМЕНЯТЬ НАШУ, УЖЕ БЫЛА В СТРОКЕ
console.log(myName2.replaceAll('н', 'б')) // заменит все н на б
console.log(myName2.replace(/н/, 'б')) // работает аналогично replace (это если что регулярное выражение, про них также потом расскажут)
console.log(myName2.replace(/н/g, 'б')) // работает аналогично replaceAll (это если что регулярное выражение, про них также потом расскажут)
console.log(myName2.startsWith('Н')) // если стартует с этого элемента вернет true, нет - false
console.log(myName2.endsWith('а')) // если заканчивает этим элементом вернет true, нет - false


const myName3 = '     Никита Бармин чудак        '
console.log(myName3)
console.log(myName3.trim()) // уберет пробелы с конца и начала
console.log(myName3.trimStart()) // уберет пробелы с начала
console.log(myName3.trimEnd()) // уберет пробелы с конца


// Задача 2
//сделать функцию, которая выводит true если номер прошел проверку на то что он из РФ, false в обратном

/* true номера:
1. '+79306932447'
2. '+7(930)6932447'
3. '89306932447'
4. '+7 (910) 693-24-47'
4. '   +7 (910)   693-24-47    ' 

false номера:
1. '8923223'
2. '9+79233332432'
3. '893069324g7'
4.'+7d930693-d4-47' */

let number = '8(930)  693-24-47'
function iSRussianNumber (number) {
    number = number.trim();
    number = number.replaceAll('(', '');
    number = number.replaceAll(')', '');
    number = number.replaceAll('-', '');
    number = number.replaceAll(' ', '');
    number = number.replace('+7', '8');
    if (number[0] != 8) {
        return false;
    }
    if (number.length !=11) {
        return false;
    }
    for (let i = 0; i < number.length; i++) {
        if (isNaN(Number(number[i]))) {
            return false;
        }
    }
    return true;    
}
console.log(iSRussianNumber(number))

//Строки и массивы
// .split() - из строки в массив, внутри принимает символ, по какому мы будем разделять.
// .join() - из массива в строку, внутри принимает символ, какой будет стоять между элементами бывшего массива в строке

const name4 = 'Никита Бармин Павлович'

const [name3, surname3, middle_name] = name4.split(' ')
console.log(name3) // Выведет Никита
console.log(surname3) // Бармин
console.log(middle_name) // Павлович

const name5 = ['Никита', 'Бармин', 'Павлович'];
console.log(name5.join(' ')) // делает из массива строку и элементы разделяет пробелом


//Дополнение строк

const film = 'Остров проклятых';

console.log(film.padStart(film.length + 1, '*')) // в чем суть padStart (и padEnd). Позволяет нам сместить нашу строку на количество элементов, указанных в первом аргументе (в данном случае сместил на +1 от длины. А вторым аргументом как раз таки указывается то, что нужно на это место ставить). padEnd аналогично
console.log(film.padStart(film.length + 10, '*').padEnd(film.length + 1, '!')) // вот так не сработает, так как на моменте преобразования padStart создается новая строка, уже не film. а padEnd работает с длиной строки film.
let startFilm = film.padStart(film.length + 1, '*')
const result = startFilm.padEnd(startFilm.length + 1, '*')
console.log(result) // а вот так сработает

console.log(film.repeat(5)) // повторяет строку столько раз, сколько указано в аргументе. если хотим между строками пробел, то (в нашем случае в film), в конце нужно добавить пробел (repeat повторяет всё слитно)


// Задача 3
//Замаскировать всё кроме последних 4х символов.
/* const card = '23234345324545';
* ********4545 */
const card = '23234345324545';

console.log(card.slice(-4).padStart(card.length, '*'))


















