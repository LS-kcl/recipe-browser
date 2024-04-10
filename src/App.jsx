import { useState } from 'react'
import './App.css';

export default function App() {
  // We must ensure recipes are unique as we are generating random recipes
  const [recipeIDs, setRecipeIDs] = useState(new Set());
  const [recipes, setRecipes] = useState([]);

  function ingredientReformatter(badRecipeFormat) {
    // Take in badly formatted recipe
    // Iterate through and add to array

    let newArr = [
      {ing: badRecipeFormat.strIngredient1, amt: badRecipeFormat.strMeasure1},
      {ing: badRecipeFormat.strIngredient2, amt: badRecipeFormat.strMeasure2},
      {ing: badRecipeFormat.strIngredient3, amt: badRecipeFormat.strMeasure3},
      {ing: badRecipeFormat.strIngredient4, amt: badRecipeFormat.strMeasure4},
      {ing: badRecipeFormat.strIngredient5, amt: badRecipeFormat.strMeasure5},
      {ing: badRecipeFormat.strIngredient6, amt: badRecipeFormat.strMeasure6},
      {ing: badRecipeFormat.strIngredient7, amt: badRecipeFormat.strMeasure7},
      {ing: badRecipeFormat.strIngredient8, amt: badRecipeFormat.strMeasure8},
      {ing: badRecipeFormat.strIngredient9, amt: badRecipeFormat.strMeasure9},
      {ing: badRecipeFormat.strIngredient10, amt: badRecipeFormat.strMeasure10},
      {ing: badRecipeFormat.strIngredient11, amt: badRecipeFormat.strMeasure11},
      {ing: badRecipeFormat.strIngredient12, amt: badRecipeFormat.strMeasure12},
      {ing: badRecipeFormat.strIngredient13, amt: badRecipeFormat.strMeasure13},
      {ing: badRecipeFormat.strIngredient14, amt: badRecipeFormat.strMeasure14},
      {ing: badRecipeFormat.strIngredient15, amt: badRecipeFormat.strMeasure15},
      {ing: badRecipeFormat.strIngredient16, amt: badRecipeFormat.strMeasure16},
      {ing: badRecipeFormat.strIngredient17, amt: badRecipeFormat.strMeasure17},
      {ing: badRecipeFormat.strIngredient18, amt: badRecipeFormat.strMeasure18},
      {ing: badRecipeFormat.strIngredient19, amt: badRecipeFormat.strMeasure19},
      {ing: badRecipeFormat.strIngredient20, amt: badRecipeFormat.strMeasure20},
    ]

    // Filter all "zero" items and return
    return newArr.filter((item) => item.ing !== "");
    
  }

  function getRecipe() {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(url)
      .then(response => response.json())
      .then(wrappedData => wrappedData.meals[0])
      .then(recipe => {
        setRecipes([...recipes, recipe])
      })
      .then(recipe => {
        const newSet = Set(recipeIDs).add(recipe.idMeal);
        setRecipeIDs(newSet);
      })
      .catch(error => console.error(error));
    // Make query to api
    // Keep making queries until some recipeID not in recipeIDs is found
    // Add this new recipe object to the recipes array
    // Update the set of recipeIDs
  }

  return (
    <div className="App">
      <div id="sidepadding">
        {
          !recipes.length ? <LandingPage getRecipe={getRecipe}/> : null
        }
        {
          recipes.map((recipe) => {
            console.log(recipe);
            return (
              <>
                <p>{recipe.idMeal}</p>
                <p>{recipe.strMeal}</p>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                {
                  ingredientReformatter(recipe).map((ing) => {
                    return <p>{ing.ing}: {ing.amt}</p>;
                  })
                }
                <p>{recipe.strInstructions}</p>
              </>
            );
          })
        }
      </div>
    </div>
  );
}

function LandingPage({ getRecipe }){
  
  return(
      <div className="centre">
        <p>Generate your first recipe:</p><button onClick={() => getRecipe()}>Click me!</button>
        <h1>How to make a Roast Beef Dinner</h1>
        <em>By: Nicky Corbishley</em>

        <table>
          <tr>
            <th><b>Detail</b></th><th><b>Amount</b></th>
          </tr>
          <tr>
            <td>Prep time:</td><td>20 minutes</td>
          </tr>
          <tr>
            <td>Cook time:</td><td>2 hours</td>
          </tr>
          <tr>
            <td>Total time:</td><td>2 hours 20 minutes</td>
          </tr>
          <tr>
            <td>Course:</td><td>Dinner</td>
          </tr>
          <tr>
            <td>Cuisine:</td><td>British</td>
          </tr>
          <tr>
            <td>Servings:</td><td>Four people</td>
          </tr>
        </table>

        <img src="https://www.kitchensanctuary.com/wp-content/uploads/2019/04/Square-FS-276x276.jpg" />
      </div>
  );
}

