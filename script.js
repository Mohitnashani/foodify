document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const preferences = document.getElementById('preferences').value;

    // Save the user profile to the backend (you can replace this with a real API call)
    console.log('User Profile:', email, preferences);

    // Redirect to meal plan page (you can change the URL based on your routing setup)
    window.location.href = 'meal-plan.html';
});

// Example of populating meal plan dynamically (this could be replaced with real API data)
const mealPlan = [
    { meal: 'Vegan Breakfast Burrito', ingredients: ['Tortilla', 'Avocado', 'Tofu', 'Spinach'] },
    { meal: 'Quinoa Salad', ingredients: ['Quinoa', 'Cucumber', 'Tomato', 'Lemon'] },
];

const mealPlanList = document.getElementById('meal-plan-list');
mealPlan.forEach(meal => {
    const mealItem = document.createElement('div');
    mealItem.innerHTML = `<h3>${meal.meal}</h3><ul>${meal.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>`;
    mealPlanList.appendChild(mealItem);
});

document.getElementById('generate-shopping-list').addEventListener('click', function() {
    // Generate shopping list (this could be a call to the backend)
    const shoppingList = mealPlan.reduce((list, meal) => list.concat(meal.ingredients), []);
    
    // Display the shopping list
    const shoppingListContainer = document.getElementById('shopping-list');
    shoppingListContainer.innerHTML = shoppingList.map(item => `<li>${item}</li>`).join('');
    window.location.href = 'shopping-list.html';
});

document.getElementById('order-grocery').addEventListener('click', function() {
    // Simulate the order process (could be replaced by a call to a grocery delivery API)
    alert('Your groceries have been ordered!');
});
