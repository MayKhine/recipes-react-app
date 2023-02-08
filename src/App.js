import "./App.css";
import AddRecipe from "./components/AddRecipe";
import React, { useEffect, useState } from "react";
import RecipeItem from "./components/RecipeItem";
import Typography from "@mui/material/Typography";

function App() {
  const [recipeList, setRecipeList] = useState([]);

  const onAddRecipeHandler = (newRecipe) => {
    setRecipeList([...recipeList, newRecipe]);
  };

  return (
    <div className="App">
      <Typography variant="h3" gutterBottom>
        Recipes
      </Typography>
      <AddRecipe onAddRecipe={onAddRecipeHandler} />
      {recipeList.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default App;

//to do
// create a grid to hold recipe cards
// open recipe card in larger view
