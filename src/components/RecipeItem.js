import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RecipePage from "../pages/RecipePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

const RecipeItem = (props) => {
  // return <div>{JSON.stringify(props, null, 2)}</div>;
  return (
    <Card sx={{ height: 300, width: 400 }}>
      <CardContent>
        <Link to={"/recipes/" + props.recipe.name}>
          <Typography gutterBottom variant="h5" component="div">
            {props.recipe.name}
          </Typography>
        </Link>
        {/* <Typography gutterBottom variant="h5" component="div">
          {props.recipe.name}
        </Typography> */}
        <Typography variant="body2" color="text.secondary">
          {props.recipe.directions}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.recipe.ingredients}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeItem;
