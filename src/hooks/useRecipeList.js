import { useLocalStorageJSONObject } from "./useLocalStorageJSONObject";

export const useRecipeList = () => {
  const [recipeList, setRecipeList] =
    useLocalStorageJSONObject("RecipeList123");
  const addRecipeItem = (newRecipe) => {
    if (recipeList) {
      setRecipeList([...recipeList, newRecipe]);
    } else {
      setRecipeList([newRecipe]);
    }

    console.log("recipeList: ", recipeList);
  };

  const deleteRecipeItem = (recipeId) => {
    console.log("in Home page: ", recipeId);

    setRecipeList(
      recipeList.filter((curRecipe) => {
        return curRecipe.id != recipeId;
      })
    );
  };
  return {
    recipeList: recipeList ? recipeList : [],
    setRecipeList,
    deleteRecipeItem,
    addRecipeItem,
  };
};
