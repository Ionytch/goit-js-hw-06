
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const res = ingredients.map((ingredient) => {
  const ingrItems = document.createElement("li");
  ingrItems.textContent = ingredient;
  ingrItems.className = 'item';

  return ingrItems
});


list.after(...res);
