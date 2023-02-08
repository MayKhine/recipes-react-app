import "./App.css";
import AddRecipe from "./components/AddRecipe";
import React, { useEffect, useState } from "react";
import RecipeItem from "./components/RecipeItem";

function App() {
  const [recipeList, setRecipeList] = useState([]);

  const onAddRecipeHandler = (newRecipe) => {
    setRecipeList([...recipeList, newRecipe]);
  };

  return (
    <div className="App">
      <header>Recipes</header>
      <AddRecipe onAddRecipe={onAddRecipeHandler} />
      {recipeList.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default App;
