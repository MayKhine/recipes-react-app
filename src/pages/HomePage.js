import React from "react";
import RecipeItem from "../components/RecipeItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useRecipeList } from "../hooks/useRecipeList";

export const HomePage = () => {
  const { recipeList, deleteRecipeItem } = useRecipeList();

  return (
    <>
      <Box sx={{ marginTop: "3%" }}>
        <Typography variant="h3" gutterBottom>
          Recipes
        </Typography>
        <Link to={"/addRecipe"} state={{ newRecipe: "" }}>
          <Button>Add Recipe</Button>
        </Link>
      </Box>

      <Box sx={{ margin: 3, height: "70vh" }}>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {recipeList?.map((recipe) => (
            <Grid item key={recipe.id}>
              <RecipeItem
                key={recipe.id}
                recipe={recipe}
                onDeleteRecipe={() => deleteRecipeItem(recipe.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

//work on recipe page with MUI (maybe images?)
//keep workong in the recipe page!!!
// add backend data server
