import RecipeForm from "./RecipeForm.js";
import { useState } from "react";

const AddRecipe = (props) => {
  const [recipeForm, setRecipeForm] = useState(false);
  const onAddRecipeHandler = () => {
    setRecipeForm(true);
  };

  const onCloseHandler = () => {
    setRecipeForm(false);
  };

  const onAddHandler = (newRecipe) => {
    props.onAddRecipe(newRecipe);
  };

  return (
    <div>
      <button onClick={onAddRecipeHandler}> Add Recipe </button>
      {recipeForm && (
        <RecipeForm onClose={onCloseHandler} onAdd={onAddHandler}></RecipeForm>
      )}
    </div>
  );
};

export default AddRecipe;
