// Promises и fetch
/* Promises - это контейнер для значения, которое вернется в будущем. Мы можем как задать промис, так он может и нам что то вернуть. Грубо говоря это корзинка, в которой после "инициализации" появится либо вкусняшка (результат) либо ошибка. Не нужно как xmlhttp использовать колбэк и событие. У промиса есть различные состояние: когда отправляем - состояние pending (делегируем это состояние какому то API). В результате он переходит в состояние settled и выдает либо fulfield либо rejected */

const res = fetch('https://dummyjson.com/products/1') // аналог xmlhttprequest
console.log(res) // fetch нам как раз таки и возврашает промис в состоянии пендинг (когда открываем он фулфилд так как принес какието данные, но это не значит что ответ пришел. Браузер просто получил какие то заголовки ответа типо статуса или заголовков кэширования). И в этот контейнер через какое то время будет приходить ответ. Промис молжем как создавать сами так и получать из api

// Обработка промисов
fetch('https://dummyjson.com/products/1').then((response) => {
    /* console.log(response)  */// fetch возвращает нам промис, метод then прикрепляет колбэк к этому промису и когда промис переходит в состояние fulfield, у него вызывается обьект Response, содержащий информацию об ответе сервера. в body у него содержатся нужные нам данные.
    return response.json() // response.json() не возвращает данные напрямую. Он возвращает обещание (Promise), что данные будут готовы позже. Именно поэтому нужен второй then, чтобы дождаться, пока это обещание выполнится, и получить готовые данные. response.json() получает доступ к телу ответа (body) объекта Response.response.json() начинает асинхронно читать данные из этого потока (body). Это может включать в себя скачивание данных из сети, если они еще не полностью загружены. response.json() парсит прочитанные данные как JSON.
}).then((data) => { // а тут мы уже получим данные
    console.log(data)
})

const res1 = fetch('https://dummyjson.com/products/1')
    .then((response) => response.json()) 
    .then((data) => data)

console.log(res1) // увидим просто промис так как причина, по которой ты видишь промис, а не данные, заключается в том, что код console.log(res1) выполняется до того, как промис res1 будет разрешен (fulfilled) с данными.

// Цепочка promise

/* fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(({products}) => { // можно деструктурировать сразу же, из даты берем продукты
       console.log(products)
       return fetch('https://dummyjson.com/products/' + products[0].id) 
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }) */ // кратко: отправили запрос, получили промис, когда промис "разрешается" (получили хидеры ответа), к промису прикрепляется колбэк с помощью then, который в свою очередь также возвращает промис. Когда промис "разрешается" (получили данные боди в json формате), к промису прикрепляется колбэк который выводит эти продукты в консоль и возвращает новый fetch запрос на сервер но уже по конкретному элементу списка. далее аналогично.

//Обработка reject

/* fetch('https://dummyjson.com/products')
    .then(
        response => {
            console.log(response)
            response.json()
        },
        error => console.log(error) // обработали ошибку. НО ПЕРЕЙДЯ В ПРОДУКТЫ, МЫ ПОЛУЧАЕМ НОВУЮ ОШИБКУ ТАК КАК ПРОДАКТС ВООБЩЕ НЕ СУЩЕСТВУЕТ. ЕСЛИ НА КАКОМ ТО ИЗ ЭТАПОВ МЫ ПОЙМАЛИ ОШИБКУ, МЫ ПРОДОЛЖАЕМ РАБОТАТЬ ДАЛЬШЕ И СНОВА МОГУТ ПОЯВИТЬСЯ ОШИБКИ. 
    )
    .then(({products}) => { // можно деструктурировать сразу же, из даты берем продукты
       console.log(products)
       return fetch('https://dummyjson.com/products/' + products[0].id) 
    },
    error => console.log(error) // еще раз добавил ошибку, которая появится если response.json() нормально не отработает, я вывел выше в консоль response, он с ошибкий 404, ну тут мы поймали ошибку но специально просто показал как это работает
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }) // я в первом fetch запросе специально в ссылке допустил ошибку, и у нас высветилось сразу куча говна. Так вот, это говно можно обрабатывать. Then принимает два аргумента: и вторым как раз идёт error. */
  /*   fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(({products}) => fetch('https://dummyjson.com/products/' + products[0].id) )
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error)) // в прошлом способе я ловил ошибку на разных этапах then, catch же ловит ошибки во всем коде который выше. обязательно ставить в конце, если поставим после какого то then, то ошибки ниже catch он ловить не будет. Catch ловит ошибку например в первом запросе и не идёт дальше, сразу же останавливается. Локальные используем когда то что мы делаем зависит от этапа на котором мы поймали ошибку (наприме если ошибка в первом ответе то делаем тото тото, на втором то че то другое)
    .finally(() => {
        console.log('Finally')
    }) */
    /* Тут же расскажу про finally. Нужен когда нам нужно выполнить какую то операцию независимо от того, есть ошибки или нет ошибок. Выполнится всегда. Необязательно может стоять в конце, если наприме поставим перед catch, то сначала выполнится finally потом catch. Но обычно ставим в конце*/


//Упражнение select выбора иконок
/* Сделать запрос на https://dummyjson.com/products/categories, получить список категорий и отобразить <select> выбора категорий */

function createElement (array) {
    const el = document.querySelector('.category');
    el.innerHTML = `<select>
        ${array.map((element) => `<option name = ${element.slug}>${element.name}</option>`)}
    </select>`
    console.log(el.innerHTML)
}

/* function getCaterogy() {
    fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(data => createElement(data))
    .catch(error => console.log(`Ошибка: ${error}`))
}
getCaterogy() */

//Ручное создание ошибок
function getCaterogy() {
    fetch('https://dummyjson.com/products/categories')
    .then((response) => {
        console.log(response)
        if (!response.ok) {
            throw new Error(`Is error: ${response.status}`) // response это обьект, со своими свойствами, при ok = false - ошибка, делаем if, в случае ошибки создаем ошибку через throw, она передается в параметр catch.
        }
        return response.json()
    })
    .then((data) => {
        createElement(data)
    })
    .catch(error => {
        const el = document.querySelector('.category');
        el.innerHTML = error        
    })
}
getCaterogy()

// Упражнение
/* Сделать функцию, которая принимает строку и текст ошибки и возвращает уже Promise с JSON из тела запроса */
/* Ну тут мы просто делаем функцию, которая возвращает fetch который принимает параметр функции, делаем там обычный респонс с проверкой на ошибку (туда пихаем второй аргумент функции), ну и дальше респонс парсится и мы эту функцию вызываем уже в местах где нам нужно. То есть вместо того чтобы в каком то then возвращать новый запрос, мы вставляем эту функцию (грубо говоря базовый шаблон чтобы не нарушать DRY*/

/* ПОДЫТОЖИМ:
Ответ с сервера мы получаем с помощью API для выполнения HTTP-запросов (например, fetch или XMLHttpRequest).then используется для выполнения кода после завершения асинхронной операции, представленной промисом. При этом, сама асинхронная операция может быть связана с получением данных с сервера (как в случае с fetch), но может быть и другой. */

const resss = fetch('https://dummyjson.com/products/categories')
console.log(resss)