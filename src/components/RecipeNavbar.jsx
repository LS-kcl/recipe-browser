export default function RecipeNavbar({ isPrevPage, isNextPage, prevPage, nextPage, getRecipe }){
  
  return(
      <div className="centre">
        {!isPrevPage || <button className="page" onClick={() => prevPage()}>Previous Recipe</button>}
        <button className="page" onClick={() => getRecipe()}>Generate new recipe</button>
        {!isNextPage || <button className="page" onClick={() => nextPage()}>Next recipe</button>}
      </div>
  );
}

