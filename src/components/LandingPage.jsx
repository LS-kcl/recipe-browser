export default function LandingPage({ getRecipe }){
  
  return(
      <div className="centre">
        <h1>Generate your first recipe:</h1><button onClick={() => getRecipe()}>Click me!</button>
      </div>
  );
}

