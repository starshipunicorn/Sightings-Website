document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        { name: 'Recipe 1', ingredients: ['Ingredient 1', 'Ingredient 2'] },
        { name: 'Recipe 2', ingredients: ['Ingredient 3', 'Ingredient 4'] },
        // Add more recipes here
    ];

    const recipesList = document.getElementById('recipesList');
    const selectedRecipesList = document.getElementById('selectedRecipesList');
    const totalIngredientsList = document.getElementById('totalIngredientsList');

    let selectedRecipes = [];

    function displayRecipes() {
        recipesList.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.className = 'recipe-item';
            recipeItem.textContent = recipe.name;
            recipeItem.addEventListener('click', () => selectRecipe(recipe));
            recipesList.appendChild(recipeItem);
        });
    }

    function selectRecipe(recipe) {
        if (!selectedRecipes.includes(recipe)) {
            selectedRecipes.push(recipe);
            updateSelectedRecipes();
        }
    }

    function updateSelectedRecipes() {
        selectedRecipesList.innerHTML = '';
        totalIngredientsList.innerHTML = '';

        const totalIngredients = {};

        selectedRecipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.name;
            selectedRecipesList.appendChild(li);

            recipe.ingredients.forEach(ingredient => {
                if (totalIngredients[ingredient]) {
                    totalIngredients[ingredient]++;
                } else {
                    totalIngredients[ingredient] = 1;
                }
            });
        });

        for (let ingredient in totalIngredients) {
            const li = document.createElement('li');
            li.textContent = `${ingredient}: ${totalIngredients[ingredient]}`;
            totalIngredientsList.appendChild(li);
        }
    }

    document.getElementById('sortBtn').addEventListener('click', () => {
        recipes.sort((a, b) => a.name.localeCompare(b.name));
        displayRecipes();
    });

    displayRecipes();
});
