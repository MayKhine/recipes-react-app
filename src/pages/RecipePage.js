import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeList } from "../hooks/useRecipeList";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const RecipePage = (props) => {
  const { recipeId } = useParams();

  const {
    isLoading,
    error,
    data: curRecipe,
  } = useQuery(["repoData", recipeId], () =>
    fetch(`http://localhost:3001/recipes/${recipeId}`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {curRecipe ? (
        <>
          <Typography variant="h4" component="h4">
            {curRecipe.name}
          </Typography>
          <Typography variant="subtitle1">
            Ingredients: {curRecipe.ingredients}
          </Typography>
          <Typography variant="subtitle1">
            Directions: {curRecipe.directions}
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
