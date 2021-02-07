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