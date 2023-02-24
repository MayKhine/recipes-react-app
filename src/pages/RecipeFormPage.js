import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

import { useRecipeList } from "../hooks/useRecipeList";

const RecipeForm = () => {
  const [enteredRecipeName, setEnteredRecipeName] = useState("");
  const [enteredSubText, setEnteredSubText] = useState("");
  const [enteredDifficulty, setEnteredDifficulty] = useState("");
  const [enteredCookingTime, setEnteredCookingTime] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredDirections, setEnteredDirections] = useState("");
  const navigate = useNavigate();
  const { addRecipeItem } = useRecipeList();

  const recipeDifficultiesArr = [
    "super easy",
    "easy",
    "Umhh..",
    "a bit difficult",
    "difficult",
    "This is a struggle",
  ];

  const cookingTimeArr = [15, 30, 45, 60, 75, 90, 105, 120, 180, 240, 999];

  const submitHandler = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Math.random().toString(),
      name: enteredRecipeName,
      subText: enteredSubText,
      difficulty: enteredDifficulty,
      cookingTime: enteredCookingTime,
      ingredients: enteredIngredients,
      directions: enteredDirections,
    };

    setEnteredRecipeName("");
    setEnteredSubText("");
    setEnteredDifficulty("");
    setEnteredCookingTime("");
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

  const subTextChangeHandler = (event) => {
    setEnteredSubText(event.target.value);
  };

  const difficultyHandler = (event) => {
    setEnteredDifficulty(event.target.value);
  };

  const cookingTimeHandler = (event) => {
    setEnteredCookingTime(event.target.value);
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack sx={{ alignItems: "center", width: "70%" }}>
            {/* <Stack> */}
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
              label="Recipe Summary Text"
              variant="standard"
              size="small"
              margin="normal"
              sx={{ width: "50%" }}
              onChange={subTextChangeHandler}
              value={enteredSubText}
            ></TextField>

            <FormControl variant="standard" sx={{ margin: "10px", width: 200 }}>
              <InputLabel id="difficulty">Difficulty</InputLabel>
              <Select
                labelId="difficulty"
                id="difficulty"
                value={enteredDifficulty}
                label="difficulty"
                onChange={difficultyHandler}
              >
                {recipeDifficultiesArr.map((difficultyLevel) => (
                  <MenuItem key={difficultyLevel} value={difficultyLevel}>
                    {difficultyLevel}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ margin: "10px", width: 200 }}>
              <InputLabel id="cookingTime">Cooking Time (mins)</InputLabel>
              <Select
                labelId="cookingTime"
                id="cookingTime"
                value={enteredCookingTime}
                label="cookingTime"
                onChange={cookingTimeHandler}
              >
                {cookingTimeArr.map((cookingTime) => (
                  <MenuItem key={cookingTime} value={cookingTime}>
                    {cookingTime}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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
        </Box>
      </form>
    </>
  );
};

export default RecipeForm;
