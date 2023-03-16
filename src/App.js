import "./App.css";
import React from "react";
import RecipePage from "./pages/RecipePage";
import { HomePage } from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RecipeForm from "./pages/RecipeFormPage.js";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to={"/recipes"} />} />
            <Route exact path={"/recipes"} element={<HomePage />} />
            <Route exact path={"/addRecipe"} element={<RecipeForm />} />
            <Route exact path="/recipes/:recipeId" element={<RecipePage />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
