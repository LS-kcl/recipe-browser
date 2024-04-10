import IngredientView from './IngredientView.jsx'

export default function RecipeView({ recipe, formattedIngredients }) {
  function instructionSplitter(insString) {
    // Return an array of objects (steps) to be displayed separately
    return insString.split('\n');
  }

  return(
      <div className="centre">
          <p>{recipe.idMeal}</p>
          <p>{recipe.strMeal}</p>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          {
            formattedIngredients.map((ing) => {
              return (
                <IngredientView
                  ingredient={ing.ing}
                  amount={ing.amt}
                />
              );
            })
          }
          {
            instructionSplitter(recipe.strInstructions).map((item) => {
                return <p>{item}</p>;
            })
          }
      </div>
  );
}

