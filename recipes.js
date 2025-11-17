document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            name: "Andromeda Invader Curry",
            ingredients: ['chicken', 'sightingsseasoning', 'slicedpotato', 'rice'],
            keywords: ['andromeda', 'invader', 'curry']
        },
        {
            name: "Blackhole Brownies",
            ingredients: ['cacao', 'egg', 'sugar', 'flour'],
            keywords: ['blackhole', 'brownies']
        },
        {
            name: "Supernova Breakfast Sandwich",
            ingredients: ['bun', 'bacon', 'egg', 'slicedcheese'],
            keywords: ['supernova', 'breakfast', 'sandwich']
        },
        {
            name: "Big Dipper Birria Tacos",
            ingredients: ['steak', 'lime', 'cheese', 'corn_tortillas', 'sightingsseasoning'],
            keywords: ['big dipper', 'birria', 'tacos']
        },
        {
            name: "Crater Cinnamon Roll Pancakes",
            ingredients: ['flour', 'egg', 'cinnamon', 'sugar'],
            keywords: ['crater', 'cinnamon', 'pancakes']
        },
        {
            name: "Cosmic Corndog",
            ingredients: ['hotdogs', 'slicedcheese', 'flour', 'sightingsseasoning'],
            keywords: ['cosmic', 'corndog']
        },
        {
            name: "Galaxy Guac Burger and Meteorite Fries",
            ingredients: ['bun', 'steak', 'farm_tomato', 'avocado'],
            keywords: ['galaxy', 'guac', 'burger', 'meteorite', 'fries']
        },
        {
            name: "Nebula Nosh Chicken & Waffles",
            ingredients: ['chicken', 'flour', 'egg', 'sightingsseasoning'],
            keywords: ['nebula', 'nosh', 'chicken', 'waffles']
        },
        {
            name: "Protostar Pulled Pork Sandwich",
            ingredients: ['farm_potato', 'pork_shoulder', 'bun', 'sightingsseasoning', 'bbq_sauce'],
            keywords: ['protostar', 'pulled', 'pork', 'sandwich']
        },
        {
            name: "Planetary Pizza",
            ingredients: ['pizzacrust', 'cheese', 'farm_tomato', 'jalapenos'],
            keywords: ['planetary', 'pizza']
        },
        {
            name: "Pie in the Sky",
            ingredients: ['slicedcherries', 'flour', 'sugar', 'whippedcream'],
            keywords: ['pie', 'cherry', 'sky']
        },
        {
            name: "Choco Milky Way",
            ingredients: ['milk', 'flour', 'sugar', 'whippedcream', 'cacao'],
            keywords: ['choco', 'milky way', 'chocolate']
        },
        {
            name: "Astronaut Ice Cream",
            ingredients: ['slicedstrawberries', 'cacao', 'whippedcream'],
            keywords: ['astronaut', 'ice cream']
        },
        {
            name: "Nutrient Infuser",
            ingredients: ['planetarypizza', 'galacticgrapecola', 'farm_special'],
            keywords: ['nutrient', 'infuser']
        },
        {
            name: "Martian Mousse",
            ingredients: ['cacao', 'whippedcream', 'egg', 'sugar'],
            keywords: ['martian', 'mousse']
        },
        {
            name: "Starlight Lemonade",
            ingredients: ['slicedlemon', 'slicedstrawberries', 'ice'],
            keywords: ['starlight', 'lemonade', 'strawberry']
        },
        {
            name: "Comet Cola Float",
            ingredients: ['whippedcream', 'colasyrup', 'milk', 'sodawater'],
            keywords: ['comet', 'cola', 'float']
        },
        {
            name: "Galactic Grape Cola",
            ingredients: ['grape', 'sodawater', 'sugar', 'ice'],
            keywords: ['galactic', 'grape', 'cola']
        },
        {
            name: "Lunar Lemonade",
            ingredients: ['slicedlemon', 'water', 'sugar', 'ice'],
            keywords: ['lunar', 'lemonade']
        },
        {
            name: "Nebula Nectar Cola",
            ingredients: ['sodawater', 'sugar', 'ice', 'colasyrup'],
            keywords: ['nebula', 'nectar', 'cola']
        },
        {
            name: "Spacecraft Smores Shake",
            ingredients: ['milk', 'cacao', 'smores', 'whippedcream', 'farm_special'],
            keywords: ['spacecraft', 'smores', 'shake']
        },
        {
            name: "Horchata",
            ingredients: ['rice', 'cinnamon', 'sugar', 'water'],
            keywords: ['horchata']
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

