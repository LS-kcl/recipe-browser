import IngredientsView from './IngredientsView.jsx'
import InstructionsView from './InstructionsView.jsx'


export default function RecipeView({ recipe, formattedIngredients }) {

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
          <InstructionsView instructions={recipe.strInstructions} />
        </div>
      </div>
  );
}

