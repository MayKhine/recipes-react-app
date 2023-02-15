import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RecipePage from "../pages/RecipePage";
// import { deleteLocalStorage } from "../hooks/useLocalStorageJSONObject";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
// import Link from "@mui/material/Link";

const RecipeItem = (props) => {
  const deleteRecipeHandler = () => {
    // deleteLocalStorage(props.recipe.id);

    //retrive local data then delete data depending on the id
    props.onDeleteRecipe();
  };

  return (
    <Card
      sx={{
        display: "flex",
        height: "30vh",
        width: "30vh",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Link to={"/recipes/" + props.recipe.name}>
          <Typography gutterBottom variant="h5" component="div">
            {props.recipe.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          {props.recipe.directions}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.recipe.ingredients}
        </Typography>
        <Button
          variant="contained"
          type="delete"
          onClick={deleteRecipeHandler}
          sx={{
            backgroundColor: "#ff7f1c",
            "&:hover": {
              backgroundColor: "#fc9544",
            },
          }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
