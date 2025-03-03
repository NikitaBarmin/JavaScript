'use strict'
// Set - это множество уникальных (но необязательно однотипных) объектов. Множество может содержать разные типы данных, но все они буду уникальными (потом расскажут).
/* В общем и целом, set это тот же самый массив, только который содержит уникальные элементы. Используется в кейсах когда нам из массива нужно достать только уникальные элементы, переводим массив в set, а потом обратно в массив через spread syntax. Так как set это относительно новая штука (добавилась с es6), методы для работы с ним отличаются от методов работы с массивом. */

const arrayElements = ['Никита', 'Никита', 'Славик', 'Виталя', 'Никита', 'Андрей', 'Андрей']
const setArrayOfElements = new Set(arrayElements)
console.log(setArrayOfElements) // вернет множество УНИКАЛЬНЫХ обьектов, в котором все повторения соответственно уберутся
setArrayOfElements.clear() // удалит все элементы из set, останется пустой set
setArrayOfElements.add('Никита') // добавит элемент
setArrayOfElements.add('Андрей') // добавит элемент
setArrayOfElements.add('Славик') // добавит элемент
setArrayOfElements.delete('Никита') // удалит элемент
console.log(setArrayOfElements.has('Никита')) // вернет true если есть, false если нет
console.log(setArrayOfElements)

for (const element of setArrayOfElements) {
    console.log(element) // по set можно спокойно итерироваться
}

for (const index in setArrayOfElements) {
    console.log(index) // но это не сработает так как set в отличии от массива не имеет индексов элементов (не использует свойства для хранения элементов), а хранит элементы во внутренней структуре данных. так что можно for of forEach но не for in
}

const arrayObj = new Set([{a: 1}, {b: 2}, {b: 2}])
console.log(arrayObj) // может работать и с массивом, который содержит элементы ссылочного типа данных, но он не будет выводить только уникальные, а выведет все (set предназначен для простых типов данных)
/* console.log(new Set({b: 2})) // а вот тут уже выведет ошибку так как set может использоваться только в итерируемых обьектах, обьект же не итерируемый */
console.log(new Set('abcda')) // а вот тут работает
const arrayFlights = ['Paris', 'London', 'Moscow', 'Moscow', 'Paris', 'Madrid']
const setArrayOfFlights = new Set(arrayFlights)
console.log([...setArrayOfFlights]) // вот основная задача set, взять массив, переделать его в set (только уник значения), че то с ними сделать а потом с помощью spread syntax сделать из set массив


// Map это по сути тот же самый объект, но с некоторыми различиями. Как "под капотом" работает Map: как и в объектах есть ключи и значения. но сразу отличие: В ОБЪЕКТАХ КЛЮЧ МОЖЕТ БЫТЬ STRING, SYMBOL, В MAP ЖЕ ЛЮБОЙ ТИП ДАННЫХ МОЖТ БЫТЬ КЛЮЧОМ. Хеш-функция (Hash Function): Хеш-функция преобразует ключ в числовое значение (хеш-код). Этот хеш-код используется для определения, в каком “бакете” хранить данные, связанные с этим ключом. Бакеты (Buckets): Бакеты - это, по сути, ячейки в таблице, где хранятся пары “ключ-значение”. Если разные ключи имеют одинаковый хеш-код (это называется коллизией), они могут быть помещены в один и тот же бакет. Обработка коллизий (Collision Handling): Когда происходит коллизия (два ключа имеют одинаковый хеш-код), используются различные методы для разрешения этой ситуации. Общие методы включают: Chaining (Цепочки): Каждый бакет содержит связанный список (linked list) пар “ключ-значение”. Когда происходит коллизия, новая пара просто добавляется в список. Open Addressing (Открытая адресация): Если бакет занят, ищется другое свободное место в таблице (например, путем линейного или квадратичного пробирования).  */
/* Отличия map от object еще раз:
map более производительный и оптимизированный для частых операций. Map использует хеш-функции для быстрого определения местоположения элемента в памяти. Это позволяет выполнять операции поиска, вставки и удаления за время, близкое к O(1) (в среднем случае).;
любой ключ;
можно получить size методом (объект такого не имеет),
не имеет stringify и parse (объекты в этом плане лучше) */


//Основы работы с map
console.log('Лекция 4:--------------')