function Ingredients(){
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const addToList = (event) => {
    event.preventDefault();
    setItems([...items, inputText]);
  }
  
  return(
    <>
    <h2>Ingredients:</h2>

    <b>Roast Beef:</b>
    <ul>
      <li>2.6 kg (3.3 lbs) topside of beef - (this should be enough meat for 4 people with leftovers – or 6-7 people if no leftovers)</li>
      <li>2 tbsp olive oil</li>
      <li>½ tsp salt</li>
      <li>½ tsp black pepper</li>
    </ul>

    <b>Yorkshire puddings:</b>
    <ul>
      <li>107 g (1 cup minus 1 tbsp) plain (all-purpose) flour</li>
      <li>4 medium eggs</li>
      <li>152 ml (½ cup + 2 tbsp) milk</li>
      <li>5 tsp beef dripping or lard</li>
      <li>A pinch salt and pepper</li>
    </ul>

    <b>Roast Potatoes:</b>
    <ul>
      <li>122 g (½ cup) lard or duck fat</li>
      <li>2 kg (3.25 lbs) floury potatoes - such as Maris Piper or red-skinned Rooster potatoes</li>
      <li>2 tsp Maldon salt</li>
      <li>2 tbsp fresh thyme leaves</li>
      <li>utter pepper carrots:</li>
      <li>302 g (10.5 oz) Chantenay carrots</li>
      <li>3 tbsp salted butter</li>
      <li>¼ tsp white pepper</li>
    </ul>

    <b>Easy cauliflower cheese:</b>
    <ul>
      <li>2 small cauliflower - broken into small florets</li>
      <li>102 g (1 cup minus 1 tbsp) mature/strong Cheddar cheese</li>
      <li>182 ml (¾ cup) double (heavy) cream</li>
      <li>¼ tsp salt</li>
      <li>¼ tsp black pepper</li>
      <li>2 tbsp chopped fresh parsley</li>
      <li>oast beef gravy:</li>
      <li>3 tbsp cornflour/cornstarch</li>
      <li>6 tbsp cold water</li>
      <li>meat juices from your roasted beef</li>
      <li>4 beef stock cubes - crumbled</li>
      <li>722 ml (3 cups) hot vegetable stock - from your boiled/steamed vegetables and potatoes</li>
      <li>¼ tsp salt</li>
      <li>¼ tsp black pepper</li>
      <li>¼ tsp gravy browning - (optional)</li>
    </ul>

    <b>Steamed Broccoli:</b>
    <ul>
      <li>302 g (10.5 oz) tenderstem broccoli</li>
      <li>2 tbsp salted butter</li>
      <li>pinch salt and pepper</li>
    </ul>

  <div id="shopping-list">
      <h3>Shopping List:</h3>
      <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
      </ul>
      <form onSubmit={addToList}>
        <label>
          Item to add:
          <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  </div>
  </>
  );
}

