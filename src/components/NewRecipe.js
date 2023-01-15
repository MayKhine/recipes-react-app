import RecipeForm from "./RecipeForm.js";
import { useState } from "react";

const NewRecipe = () => {
  const [recipeForm, setRecipeForm] = useState(false);
  const onAddRecipeHandler = () => {
    setRecipeForm(true);
  };

  const onCloseHandler = () => {
    setRecipeForm(false);
  };
  return (
    <div>
      <button onClick={onAddRecipeHandler}> Add Recipe </button>
      {recipeForm && <RecipeForm onClose={onCloseHandler}></RecipeForm>}
    </div>
  );
};

export default NewRecipe;
