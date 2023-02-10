import "./App.css";
import AddRecipe from "./components/AddRecipe";
import React, { useState } from "react";
import RecipeItem from "./components/RecipeItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLocalStorageJSONObject } from "./hooks/useLocalStorageJSONObject";
import RecipePage from "./components/RecipePage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
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
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/whateve"
            element={<RecipePage></RecipePage>}
          ></Route>
        </Routes>
      </Router>

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
    </div>
  );
}

export default App;
// react browswer router
//https://reactrouter.com/en/main/routers/picking-a-router