function Steps() {
      return(
      <>
      <h3>INSTRUCTIONS</h3>
      <div className="cooking-stage">
        <h4>Pre prep</h4>
        <p>Preheat the oven to 180C/350F (fan).</p>
        <p>Drizzle the oil over the beef and season with the salt and pepper transfer to a roasting tin and place in oven (uncovered) for 1 hour and 15 minutes (for medium) or 1 hour and 30 minutes (for well done). Baste once, halfway through cooking.</p>
        <p>1.5 kg (3.3 lbs) topside of beef,1 tbsp olive oil,½ tsp salt,½ tsp black pepper</p>
        <p>Prepare the Yorkshire pudding mixture. Place the flour in a jug and make a well in the centre. Add the eggs and stir together with a balloon whisk, bringing the flour into the centre with the eggs bit by bit. Add in the milk and whisk again until combined. It’s fine if it’s a little bit lumpy.</p>
        <p>105 g (1 cup minus 1 tbsp) plain (all-purpose) flour,3 medium eggs,150 ml (½ cup + 2 tbsp) milk</p>
        <p></p>
        <p>Place the jug in the fridge to chill (for at least 30 minutes).</p>
        <p>Add the lard/duck fat for the roast potatoes to a roasting tin.</p>
        <p>120 g (½ cup) lard or duck fat</p>
        <p>Add ½ tsp of beef dripping/lard to 8 holes of a 12-hole metal bun tin for the Yorkshire puddings.</p>
        <p>4 tsp beef dripping or lard</p>
        <p>Peel the potatoes and chop them into chunky pieces a little bigger than a ping pong ball (approx 2 inches/5cm across). Peel the carrots, chop the cauliflower into florets and grate the cheese for the cauliflower cheese.</p>
      </div>
        
      <div className="cooking-stage">
        <h4>Cooking</h4>
        <p>1 kg (2.25 lbs) floury potatoes,300 g (10.5 oz) Chantenay carrots,1 small cauliflower</p>
        <p>Place the potatoes in a pan and cover with cold water. Place on the hob on a high heat and bring to the boil, then turn down the heat and simmer for 8-9 minutes - until softened at the edges.</p>
        <p>Meanwhile, place the potato roasting tin in the top of the oven (move the beef down) to heat the fat for 10 minutes.</p>
        <p>Drain the potatoes in a colander (save the potato water for the gravy) and give them a good shake to really roughen up the edges. Don't worry if a few break apart and they look overly fluffy. The more fluffy they are, the better they'll absorb the fat and the crispier they'll be. Put to one side.</p>
        <p>Bring a pan of water to the boil and place the cauliflower in a steam basket over the top. Place a lid on the pan (or you can place the cauliflower directly in the boiling water if you don't have a steam basket).</p>
        <p>Turn the water down to a simmer and simmer for 5 minutes until the cauliflower is tender but not soggy. Drain the cauliflower.</p>
        <p>Open the oven and place the drained potatoes in the roasting tin, turn them in the fat. Place in oven for 25 minutes.</p>
        <p>By now, the beef should be almost ready (and it will need to rest while you prepare the rest of the meal). As soon as it’s done, take the beef out oven and turn the heat of the oven up to 220C/425F (fan).</p>
        <p>Transfer the beef to a board, and cover it with foil and a couple of tea towels – this will allow the meat to rest and keep warm for 30-40 minutes.</p>
        <p>Now it’s time to assemble the cauliflower cheese. Pour 2 tbsp of the cream into a baking dish and sprinkle on 2 tbsp of the grated cheese. Add half of the cauliflower, then top with half of the remaining cream and a quarter of the remaining cheese. Sprinkle on half of the salt and pepper.</p>
        <p>100 g (1 cup minus 1 tbsp) mature/strong Cheddar cheese,180 ml (¾ cup) double (heavy) cream,¼ tsp salt,¼ tsp black pepper</p>
        <p>Top with the remaining cauliflower, then pour on the remaining cream. Sprinkle on the rest of the cheese, salt and pepper. Put to one side.</p>
        <p>Bring a pan of water to the boil for steaming the carrots and broccoli (if boiling the veg rather than steaming, add the carrots to the water now, whilst it’s cold. Make sure the water covers the carrots with about an inch of water to spare, so you can syphon off some of it for the gravy).</p>
        <p>Turn over the roast potatoes in the oven and move to a lower shelf. Cook for a further 20-25 minutes, until golden.</p>
        <p>Add the Yorkshire pudding tin to the top of the oven. Heat for 5 minutes until the oil is very hot.</p>
        <p>Put the carrots in the steam basket and place a lid on. Steam for 20 minutes</p>
        <p>Remove the Yorkshire pudding mixture from the fridge. Season with the salt and pepper and whisk together. Open the oven and pour the Yorkshire pudding mixture evenly into the Yorkshire pudding holes with the fat in. Place the cauliflower cheese at the top of the oven too. Close the oven door. Cook the Yorkshire puddings and cauliflower cheese for 20 minutes – until golden.</p>
        <p>pinch salt and pepper</p>
        <p>Prepare a cornstarch slurry for the gravy by mixing the cornflour/cornstarch with the cold water in a small jug.</p>
        <p>2 tbsp cornflour/cornstarch,5 tbsp cold water</p>
        <p>Put broccoli on to steam or boil for 8-10 minutes – until tender.</p>
        <p>300 g (10.5 oz) tenderstem broccoli</p>
      </div>

      <div className="cooking-stage">
        <h4>Finishing off</h4>
        <p>Now it’s time to make the gravy. Place the meat roasting tray on the hob (make sure it’s hob-proof) and start to heat. Sprinkle on the crumbled stock cubes. Add the reserved water from boiling the potatoes (approx. 2-3 cups/480ml-720ml) and stir, whilst heating on a high heat until bubbling. Scrape up any bits from the pan and mix in. This is where the meaty flavour comes from.</p>
        <p>meat juices from your roasted beef,3 beef stock cubes,720 ml (3 cups) hot vegetable stock,¼ tsp salt,¼ tsp black pepper</p>
        <p>Top up with more water from the vegetable steam pan (carefully) if more gravy is needed. Once bubbling, slowly add the cornstarch slurry, a splash at a time, whilst stirring with the whisk, until the gravy is the desired consistency. Stir in a little gravy browning if you’d like the gravy to be darker. Leave on a very low heat to keep warm.</p>
        <p>¼ tsp gravy browning</p>
        <p>Transfer the meat from the board to a warm serving plate – ready for carving at the table. If there are any meat juices on the board, you can add these to the gravy.</p>
        <p>Drain the carrots and broccoli. Place in a serving bowl and top with butter and a sprinkle of white pepper for the carrots, and butter with salt and pepper for the broccoli.</p>
        <p>2 tbsp salted butter,¼ tsp white pepper,1 tbsp salted butter,pinch salt and pepper</p>
        <p>Remove the Yorkshire puddings and roasted potatoes from the oven and transfer them to serving dishes. Remove cauliflower cheese from the oven and sprinkle fresh parsley on top.</p>
        <p>1 tsp Maldon salt,1 tbsp fresh thyme leaves,1 tbsp chopped fresh parsley</p>
        <p>Carefully pour the gravy into a gravy jug.</p>
        <p>Time to serve! </p>
      </div>
    </>
  );
}
