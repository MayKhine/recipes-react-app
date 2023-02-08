import { useState } from "react";
import classes from "./RecipeForm.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const RecipeForm = (props) => {
  const [enteredRecipeName, setEnteredRecipeName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredDirections, setEnteredDirections] = useState("");

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

    props.onAdd(newRecipe); //passing newRecipe to AddRecipe
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
    <>
      <form className={classes.backdrop}>
        <Typography variant="h3" gutterBottom>
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
