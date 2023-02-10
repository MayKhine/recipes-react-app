import AddRecipe from "../components/AddRecipe";
import React from "react";
import RecipeItem from "../components/RecipeItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLocalStorageJSONObject } from "../hooks/useLocalStorageJSONObject";

export const HomePage = () => {
  const [recipeList, setRecipeList] =
    useLocalStorageJSONObject("RecipeList123");

  const onAddRecipeHandler = (newRecipe) => {
    if (recipeList) {
      setRecipeList([...recipeList, newRecipe]);
    } else {
      setRecipeList([newRecipe]);
    }

    console.log("recipeList: ", recipeList);
  };

  return (
    <>
      <Box sx={{ marginTop: "3%" }}>
        <Typography variant="h3" gutterBottom>
          Recipes
        </Typography>
        <AddRecipe onAddRecipe={onAddRecipeHandler} />
      </Box>

      <Box sx={{ margin: 3 }}>
        <Grid container spacing={3}>
          {recipeList?.map((recipe) => (
            <Grid item key={recipe.id}>
              <RecipeItem key={recipe.id} recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
