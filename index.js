const langButtons = document.querySelectorAll('.button__lang');

// функция для установки цвета кнопки
function setLangButtonColor(button, color) {
  button.style.backgroundColor = color;
  localStorage.setItem(button.textContent, color);
}

// ищем цвета кнопок в localStorage и устанавливаем их
for (let i = 0; i < langButtons.length; i++) {
  const button = langButtons[i];
  const color = localStorage.getItem(button.textContent);
  if (color) {
    setLangButtonColor(button, color);
  }
}

// обработчик клика на кнопке
function langButtonClickHandler(event) {
  const button = event.currentTarget;
  const currentColor = button.style.backgroundColor;
  
  // ищем красную кнопку и убираем у нее цвет
  for (let i = 0; i < langButtons.length; i++) {
    const langButton = langButtons[i];
    if (langButton.style.backgroundColor === 'red') {
      setLangButtonColor(langButton, '');
      break;
    }
  }
  
  // если текущая кнопка не красная, то устанавливаем ей красный цвет
  if (currentColor !== 'red') {
    setLangButtonColor(button, 'red');
  }
}

// назначаем обработчик клика на каждую кнопку
for (let i = 0; i < langButtons.length; i++) {
  const button = langButtons[i];
  button.addEventListener('click', langButtonClickHandler);
}