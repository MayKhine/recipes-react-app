import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import { deleteLocalStorage } from "../hooks/useLocalStorageJSONObject";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { flattenOptionGroups } from "@mui/base";
// import Link from "@mui/material/Link";

const RecipeItem = (props) => {
  console.log(props);

  const recipeDifficultiesArr = [
    "Super easy", //0
    "Easy",
    "Umhh..",
    "A bit difficult",
    "Difficult",
    "This is a struggle", //5
  ];

  return (
    <Card
      sx={{
        // display: "flex",
        height: "40vh",
        width: "40vh",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/tryitnow_GettyImages-1127515284_HR.jpg?w=1600&h=900"
          alt="Food Image"
        />
        <Link
          style={{ textDecoration: "none" }}
          to={"/recipes/" + props.recipe.id}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.recipe.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {props.recipe.subtext}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Typography variant="button" display="block" gutterBottom>
            {recipeDifficultiesArr[props.recipe.difficulty]}
          </Typography>

          <Typography variant="button" display="block" gutterBottom>
            {props.recipe.time} mins
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
