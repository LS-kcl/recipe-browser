export default function LandingPage({ getRecipe }){
  
  return(
      <div className="centre page">
        <h1>Recipe Generator</h1>
        <h3>Don't know what to eat today? Let us give you some inspiration!</h3>
        <button className="page button" onClick={() => getRecipe()}>Click me</button>
      </div>
  );
}


