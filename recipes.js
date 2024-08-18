document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        { 
            name: 'Celestial Creature Gyro and Meteorite Fries', 
            ingredients: ['Sliced Potato', 'Tzatziki', 'Pita', 'Cheese', 'Steak'],
            keywords: ['gyro', 'fries', 'celestial', 'creature', 'meteorite']
        },
        { 
            name: 'Andromeda Invader Curry', 
            ingredients: ['Sliced Potato', 'Sightings Seasoning', 'Chicken', 'Rice'],
            keywords: ['curry', 'andromeda', 'invader']
        },
        { 
            name: 'Crater Cinnamon Roll Pancakes', 
            ingredients: ['Cinnamon', 'Flour', 'Egg', 'Sugar'],
            keywords: ['pancakes', 'crater', 'cinnamon']
        },
        { 
            name: 'Nebula Nosh Chicken & Waffles', 
            ingredients: ['Sightings Seasoning', 'Flour', 'Chicken', 'Egg'],
            keywords: ['waffles', 'nebula', 'nosh', 'chicken']
        },
        { 
            name: 'Extraterrestrial Omelet', 
            ingredients: ['Sliced Cheese', 'Avocado', 'Egg', 'Jalapenos'],
            keywords: ['omelet', 'extraterrestrial']
        },
        { 
            name: 'Celestial Caesar Salad', 
            ingredients: ['Sliced Cheese', 'Lettuce', 'Croutons', 'Caesar Dressing'],
            keywords: ['salad', 'caesar', 'celestial']
        },
        { 
            name: 'Blackhole Brownies', 
            ingredients: ['Flour', 'Cocoa Powder', 'Egg', 'Sugar'],
            keywords: ['brownies', 'blackhole']
        },
        { 
            name: 'Alien Antenna Bites', 
            ingredients: ['Sliced Cheese', 'Flour', 'Chicken', 'Sightings Seasoning'],
            keywords: ['bites', 'alien', 'antenna']
        },
        { 
            name: 'Orbiting Onion Rings', 
            ingredients: ['Sightings Seasoning', 'Flour', 'Sliced Onion', 'Water'],
            keywords: ['onion', 'rings', 'orbiting']
        },
        { 
            name: 'Martian Mousse', 
            ingredients: ['Sugar', 'Cocoa Powder', 'Egg', 'Whipped Cream'],
            keywords: ['mousse', 'martian']
        },
        { 
            name: 'Planetary Pizza', 
            ingredients: ['Sliced Tomato', 'Cheese', 'Pizza Crust', 'Jalapenos'],
            keywords: ['pizza', 'planetary']
        },
        { 
            name: 'Galaxy Guac Burger and Meteorite Fries', 
            ingredients: ['Steak', 'Tomato', 'Bun', 'Avocado', 'Potato'],
            keywords: ['burger', 'fries', 'galaxy', 'guac', 'meteorite']
        },
        { 
            name: 'Nebula Nectar Cola', 
            ingredients: ['Cola Syrup', 'Ice', 'Soda Water', 'Sugar'],
            keywords: ['cola', 'nebula', 'nectar']
        },
        { 
            name: 'Comet Cola Float', 
            ingredients: ['Soda Water', 'Whipped Cream', 'Cola Syrup', 'Milk'],
            keywords: ['float', 'cola', 'comet']
        },
        { 
            name: 'Lunar Lemonade', 
            ingredients: ['Water', 'Ice', 'Sliced Lemon', 'Sugar'],
            keywords: ['lemonade', 'lunar']
        },
        { 
            name: 'Spacecraft Smores Shake', 
            ingredients: ['Whipped Cream', 'Cocoa Powder', 'Smores', 'Milk', 'Special Ingredient'],
            keywords: ['shake', 'smores', 'spacecraft']
        },
        { 
            name: 'UFO Umbrella Drink', 
            ingredients: ['Orange', 'Grape', 'Tequila'],
            keywords: ['drink', 'umbrella', 'ufo']
        },
        { 
            name: 'Alien Ambrosia', 
            ingredients: ['Vodka', 'Sliced Lemon', 'Cracked Coconut'],
            keywords: ['ambrosia', 'alien']
        },
        { 
            name: 'Asteroid Amaretto Sour', 
            ingredients: ['Sugar', 'Amaretto', 'Sliced Lemon'],
            keywords: ['sour', 'amaretto', 'asteroid']
        },
        { 
            name: 'Galactic Grape Cola', 
            ingredients: ['Grape', 'Ice', 'Soda Water', 'Sugar'],
            keywords: ['cola', 'grape', 'galactic']
        }
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
            
            const recipeName = document.createElement('div');
            recipeName.className = 'recipe-name';
            recipeName.textContent = recipe.name;

            const recipeIngredients = document.createElement('div');
            recipeIngredients.className = 'recipe-ingredients';
            recipeIngredients.textContent = recipe.ingredients.join(', ');

            recipeItem.appendChild(recipeName);
            recipeItem.appendChild(recipeIngredients);
            recipeItem.addEventListener('click', () => selectRecipe(recipe));

            recipesList.appendChild(recipeItem);
        });
    }

    function selectRecipe(recipe) {
        const quantity = prompt(`How many of ${recipe.name} would you like to add?`, "1");
        if (quantity !== null && !isNaN(quantity) && quantity > 0) {
            selectedRecipes.push({ recipe, quantity: parseInt(quantity) });
            updateSelectedRecipes();
        }
    }

    function updateSelectedRecipes() {
        selectedRecipesList.innerHTML = '';
        totalIngredientsList.innerHTML = '';

        const totalIngredients = {};

        selectedRecipes.forEach(({ recipe, quantity }) => {
            const li = document.createElement('li');
            li.textContent = `${quantity}x ${recipe.name}`;
            selectedRecipesList.appendChild(li);

            recipe.ingredients.forEach(ingredient => {
                if (totalIngredients[ingredient]) {
                    totalIngredients[ingredient] += quantity;
                } else {
                    totalIngredients[ingredient] = quantity;
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

    document.getElementById('clearBtn').addEventListener('click', () => {
        selectedRecipes = [];
        updateSelectedRecipes();
    });

    displayRecipes();
});
