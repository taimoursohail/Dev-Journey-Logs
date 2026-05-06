let meals = [];

const createMeal = (name, protein) => ({ name, protein });

const addMeal = (name, protein) => meals.push(createMeal(name, protein));

const removeMeal = (name) => {
    let updatedMeals = [];
    for (let i = 0; i < meals.length; i++) {
        if (meals[i].name !== name) {
            updatedMeals.push(meals[i]);
        }
    }
    meals = updatedMeals;
};

const getTotalProtein = () => {
    let total = 0;
    for (let i = 0; i < meals.length; i++) {
        total += meals[i].protein;
    }
    return total;
};

const getMealPlan = () => {
    let names = [];
    for (let i = 0; i < meals.length; i++) {
        names.push(meals[i].name);
    }
    return names;
};

const resetMealPlan = () => {
    let removedNames = [];
    for (let i = 0; i < meals.length; i++) {
        removedNames.push(meals[i].name);
    }
    meals = [];

    (function () {
        const message = "Plan wiped";
        function logger() {
            console.log(message);
        }
        logger();
    })();

    return removedNames;
};

// Run this way
addMeal("Salmon", 30);
addMeal("Turkey", 40);
removeMeal("Salmon");
console.log(getTotalProtein());
console.log(getMealPlan());
console.log(resetMealPlan());
console.log(getMealPlan());
