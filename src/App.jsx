import { useState } from 'react'
import './App.css';
import RecipeView from './components/RecipeView.jsx'
import RecipeNavbar from './components/RecipeNavbar.jsx'
import LandingPage from './components/LandingPage.jsx'

export default function App() {
  // We must ensure recipes are unique as we are generating random recipes
  const [recipeIDs, setRecipeIDs] = useState(new Set());
  const [recipes, setRecipes] = useState([]);
  const [curPageIndex, setCurPageIndex] = useState(0);

  // Simple variable for our current page
  let curPage = recipes.length !== 0 ? recipes[curPageIndex] : null;
  let isNextPage = curPageIndex + 1 < recipes.length;
  let isPrevPage = curPageIndex - 1 >= 0;

  function ingredientReformatter(badRecipeFormat) {
    // Take in badly formatted recipe
    // Iterate through and add to array
    let newArr = [
      {ing: badRecipeFormat.strIngredient1, amt: badRecipeFormat.strMeasure1},
      {ing: badRecipeFormat.strIngredient2, amt: badRecipeFormat.strMeasure2},
      {ing: badRecipeFormat.strIngredient3, amt: badRecipeFormat.strMeasure3},
      {ing: badRecipeFormat.strIngredient4, amt: badRecipeFormat.strMeasure4},
      {ing: badRecipeFormat.strIngredient5, amt: badRecipeFormat.strMeasure5},
      {ing: badRecipeFormat.strIngredient6, amt: badRecipeFormat.strMeasure6},
      {ing: badRecipeFormat.strIngredient7, amt: badRecipeFormat.strMeasure7},
      {ing: badRecipeFormat.strIngredient8, amt: badRecipeFormat.strMeasure8},
      {ing: badRecipeFormat.strIngredient9, amt: badRecipeFormat.strMeasure9},
      {ing: badRecipeFormat.strIngredient10, amt: badRecipeFormat.strMeasure10},
      {ing: badRecipeFormat.strIngredient11, amt: badRecipeFormat.strMeasure11},
      {ing: badRecipeFormat.strIngredient12, amt: badRecipeFormat.strMeasure12},
      {ing: badRecipeFormat.strIngredient13, amt: badRecipeFormat.strMeasure13},
      {ing: badRecipeFormat.strIngredient14, amt: badRecipeFormat.strMeasure14},
      {ing: badRecipeFormat.strIngredient15, amt: badRecipeFormat.strMeasure15},
      {ing: badRecipeFormat.strIngredient16, amt: badRecipeFormat.strMeasure16},
      {ing: badRecipeFormat.strIngredient17, amt: badRecipeFormat.strMeasure17},
      {ing: badRecipeFormat.strIngredient18, amt: badRecipeFormat.strMeasure18},
      {ing: badRecipeFormat.strIngredient19, amt: badRecipeFormat.strMeasure19},
      {ing: badRecipeFormat.strIngredient20, amt: badRecipeFormat.strMeasure20},
    ]

    // Filter all "zero" items and return
    return newArr.filter((item) => item.ing !== "")
                 .filter((item) => item.ing !== null);
    
  }

  async function getRecipe() {
    // Make query to api
    // Keep making queries until some recipeID not in recipeIDs is found
    // Add this new recipe object to the recipes array
    // Update the set of recipeIDs
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(url)
      .then(response => response.json())
      .then(wrappedData => wrappedData.meals[0])
      .then(recipe => {
        setRecipes([...recipes, recipe])
      })
      .then(recipe => {
        const newSet = new Set(recipeIDs).add(recipe.idMeal);
        setRecipeIDs(newSet);
      })
      .catch(error => console.error(error));
  }

  function nextPage() {
    // safety check before incrementing
    if (isNextPage) setCurPageIndex(curPageIndex + 1);
  }

  function prevPage() {
    // safety check before decrementing
    if (isPrevPage) setCurPageIndex(curPageIndex - 1);
  }

  return (
    <div className="App">
      <div id="sidepadding">
        {recipes.length === 0 ||
        <RecipeNavbar
          isPrevPage={isPrevPage}
          isNextPage={isNextPage}
          prevPage={prevPage}
          nextPage={nextPage}
          getRecipe={getRecipe}
        />
        }
        {recipes.length !== 0 || <LandingPage getRecipe={getRecipe}/>}
        {curPage == null || <RecipeView recipe={curPage} formattedIngredients={ingredientReformatter(curPage)}/>}
      </div>
    </div>
  );
}