const weatherMap = new Map(); // создали map, пока что он пустой
weatherMap.set('Moscow', '10') // добавляем элемент где первое значение это key, второе value.
weatherMap.set('Paris', '15')
console.log(weatherMap.set('Hello', 'Привет')) // когда присваиваем set в консоль, она также выводит map, следовательно можем делать цепочку (chain) из сетов
weatherMap
    .set(1, 5)
    .set(true, 'yes') // в отличие от объекта, key может быть чем угодно
    .set([1,2,3], 'array')
    .set({a: 1}, {b: 1}) // объекты и массивы также можем
console.log(weatherMap)
console.log(weatherMap.get('Moscow')) // получили value по ключу
console.log(weatherMap.has('Moscow')) // true - такой элемент есть, no - нет
console.log(weatherMap.delete('Moscow')) // вот тут уже такой момент, delete это по сути операция, если присваиваем ее в консоль то она выводит true если элемент есть и был удален, false если нет
weatherMap.delete('Moscow') // а вот так просто удаляем

console.log(weatherMap.get([1,2,3])) // выдаст undefined так как массивы(объекты) не примитивы. в map хранится одна ссылка на значене, когда пишем простой массив в get это уже другая ссылка. Так что не примитивы нужно закидывать в отдельную переменную и потом уже ее в key чтобы сохранять ссылку.

//Быстрое создание map
console.log('Лекция 5:--------------')

const weatherFastMap = new Map([
    ['Moscow', '10'],
    ['Paris', '15']
])
console.log(weatherFastMap) // массив массивов это и есть по сути Map

const weatherObj = {
    moscow: '10',
    paris: '15'
}
console.log(Object.entries(weatherObj)) // представляет объект как массив массивов
/* Но это еще не полноценный map. */
console.log(new Map(Object.entries(weatherObj))) // а вот это уже map. Например есть огромный объект и нам надо узнать его size, мы его быстро конвертируем в map, с помощью size ищем размер и обратно

//Итерация по map
console.log('Лекция 6:--------------')

const weatherMapForIteration = new Map([
    ['Moscow', 10],
    ['Paris', 15]
])

for (const entry of weatherMapForIteration) {
    console.log(entry) // вернет два массива из map
}

for ( const [key, value] of weatherMapForIteration) {
    console.log(key)
    console.log(value) // деструктуризировали entry на key и value, вернет отдельно ключи и значения. нужно когда надо пройтись по map и куда то переложить значения. Для работы со значениями есть set get
}

console.log([...weatherMapForIteration]) // с помощью spread syntax делаем из map массив массивов
console.log([...weatherMapForIteration.keys()]) // отдельно массив ключей
console.log([...weatherMapForIteration.values()]) // отдельно массив значений
console.log(weatherMapForIteration.values()) // без spread syntax вернет MapIterator c которым мы по словам ларичева взаимодействовать щас не можем, потом надеюсь объяснит

//Упражнение 1
/* Необходимо поменять местами ключи и значения. */
console.log('Лекция 7. Упражнение. ------------------')
const mapForExersize = new Map([
    ['Москва', 10],
    ['Paris', 15],
    ['London', 7]
])

const newmapForExersize = [...mapForExersize].map((el) => el.reverse()) // тут можно это всё сразу в new Map обернуть
console.log(new Map(newmapForExersize))

const newMap = new Map()
for (const [key, value] of mapForExersize) {
    newMap.set(value, key)
}
console.log(newMap)

// WeakMap и WeakSet
console.log('Лекция 8 ------------------------------')

let a = {a: 1}
const weakMap = new WeakMap();
console.log(weakMap.set(a, 'Hello')) 
// у WeakMap структура такая же как и у Map, но есть много НО. В качестве ключа принимает только ссылочные типы данных (обьекты массивы), не предотвращает от сборки мусора, то есть как только ссылка становится "неактивной", объект через какое то время удаляется сборщиком мусора автоматически. Используется редко но самый очевидный кейс это при чистке кэша. Нельзя по WeakMap ни бежать циклом, ни использовать кучу разных методов как в Map, только база добавить удалить.
a = null;
setTimeout(() => {
console.log(weakMap)
}, 1000) // вывдет уже пустую мапу, автоматически пустое значение отчистилось сборщиком

let c = {c: 1}
let d = {d : 1}

const weakSet = new WeakSet([c, d])
c = null;
setTimeout(() => {
    console.log(weakSet)
}, 1000) // работает аналогично weakMap, встречается ещё реже









