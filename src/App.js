import "./App.css";
import NewRecipe from "./components/NewRecipe";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Recipes</p>
      </header> */}
      <header>Recipes</header>
      <NewRecipe />
    </div>
  );
}

export default App;
