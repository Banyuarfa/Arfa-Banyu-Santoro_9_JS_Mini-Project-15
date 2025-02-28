function highlightEvenItems() {
  const items = document.querySelectorAll("#itemList li");
  items.forEach((item, index) => {
    if ((index + 1) % 2 === 0) {
      item.classList.toggle("highlight");
    }
  });
}
