import { useState } from "react";
const RecipeForm = (props) => {
  const [enteredRecipeName, setEnteredRecipeName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredDirections, setEnteredDirections] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");

    const newRecipe = {
      recipe: enteredRecipeName,
      ingredients: enteredIngredients,
      directions: enteredDirections,
    };

    console.log("NewRecipe", newRecipe);
    setEnteredRecipeName("");
    setEnteredIngredients("");
    setEnteredDirections("");

    props.onClose();
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onClose();
  };

  const recipeNameChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredRecipeName(event.target.value);
  };

  const ingredientsChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredIngredients(event.target.value);
  };

  const directionsChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDirections(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <label>Recipie Name</label>
            <input
              type="text"
              onChange={recipeNameChangeHandler}
              value={enteredRecipeName}
            ></input>
          </div>
          <div>
            <label>Ingredients</label>
            <input
              type="text"
              onChange={ingredientsChangeHandler}
              value={enteredIngredients}
            ></input>
          </div>
          <div>
            <label>Directions</label>
            <input
              type="text"
              onChange={directionsChangeHandler}
              value={enteredDirections}
            ></input>
          </div>
        </div>
        <div>
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
          <button type="cancel" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
