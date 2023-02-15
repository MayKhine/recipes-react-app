import "./App.css";
import React, { useEffect } from "react";
import RecipePage from "./pages/RecipePage";
import { HomePage } from "./pages/HomePage";
import { AddRecipePage } from "./pages/AddRecipePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import RecipeForm from "./pages/RecipeFormPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/recipes"} />} />
          <Route exact path={"/recipes"} element={<HomePage />} />
          <Route exact path={"/addRecipe"} element={<RecipeForm />} />
          <Route exact path="/recipes/:recipeName" element={<RecipePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// react browswer router
//https://reactrouter.com/en/main/routers/picking-a-router
