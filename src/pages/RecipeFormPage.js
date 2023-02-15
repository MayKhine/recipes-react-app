import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useRecipeList } from "../hooks/useRecipeList";

const RecipeForm = () => {
  const [enteredRecipeName, setEnteredRecipeName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredDirections, setEnteredDirections] = useState("");
  const navigate = useNavigate();
  const { addRecipeItem } = useRecipeList();

  const submitHandler = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Math.random().toString(),
      name: enteredRecipeName,
      ingredients: enteredIngredients,
      directions: enteredDirections,
    };

    setEnteredRecipeName("");
    setEnteredIngredients("");
    setEnteredDirections("");

    addRecipeItem(newRecipe);
    navigate(-1); //back to home page
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    navigate(-1); //back to home page
  };

  const recipeNameChangeHandler = (event) => {
    setEnteredRecipeName(event.target.value);
  };

  const ingredientsChangeHandler = (event) => {
    setEnteredIngredients(event.target.value);
  };

  const directionsChangeHandler = (event) => {
    setEnteredDirections(event.target.value);
  };

  return (
    <>
      <form>
        <Typography sx={{ marginTop: "3%" }} variant="h3" gutterBottom>
          Recipe
        </Typography>
        <Stack sx={{ alignItems: "center" }}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            size="small"
            margin="normal"
            sx={{ width: "50%" }}
            onChange={recipeNameChangeHandler}
            value={enteredRecipeName}
          ></TextField>

          <TextField
            id="standard-basic"
            label="Ingredients"
            variant="standard"
            size="small"
            margin="normal"
            sx={{ width: "50%" }}
            onChange={ingredientsChangeHandler}
            value={enteredIngredients}
          ></TextField>

          <TextField
            id="standard-basic"
            label="Directions"
            variant="standard"
            size="small"
            margin="normal"
            sx={{ width: "50%" }}
            onChange={directionsChangeHandler}
            value={enteredDirections}
          ></TextField>
        </Stack>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            type="cancel"
            onClick={cancelHandler}
            sx={{
              backgroundColor: "#ff7f1c",
              "&:hover": {
                backgroundColor: "#fc9544",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={submitHandler}
            sx={{
              backgroundColor: "#ff7f1c",
              "&:hover": {
                backgroundColor: "#fc9544",
              },
            }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default RecipeForm;
