export default function IngredientsView({ ingredients }) {
  function getImageID(ingredientName) {
    const base = "https://www.themealdb.com/images/ingredients/"
    const ingredient = ingredientName;
    const end = ".png"
    return base + ingredient + end;
  }
  return (
    <div className="grid-container">
    {
      ingredients.map((ing) => {
          return (
            <div>
              <img src={getImageID(ing.ing)} alt={ing.ing}/>
              <p>{ing.ing}: {ing.amt}</p>
            </div>
          );
        })
    }
    </div>
  )
}
