import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useQuery } from "react-query";

const RecipePage = () => {
  const { recipeId } = useParams();

  const {
    isLoading,
    error,
    data: curRecipe,
  } = useQuery(["repoData", recipeId], () =>
    fetch(`http://localhost:3001/recipes/${recipeId}`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const recipeDifficultiesArr = [
    "Super easy", //0
    "Easy",
    "Umhh..",
    "A bit difficult",
    "Difficult",
    "This is a struggle", //5
  ];

  return (
    <>
      {curRecipe ? (
        <>
          <Grid
            padding={7}
            container
            rowGap={3}
            columns={10}
            sx={{ backgroundColor: "orange" }}
            // justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={5} sx={{ backgroundColor: "pink" }}>
              <img
                alt={curRecipe.img}
                src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/tryitnow_GettyImages-1127515284_HR.jpg?w=1600&h=900"
                height={300}
              ></img>
            </Grid>
            <Grid item xs={5} padding={5} sx={{ backgroundColor: "red" }}>
              <Typography variant="h3" component="h3">
                {curRecipe.name}
              </Typography>
              <Typography variant="subtitle1">
                Difficulty: {recipeDifficultiesArr[curRecipe.difficulty]}
              </Typography>
              <Typography variant="subtitle1">
                Time: {curRecipe.time}
              </Typography>
            </Grid>
            <Grid sx={{ backgroundColor: "white" }}>
              <Typography variant="subtitle1">
                Ingredients: {curRecipe.ingredients}
              </Typography>
            </Grid>
            <Grid sx={{ backgroundColor: "yellow" }}>
              <Typography variant="subtitle1">
                Directions: {curRecipe.directions}
              </Typography>
            </Grid>
            <Grid sx={{ backgroundColor: "pink" }}>
              <Typography variant="subtitle1">
                Note: {curRecipe.notes}
              </Typography>
            </Grid>
          </Grid>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default RecipePage;
