import React from "react";
import RecipeItem from "../components/RecipeItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useQuery } from "react-query";

export const HomePage = () => {
  //connecting to express server
  const {
    isLoading,
    error,
    data: recipeList,
  } = useQuery("repoData", () =>
    fetch("http://localhost:3001/recipes").then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

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
              <RecipeItem key={recipe.id} recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
