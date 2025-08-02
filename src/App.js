import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [recipeFormShown, showRecipeForm] = useState(false);

  let submitRecipe = (event) => {};

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      <p>There are no recipes to list.</p>
      {
        recipeFormShown ?
          <>
            <form id="recipe-form" name='recipe-form' onSubmit={submitRecipe}>
              <label htmlFor="newRecipeName">Recipe name: </label>
              <input type="text" id="newRecipeName"/>
              <label htmlFor="newRecipeInstructions">Instructions:</label>
              <textarea id="newRecipeInstructions" placeholder="write recipe instructions here..."/>
              <input type="submit"/>
            </form>
          </>
        :
          <button onClick={ () => showRecipeForm(!recipeFormShown) }>Add Recipe</button>
      }
    </div>
  );
}

export default App;