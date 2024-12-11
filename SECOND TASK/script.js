// Получаем элемент изображения
const image = document.getElementById('image1');

// Добавляем событие для смены изображения при наведении
image.addEventListener('mouseover', () => {
  image.src = 'image2.jpg'; // Меняем картинку на другую
});

// Восстанавливаем исходное изображение, когда курсор уходит
image.addEventListener('mouseout', () => {
  image.src = 'image1.jpg'; // Возвращаем исходную картинку
});
