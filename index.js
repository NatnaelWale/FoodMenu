"use strict";

let menu = {
    drinks : [
     "Water", "Tea", "Sweet Tea", 
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
    "Hamburger w/ Fries", 
     "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies", 
     "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw", 
     "Veggie Plate"
    ],
    desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
     ]
    };
    

    let foodCategory = document.getElementById("foodCategory");
    let categoryMenu = document.getElementById("categoryMenu");

  

    window.onload = () => {
        populateFoodMenuData();
        populateDrinksData();
    };

    function populateFoodMenuData() {
        // let foodCategoryValue = foodCategory.value;
      foodCategory.addEventListener('change', function(){
        let selectedFoodMenu = foodCategory.value;
        // console.log(selectedFoodMenu)
        categoryMenu.innerHTML = "";
        if(selectedFoodMenu == "Drinks"){
        // console.log(selectedFoodMenu);
        populateDrinksData();
    }else if(selectedFoodMenu == "Entrees"){
        // console.log(selectedFoodMenu);
        categoryMenu.innerHTML = "";
        populateEntreesData();  
        return;
    }else if(selectedFoodMenu == "Desserts"){
        // console.log(selectedFoodMenu);
        categoryMenu.innerHTML = "";
        populateDessertsData();  
        return;
      }
    })
    };

    function populateDrinksData() {
        console.log("Populate Drinks")
        let drinksLength = menu.drinks.length;
        for (let i = 0; i < drinksLength; i++) {
            let foodDrinks = menu.drinks[i];
            // console.log(foodDrinks);
            let newOption1 = document.createElement("Option");
            newOption1.textContent = foodDrinks;
            categoryMenu.appendChild(newOption1);
          };
    };

    function populateEntreesData() {
        console.log("Populate Entrees")
        let entreesLength = menu.entrees.length;
        for (let i = 0; i < entreesLength; i++) {
            let foodEntrees = menu.entrees[i];
            // console.log(foodEntrees);
            let newOption2 = document.createElement("Option");
            newOption2.textContent = foodEntrees;
            categoryMenu.appendChild(newOption2);
          };
    }

    function populateDessertsData() {
        console.log("Populate Desserts")
        let dessertsLength = menu.desserts.length;
        for (let i = 0; i < dessertsLength; i++) {
            let foodDesserts = menu.desserts[i];
            // console.log(foodDesserts);
            let newOption3 = document.createElement("Option");
            newOption3.textContent = foodDesserts;
            categoryMenu.appendChild(newOption3);
          };
    }