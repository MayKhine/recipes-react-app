import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocalStorageJSONObject } from "../hooks/useLocalStorageJSONObject";

const RecipePage = (props) => {
  const { recipeName } = useParams();
  const myRecipe = useRecipeDetail(recipeName);

  useEffect(() => {
    console.log("myRecipe is", myRecipe);
  }, [myRecipe]);

  return (
    <div>
      {myRecipe ? (
        <div>
          Recipe Page {recipeName} and data is{" "}
          {JSON.stringify(myRecipe, null, 4)}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default RecipePage;

// useRecipeList => returns recipe list
// useRecipeListByID

const useRecipeDetail = (name) => {
  const [list, setList] = useRecipeList();
  return list.find((recipe) => recipe.name === name);
};

const useRecipeList = () => {
  const [data, setData] = useLocalStorageJSONObject("RecipeList123");
  return [data ?? [], setData];
};
