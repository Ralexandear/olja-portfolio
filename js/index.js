document.addEventListener("DOMContentLoaded", () => {
  var listItems = document.querySelectorAll('.stages__list-element-number');
  listItems.forEach((item, index) => {
    const number = (index + 1).toString().padStart(2, '0');
    item.innerHTML = number + '/'
  })
});