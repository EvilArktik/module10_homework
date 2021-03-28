/*Задание 2.

Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.*/

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    alert(`Размер вашего экрана ${screen.width} на ${screen.height} пикселей`);
});