export default function RecipeNavbar({ isPrevPage, isNextPage, prevPage, nextPage, getRecipe }){
  
  return(
      <div className="centre">
        {!isPrevPage || <button onClick={() => prevPage()}>Previous Recipe</button>}
        <button onClick={() => getRecipe()}>Generate new recipe</button>
        {!isNextPage || <button onClick={() => nextPage()}>Next recipe</button>}
      </div>
  );
}

