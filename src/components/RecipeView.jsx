
export default function RecipeView({ recipe, formattedIngredients }) {
  return(
      <div className="centre">
          <p>{recipe.idMeal}</p>
          <p>{recipe.strMeal}</p>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          {
            formattedIngredients.map((ing) => {
              return <p>{ing.ing}: {ing.amt}</p>;
            })
          }
          <p>{recipe.strInstructions}</p>
      </div>
  );
}

