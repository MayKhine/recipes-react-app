import "./App.css";
import React, { useEffect } from "react";
import RecipePage from "./pages/RecipePage";
import { HomePage } from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import RecipeForm from "./pages/RecipeFormPage.js";

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
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
// react browswer router
//https://reactrouter.com/en/main/routers/picking-a-router
