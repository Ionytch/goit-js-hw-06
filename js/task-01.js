const numberOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${numberOfCategories.length}`)

numberOfCategories.forEach(function (number, index) {
    console.log(`Category: ${numberOfCategories[index].firstElementChild.textContent}`);
    console.log(`Elements: ${numberOfCategories[index].lastElementChild.children.length}`);
})

