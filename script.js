      
  let butToItem1 = document.querySelector(".item_1");
  let butToItem2 = document.querySelector(".item_2");
  let butToItem3 = document.querySelector(".item_3");
  let butToItem4 = document.querySelector(".item_4");

  let PodItem1 = document.querySelector(".forItem1");
  let PodItem2 = document.querySelector(".forItem2");
  let PodItem3 = document.querySelector(".forItem3");
  let PodItem4 = document.querySelector(".forItem4");

  let BG = document.querySelector(".BGforItems");
// Объявляем массивы для кнопок и подэлементов
let buttons = [];
let podItems = [];

// Заполняем массивы кнопками и подэлементами
for (let i = 1; i <= 4; i++) {
  buttons.push(document.querySelector(`.item_${i}`));
  podItems.push(document.querySelector(`.forItem${i}`));
}

// Функция для добавления/удаления классов и обработчиков событий
function toggleClassesAndEvents(index) {
  podItems[index].classList.remove('BGfadeOut');
  BG.classList.remove('BGfadeOut');
  podItems[index].classList.add('BGfadeIn');
  BG.classList.add('BGfadeIn');

  function removeClassesAndEvents() {
    podItems[index].classList.remove('BGfadeIn');
    BG.classList.remove('BGfadeIn');
    podItems[index].classList.add('BGfadeOut');
    BG.classList.add('BGfadeOut');
  }

  podItems[index].addEventListener('click', removeClassesAndEvents);
  BG.addEventListener('click', removeClassesAndEvents);
}

// Добавляем обработчики событий для каждой кнопки
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    // Вызываем функцию для соответствующего подэлемента
    toggleClassesAndEvents(i);
  });
}
