import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipeList } from "../hooks/useRecipeList";
import Typography from "@mui/material/Typography";

const RecipePage = (props) => {
  const { recipeId } = useParams();
  const myRecipe = useRecipeDetail(recipeId);

  useEffect(() => {}, [myRecipe]);

  return (
    <>
      {myRecipe ? (
        <>
          <Typography variant="h4" component="h4">
            {myRecipe.name}
          </Typography>
          <Typography variant="subtitle1">
            Ingredients: {myRecipe.ingredients}
          </Typography>
          <Typography variant="subtitle1">
            Directions: {myRecipe.directions}
          </Typography>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default RecipePage;

// useRecipeList => returns recipe list
const useRecipeDetail = (id) => {
  const { recipeList } = useRecipeList();
  return recipeList.find((recipe) => recipe.id === id);
};
