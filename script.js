document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input from the form
    const name = document.getElementById('name').value;
    const diet = document.getElementById('diet').value;

    // Display personalized meal plan section
    const mealPlanSection = document.getElementById('meal-plan-section');
    mealPlanSection.classList.remove('hidden');

    // Generate a simple meal plan based on dietary preference
    const mealPlanText = `Hello ${name}, based on your ${diet} preference, we suggest the following meals for the week:`;

    const mealPlan = {
        "vegan": ["Vegan Burrito", "Tofu Stir Fry", "Lentil Soup", "Chickpea Salad"],
        "gluten-free": ["Grilled Chicken", "Gluten-Free Pizza", "Rice & Beans", "Salmon Salad"],
        "low-carb": ["Chicken Caesar Salad", "Zucchini Noodles", "Grilled Steak", "Avocado Salad"],
        "vegetarian": ["Vegetable Stir Fry", "Grilled Paneer", "Pasta Primavera", "Vegetable Tacos"],
        "paleo": ["Paleo Chicken Bowl", "Egg Salad", "Paleo Steak", "Zucchini Fritters"]
    };

    const mealList = mealPlan[diet].map(meal => `<li>${meal}</li>`).join('');
    document.getElementById('meal-plan').innerHTML = mealPlanText + `<ul>${mealList}</ul>`;

    // Handle shopping list generation
    document.getElementById('generate-shopping-list').addEventListener('click', function() {
        generateShoppingList(diet);
    });
});

// Function to generate the shopping list based on the diet
function generateShoppingList(diet) {
    const shoppingLists = {
        "vegan": [
            "Black Beans",
            "Rice",
            "Tofu",
            "Lettuce",
            "Tomatoes",
            "Tortillas",
            "Avocados"
        ],
        "gluten-free": [
            "Chicken Breast",
            "Gluten-Free Flour",
            "Rice",
            "Tomatoes",
            "Salmon",
            "Lettuce",
            "Olive Oil"
        ],
        "low-carb": [
            "Chicken Breast",
            "Caesar Dressing",
            "Zucchini",
            "Lettuce",
            "Olives",
            "Avocados"
        ],
        "vegetarian": [
            "Tofu",
            "Pasta",
            "Tomatoes",
            "Bell Peppers",
            "Cucumber",
            "Lettuce",
            "Cheese"
        ],
        "paleo": [
            "Chicken",
            "Eggs",
            "Zucchini",
            "Sweet Potatoes",
            "Tomatoes",
            "Avocados"
        ]
    };

    // Get the shopping list for the selected diet
    const shoppingList = shoppingLists[diet];

    // Create a list to display
    const shoppingListText = shoppingList.map(item => `<li>${item}</li>`).join('');
    
    // Display the shopping list
    const shoppingListSection = document.createElement('section');
    shoppingListSection.innerHTML = `
        <h3>Your Shopping List</h3>
        <ul>${shoppingListText}</ul>
        <p>Click <strong>Order Groceries</strong> to proceed with the order.</p>
        <button id="order-groceries">Order Groceries</button>
    `;
    
    document.getElementById('meal-plan-section').appendChild(shoppingListSection);

    // Handle ordering groceries
    document.getElementById('order-groceries').addEventListener('click', function() {
        alert('Your groceries have been ordered!');
    });
}
