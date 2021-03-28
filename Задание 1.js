/*Задание 1.

Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02.
Повторный клик меняет иконку обратно.*/

const btn = document.querySelector(".arrow_btn");
const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");
let isIcon1Visible = true;

btn.addEventListener("click", () => {

    if (isIcon1Visible) {
        icon1.style.display = "none";
        icon2.style.display = "inline";
    } else {
        icon1.style.display = "inline";
        icon2.style.display = "none";
    }
    isIcon1Visible = !isIcon1Visible;
})



// Ниже ещё один вариант реализации через функцию.

// btn.addEventListener("click", () => {
//
//     function changeVisibility(displayItem, hideItem) {
//         displayItem.style.display = "inline";
//         hideItem.style.display = "none";
//     }
//
//     if (isIcon1Visible) {
//         changeVisibility(icon2, icon1);
//     } else {
//         changeVisibility(icon1, icon2);
//     }
//     isIcon1Visible = !isIcon1Visible;
//     });