//Patel Zeel

const form = document.querySelector('#recipe-form');
const recipeList = document.querySelector('#recipes');

let name, ingredients, instructions;

function validateInputs() {
  name = document.querySelector('#recipe-name').value;
  ingredients = document.querySelector('#recipe-ingredients').value;
  instructions = document.querySelector('#recipe-instructions').value;

  if (!name || !ingredients || !instructions) {
    alert('Please fill out all fields.');
    return false;
  }

  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting and refreshing the page

  // validate the inputs
  if (!validateInputs()) {
    return;
  }

  // create a new recipe object
  const recipe = {
    name: name,
    ingredients: ingredients,
    instructions: instructions
  };

  // add the recipe to the list
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${recipe.name}</h3>
    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
  `;
  recipeList.appendChild(li);

  // reset the form inputs
  form.reset();
});
