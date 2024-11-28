

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    if (window.scrollY > 5) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
});

// Получаем элементы
let modal = document.getElementById("myModal");
let taskCreate = document.querySelector('.task__create');
let taskCancel = document.querySelector('.task__cancel');

// Когда пользователь нажимает на кнопку, открываем модальное окно
taskCreate.addEventListener('click', function () {
    modal.style.display = "block";
})

// Когда пользователь нажимает на кнопку закрытия, закрываем модальное окно
taskCancel.addEventListener('click', function () {
    modal.style.display = "none";  // Закрытие окна
})


document.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});