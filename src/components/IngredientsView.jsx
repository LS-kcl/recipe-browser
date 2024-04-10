export default function IngredientsView({ ingredients }) {
  return (
    <ul>
    {
      ingredients.map((ing) => {
          return (
            <li>{ing.ing}: {ing.amt}</li>
          );
        })
    }
    </ul>
  )
}
