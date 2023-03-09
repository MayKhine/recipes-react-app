import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";

import { useQuery } from "react-query";

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
