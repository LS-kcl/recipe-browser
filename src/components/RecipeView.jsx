import IngredientsView from './IngredientsView.jsx'

export default function RecipeView({ recipe, formattedIngredients }) {
  function instructionSplitter(insString) {
    // Return an array of objects (steps) to be displayed separately
    return insString.split('\n');
  }

  return(
      <div className="centre">
        <div className="wrapper page">
          <div className="right">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
          </div>
          <div className="left">
            <IngredientsView ingredients={formattedIngredients}/>
          </div>
        </div>
        <div className="page">
          {
            instructionSplitter(recipe.strInstructions).map((item) => {
                return <p>{item}</p>;
            })
          }
        </div>
      </div>
  );
}

