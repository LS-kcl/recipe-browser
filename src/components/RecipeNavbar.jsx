export default function RecipeNavbar({ isPrevPage, isNextPage, prevPage, nextPage, getRecipe }){
  
  return(
      <div className="centre">
        {
          !isPrevPage ||
          <button className="page button" onClick={() => prevPage()}>Previous Recipe</button>
        }
        <button className="page button" onClick={() => getRecipe()}>Generate new recipe</button>
        {
          !isNextPage ||
          <button className="page button" onClick={() => nextPage()}>Next recipe</button>
        }
      </div>
  );
}

