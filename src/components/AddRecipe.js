import RecipeForm from "./RecipeForm.js";
import { useState } from "react";
import Button from "@mui/material/Button";

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
      <Button
        onClick={onAddRecipeHandler}
        variant="contained"
        sx={{
          backgroundColor: "#ff7f1c",
          "&:hover": {
            backgroundColor: "#fc9544",
          },
        }}
      >
        Add Recipe
      </Button>
      {recipeForm && (
        <RecipeForm onClose={onCloseHandler} onAdd={onAddHandler}></RecipeForm>
      )}
    </div>
  );
};

export default AddRecipe;
