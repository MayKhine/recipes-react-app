import "./App.css";
import AddRecipe from "./components/AddRecipe";
import React, { useEffect, useState } from "react";
import RecipeItem from "./components/RecipeItem";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const useLocalStorage = (key) => {
  const [data, _setData] = useState(null);

  // synchronzie what it in localstorage => "data"
  useEffect(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      _setData(storedData);
    }
  }, []);

  const setData = (newData) => {
    console.log("setData");
    localStorage.setItem(key, newData);
    _setData(newData);
  };

  return [data, setData];
};

const useLocalStorageJSONObject = (key) => {
  const [dataStr, setDataStr] = useLocalStorage(key);

  const dataObj = dataStr ? JSON.parse(dataStr) : null;
  const setDataObj = (newDataObj) => {
    setDataStr(JSON.stringify(newDataObj));
  };

  return [dataObj, setDataObj];
};

function App() {
  // const [recipeList, setRecipeList] = useState([]);
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
