/* DOM - это обьектное представление нашего исходного HTML-кода. Благодаря дом, мы можем обращаться к элементами html разметки из javascript. DOM это по сути не часть javascript, это часть браузерного API. То есть во время работы с dom, js по сути просто исполняется в браузере. */

//Представление HTML
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./documentObjectModel.js"></script>
</head>
<body>
    <title>Заголовок</title>
</body>
</html> */
// HTML можно представить как дерево, которое начинается с DOCUMENT (это нужно чтобы как раз таки дать возможность обращаться к документу с помощью дом), дальше идет html, head и всё что внутри head, потом body. ВАЖНЫЙ МОМЕНТ. в боди идет тайтл, и от тайтла идет текст (к тексту видимо обращаемся тоже как к элементу)

//Выбор и манипуляция с элементами
console.log(document) // выведет в консоль нашу html разметку
// По поводу подключения js файла, можно встретить подкл как в head, так и в конце body. Рекомендуется в конце body, так как когда подключаем в head, браузер начинает загрузку файла, встречает js script, приостанавливает загрузку дальнейшего html пока не отработает js код (из-за этого пользователи могут видеть на какое то время непрогруженную страницу)
console.log(document.body) // если js файл до body, то null, если в конце body то выведет body
console.log(document.head)

console.log(document.querySelector('.panel').innerHTML) // выводит внутрянку панели (в данном примере просто текст)
console.log(document.querySelector('.panel').innerText) // выводит текст панели
// querySelector - позволяет обращаться к html элементу по классу. в скобках наименование класса которое мы юзаем в css (через точку), дальше какое то свойство
const panel = document.querySelector('.panel')
console.log(panel) // закинули в переменную весь див
/* сonsole.log(document.querySelector('.input').value = 'Text')  */// добавили в поле ввода "Text", который сразу же высветился в браузере


//Обработка нажатий
/* Допустим, я хочу вводить какой то текст в поле ввода, и чтобы этот текст выскакивал в панели при нажатии кнопки. Рассмотрим два способа решить эту задачу */

/* document.querySelector('.button').addEventListener('click', () => { // говорит что при нажатии на кнопку, происходит то, что мы описываем в функции. Также функция может принимать параметр e, если выведем в консоль эту e выдаст нам подробно что как работает клик (разберем позже)
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input
    document.querySelector('.input').value = ''
}) */



    /* function changeInput () {
        const input = document.querySelector('.input').value;
        if (!input) {
            return;
        }
        document.querySelector('.panel').innerText = input
        document.querySelector('.input').value = ''  
    } */ // второй способо это закинуть логику в отдельную функцию и эту функцию передать атрибутом 'onclick=changeInput()' к кнопке

// Обработка событий клавиатуры. В прошлом случае мы работали с кнопкой, но часто пользователи хотят вводить что то с помощью enter или выходить с какого то окна с помощью escape ну и так далее. Тут на помощь приходить событие "keydown". Допустим я хочу делать всё тоже самое что и в первой задаче но с помощью enter

/* document.querySelector('.input').addEventListener('keydown', () => {
    console.log('down') // при такой записи при любом взаимодействии с формой с помощью клавиатуры, будет отрабатываться addEventListener и в консоль выводится down.
}) */

/* document.querySelector('.input').addEventListener('keydown', (e) => {
    console.log(e) // вот тут то нам и нужен event, что фильтровать работу с клавиатурой. при каждом нажатии клавиатуры (будь то ввод любой буквы или backspace, enter и т.д.), в консоль будет выводится объект KeyboardEvent со свойствами этого нажатия. К этим свойствам спокойно можно обращаться. Пока что нас интересует свойства code и key. Если дело касается не нажатий букв, то свойства code и key дублируются и имеют значение свойства, которое было сделано. например 'CapsLock'. Если же буквы, то code (В НЕЗАВИСИМОСТИ ОТ РЕГИСТРА БУДЕТ ВЫДАВАТЬ KeyA (А тут к примеру), даже если а маленькая), а вот key будет выдавать либо "а" либо "А" зависит от регистра. Если нужно взаимодействовать с буквами учитывая регистр, то по key обращаемся к обьекту ивэнта, если нет то можно по code.
}) */

