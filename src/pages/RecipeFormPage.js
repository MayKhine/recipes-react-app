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

import { useMutation } from "react-query";

const RecipeForm = () => {
  const { isLoading, isError, error, mutate } = useMutation((newRecipe) => {
    return fetch("http://localhost:3001/addNewRecipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecipe),
    });
  });

  const [enteredRecipeName, setEnteredRecipeName] = useState("");
  const [enteredsubtext, setEnteredsubtext] = useState("");
  const [enteredDifficulty, setEnteredDifficulty] = useState("");
  const [enteredtime, setEnteredtime] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredDirections, setEnteredDirections] = useState("");
  const [enteredImageURL, setEnteredImageURL] = useState("");
  const [enteredOriginalURL, setEnteredOriginalURL] = useState("");
  const [enteredNotes, setEnteredNotes] = useState("");

  const navigate = useNavigate();

  const { addRecipeItem } = useRecipeList();

  const recipeDifficultiesArr = [
    "super easy", //0
    "easy",
    "Umhh..",
    "a bit difficult",
    "difficult",
    "This is a struggle", //5
  ];

  const timeArr = [15, 30, 45, 60, 75, 90, 105, 120, 180, 240, 999];

  const submitHandler = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Math.random(),
      name: enteredRecipeName,
      subtext: enteredsubtext,
      difficulty: recipeDifficultiesArr.indexOf(enteredDifficulty),
      time: enteredtime,
      ingredients: [enteredIngredients],
      directions: [enteredDirections],
      imageURL: enteredImageURL,
      originalURL: enteredOriginalURL,
      notes: enteredNotes,
    };

    mutate(newRecipe);
    // return;

    setEnteredRecipeName("");
    setEnteredsubtext("");
    setEnteredDifficulty("");
    setEnteredtime("");
    setEnteredIngredients("");
    setEnteredDirections("");
    setEnteredImageURL("");
    setEnteredOriginalURL("");
    setEnteredNotes("");

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

  const subtextChangeHandler = (event) => {
    setEnteredsubtext(event.target.value);
  };

  const difficultyHandler = (event) => {
    setEnteredDifficulty(event.target.value);
  };

  const timeHandler = (event) => {
    setEnteredtime(event.target.value);
  };

  const ingredientsChangeHandler = (event) => {
    setEnteredIngredients(event.target.value);
  };

  const directionsChangeHandler = (event) => {
    setEnteredDirections(event.target.value);
  };

  const imageURLChangeHandler = (event) => {
    setEnteredImageURL(event.target.value);
  };

  const originalURChangeHandler = (event) => {
    setEnteredOriginalURL(event.target.value);
  };

  const notesHandler = (event) => {
    setEnteredNotes(event.target.value);
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
              onChange={subtextChangeHandler}
              value={enteredsubtext}
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
              <InputLabel id="time">Cooking Time (mins)</InputLabel>
              <Select
                labelId="time"
                id="time"
                value={enteredtime}
                label="time"
                onChange={timeHandler}
              >
                {timeArr.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
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

            <TextField
              id="standard-basic"
              label="Image URL"
              variant="standard"
              size="small"
              margin="normal"
              sx={{ width: "50%" }}
              onChange={imageURLChangeHandler}
              value={enteredImageURL}
            ></TextField>
            <TextField
              id="standard-basic"
              label="Original URL"
              variant="standard"
              size="small"
              margin="normal"
              sx={{ width: "50%" }}
              onChange={originalURChangeHandler}
              value={enteredOriginalURL}
            ></TextField>
            <TextField
              id="standard-basic"
              label="Notes"
              variant="standard"
              size="small"
              margin="normal"
              sx={{ width: "50%" }}
              onChange={notesHandler}
              value={enteredNotes}
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
