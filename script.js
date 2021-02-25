// №1 Tabs

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');     // В переменную tabsBtn получаю кнопки
const tabsItem = document.querySelectorAll('.tabs__item');       // В переменную tabsItem получаю элементы табов

tabsBtn.forEach(function (item) {                                // Перебираем каждую кнопку с помощью forEach
    item.addEventListener('click', function () {                 // По событию клик запускаем функцию, которая
        let currentBtn = item;                                   // Каждый элемент записывает в переменную currentBtn
        let tabId = currentBtn.getAttribute('data-tab');         // Читает каждый атрибут item и записывает в переменную tabId
        let currentTab = document.querySelector(tabId);          // Записываем в переменную currentTab атрибут каждого item

        if (!currentBtn.classList.contains('active')) {          // Создаем условие: Если у кнопки нет класса active, то
            tabsBtn.forEach(function (item) {                    // Перебираем кнопки и удаляем класс active
                item.classList.remove('active')
            });

            tabsItem.forEach(function (item) {                   // Перебираем элементы табов и удаляем класс active
                item.classList.remove('active')
            });

            currentBtn.classList.add('active');                  // Добавляем текущей кнопке класс active
            currentTab.classList.add('active');                  // Добавляем текущему элементу табов класс active
        }

    })
});

// Parallax tabs

const bgBart = document.getElementById("background-bart");  //Получаем элемент фона

//При движении мышью вызываем функцию, которая меняет положение фона
document.addEventListener("mousemove", function (e) { MoveBackground(e); });

function MoveBackground(e) {

    let offsetBartX = (e.clientX / window.innerWidth * 300) - 15;
    let offsetBartY = (e.clientY / window.innerHeight * 100) - 5;

    bgBart.setAttribute("style", "background-position: " + offsetBartX + "px " + offsetBartY + "px"); // Меняем положение барта
}

// Parallax slider

const bgShip = document.getElementById("background-ship");  //Получаем элемент фона

document.addEventListener("mousemove", function (n) { MoveBg(n); }); //При движении мышью вызываем функцию, которая меняет положение фона

function MoveBg(n) {

    let offsetShipX = (n.clientX / window.innerWidth * 1500) - 15;
    let offsetShipY = (n.clientY / window.innerHeight * 500) - 5;


    bgShip.setAttribute("style", "background-position: " + offsetShipX + "px " + offsetShipY + "px"); // Меняем положение корабля
}


// #2 Slider

const prev = document.getElementById('btn-prev'),  // Создаем переменные в них записываем
    next = document.getElementById('btn-next'),    // все элементы с которыми будем взаимодействовать
    slides = document.querySelectorAll('.slide'),  // (вперед, назад, слайды, точки)
    dots = document.querySelectorAll('.dot');

let active = 0;                                    // Создаем переменную в которой содержиться активный нулевой img

const activeSlide = n => {                         // Создаем функцию в качестве параметра передаем n
    slides.forEach((item) => {                     // перебираем слайды
        item.classList.remove('active');           // каждому элементу удаляем класс active       
    })
    slides[n].classList.add('active');             // и добавляем класс active
}

const activeDots = n => {                          // Аналогичную функцию создаем и для точек
    dots.forEach((item) => {
        item.classList.remove('active');
    })
    dots[n].classList.add('active');
}

next.addEventListener('click', () => {               // По нажатию next срабатывает функция:
    if (active == slides.length - 1) {               // Если нулевой img совпадает с последним, то
        active = 0;                                  // переключаем на первый
    } else {                                         // или же переключаем вперед слайд
        active++;
    }
    activeSlide(active);                             // Вставляем функции для слайдов и точек, для одновременного переключения
    activeDots(active);
    console.log(active);
});

prev.addEventListener('click', () => {               // По нажатию prev срабатывает функция:
    if (active == 0) {                               // Если первый слайд равен нулю, то
        active = slides.length - 1;                  // переключаем на последний
    } else {
        active--;                                    // или же переключаем слайд назад
    }
    activeSlide(active);                             // Вставляем функции для слайдов и точек, для одновременного переключения
    activeDots(active);
    console.log(active);
});

dots.forEach((item, index) => {                      // Перебираем точки, срабатывает функция
    item.addEventListener('click', () => {           // по нажатию по элементу
        active = index;                              // первый слайд = индексу
        activeSlide(active);                         // Вставляем функции для слайдов и точек, для одновременного переключения
        activeDots(active);
    })
})