//Поскольку это обьект, можем обращаться к его свойствам
/* document.querySelector('.input').addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        console.log('enter') // теперь функция будет выводить в консоль enter, только если у обьекта метод code == 'Enter'. То есть если нажали не enter, ничего происходить не будет
    }
})
 */
/* document.querySelector('.input').addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        const input = document.querySelector('.input').value;
        if (!input) {
            return;
        }
        document.querySelector('.panel').innerText = input
        document.querySelector('.input').value = ''     // но получается повторение    
    }
}) */

/* function submitForm () {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input
    document.querySelector('.input').value = ''  
}

function inputChanged (e) {
    if (e.code === 'Enter') {
        submitForm();
    }
} // сделали функцию сабмит форм которую передаем в баттон при нажотии, и также передаем ее в другую функцию (которую передаем в инпут через onckeydown = функция(event)) inputChanged где логика для клавиатуры */

// Работа со стилями и классами

/* В html документ я добавил div с текстом Changed внутри, и я хочу чтобы помимо перемещения текста из инпута в панель, выскакивало уведомление о том, что текст изменился (как раз таки див Changed). Для этого нужно работать с его стилем (в данном случае display но в целом можно с чем угодно). Есть три способа это сделать */
/* function submitForm () {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input
    document.querySelector('.input').value = ''
    document.querySelector('.changed').style.display = 'block';  // первый способ, по умолчанию добавил display:none, по нажатию на кнопку или enter, меняют у класса changed стиль display на block. В этот момент у нас образуется инлайн стиль у класса changed, который перекрывает стиль из css файла.
    console.log(document.querySelector('.changed').classList) // возвращает "массив" (на самом деле не массив) класса changed, с его длиной (сколько классов, id и значениями), а также МЕТОДАМИ которыми можно управлять. Рассмотрим add и remove, которые как раз таки позволят нам заменить .style.display
    document.querySelector('.changed').classList.remove('changed_none') // у меня отдельно в классе changed_none стоит display:none, по нажатию я его удаляю и высвечивается текст. Но этот класс соответственно должен быть в html разметке у элемента доп классом (БЭМ методология)
    document.querySelector('.changed').classList.add('changed_add') // тут создаю доп класс с дисплэем, который вливаю в элемент div доп классом
//ДЛЯ КЛАССЛИСТ В СКОБКАХ НЕ НУЖНО КЛАСС УКАЗЫВАТЬ ЧЕРЕЗ ТОЧКУ (ЭТО НУЖНО ТОЛЬКО В querySelector так как тут обращаемся к классам) ТАК КАК МЫ ПРОСТО ДОБАВЛЯЕМ КОНКРЕТНОЕ ИМЕНОВАНИЕ В СПИСОК КЛАССОВ
}

function inputChanged (e) {
    if (e.code === 'Enter') {
        submitForm();
    }
} */

//Установка атрибутов

/* console.log(document.querySelector('.panel').getAttribute('class')) // getAttribute позволяет вывести значение аттрибута (СТРОКА) которого мы указали в скобках (в данном примере выведет значение атрибута класс = panel)
document.querySelector('.panel').setAttribute('class', 'panel'); // устанавливает атрибут, первым аргументом какой атрибут (класс, id и т.д.), какое значение установить. setAttribute грубо говоря удаляет все существующие классы и вместо них устанавливает новые (второй и т.д. аргумент). при работе с классами не рекомендуется так как есть classList

document.querySelector('.panel').setAttribute('id', 1) // добавили id = 1, но пока что 1 это строка
console.log(Number(document.querySelector('.panel').getAttribute('id'))) // вывели с помощью getAttribute, преобразовав строку в число методом Number


//Задача 1. Я создал 4 дива, с помощью querySelector, нужно сделать так чтобы в консоле отображались все 4 элемента

console.log(document.querySelector('.one').innerText)
console.log(document.querySelector('.one ~ div').innerText) // говорим что хотим вывести следующий див после элемента с классом one
console.log(document.querySelector('#two').innerText) // так выводится id
console.log(document.querySelector('[user-id="4"]').innerText) // так атрибут, не класс и не id

// Но есть альтернативы для id и class и когда несколько одинаковых классов
console.log('---------------------')
console.log(document.querySelectorAll('.one')) // выведет текст у первого элемента массива, который содержит все элементы с классом one
console.log(document.getElementById('two').innerText) // выведет текст элемента, у которого id two
console.log(document.getElementsByClassName('one')) // альтернатива querySelectorAll('.one'), только querySelectorAll возвращает NodeList, а getElementsByClassName HTMLCollection (разницу потом наверное обьяснят) */

