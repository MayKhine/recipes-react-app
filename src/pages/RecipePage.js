import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipeList } from "../hooks/useRecipeList";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const RecipePage = (props) => {
  const { recipeName } = useParams();
  const myRecipe = useRecipeDetail(recipeName);

  useEffect(() => {
    console.log("myRecipe is", myRecipe);
  }, [myRecipe]);

  return (
    <>
      {/* {JSON.stringify(myRecipe, null, 4)} */}

      {myRecipe ? (
        <>
          <Typography variant="h4" component="h4">
            {recipeName}
          </Typography>
          <Typography variant="subtitle1">
            Ingredients: {myRecipe.ingredients}
          </Typography>
          <Typography variant="subtitle1">
            Directions: {myRecipe.directions}
          </Typography>

          <Grid container spacing={2}>
            <Grid item>
              <Item>xs=8</Item>
            </Grid>
            <Grid item>
              <Item>xs=4</Item>
            </Grid>
          </Grid>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default RecipePage;

// useRecipeList => returns recipe list
const useRecipeDetail = (name) => {
  const { recipeList } = useRecipeList();
  return recipeList.find((recipe) => recipe.name === name);
};
