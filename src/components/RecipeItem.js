import React from "react";

const RecipeItem = (props) => {
  return <div>{JSON.stringify(props, null, 2)}</div>;
};

export default RecipeItem;