//Добавление html на лету. С помощью js можем к примеру пустой div заполнить каким то контентом. (работать щас будем с пустым div class = 'test', который я создал в html)
const buttonText = 'Панель'
const buttonClass = 'button'
console.log(buttonClass)
const newElement = document.createElement('div')
console.log('------------')
console.log(newElement) // выведет <div></div>
console.log('------------')
newElement.setAttribute('id', 1)
newElement.classList.add('panel')
document.querySelector('.test').appendChild(newElement) // appendChild позволяет создать дочерний элемент (который мы передаем аргументом) для элемента который передаем в querySelector
/* newElement.innerText = 'Кнопка'  */// но есть альтернативый способ заполнить внутрянку
newElement.innerHTML = `<button class = '${buttonClass}'>${buttonText}</button>` // внутри тестового дива получился див, который имеет свойства панели, а внутри него лежит кнопка, которую мы создали поместив в innerHTML с помощью шаблонных строк button с классом button (заранее скинули в переменную) и с каким то текстом


//LocalStorage

/* LocalStorage - это некое хранилище данных, на стороне браузера. Позволяет приложениям сохранять какие то данные пользователей в браузере. Работает в кейсах когда например пользователю надо закидывать товары в корзину. */
localStorage.setItem('token', '12345') // добавляем элемент в локалсторедж (первый аргумент ключ, второе значение)
console.log(localStorage.getItem('token')) // по ключу достаем айтем
localStorage.setItem('token1', true) // несмотря на то что можно передавать не только строки якобы, и 1 и true и т.д. будет строкой
localStorage.setItem('token2', 1)
localStorage.removeItem('token2') // удаляю айтем по ключу
localStorage.clear() // полностью чищу локал сторедж. используется редко так как в хранилище помимо твоих данных могут быть еще какие то данные

//JSON
/* JSON - это грубо говоря формат обмена данными между бэком и фронтом (и не только это как пример). Используется для представления структурированных данных в текстовом формате.
JSON и Local Storage:
Local Storage может хранить только строковые значения. Поэтому, чтобы сохранить объекты или массивы в Local Storage, необходимо сначала преобразовать их в JSON-строку с помощью JSON.stringify(). Когда данные извлекаются из Local Storage, они обратно преобразуются из JSON-строки в значение JavaScript с помощью JSON.parse(). */
/* Тут я уже кратко сказал про методы. Разберем на примерах: */

/* {
    "name": "Никита",
    "age": 20,
    "hobby": ["programming", "sex", "training"],
    "moreInfo": {
        "dick": 20
    }
} */ // вот пример json обьекта. Отличия от обьекта: ключи в ковычках, нельзя оставлять висячую запятую

const obj = {
    name: "Никита",
    age: 20,
    hobby: ["programming", "sex", "training"]   
}

const a = JSON.stringify(obj)
console.log(a) // преобразовал это в json строку. В локалсторадж можно закидывать только строки, если нужно закинуть массив например, через json делаем строку, кидаем в localStorage
localStorage.setItem(a, "objeeect") // закинули json в хранилище
console.log(JSON.parse(a)) // запарсили обратно в обьект
console.log(obj)

//Задание
function submitForm2 () {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.changed').classList.add('changed_add')
    document.querySelector('.panel').innerText = input
    document.querySelector('.input').value = ''
    const obj = JSON.stringify({text: input})
    localStorage.setItem('text',obj)  
}

function inputChanged2 (e) {
    if (e.code === 'Enter') {
        submitForm2();
    }
}

localStorage.clear()