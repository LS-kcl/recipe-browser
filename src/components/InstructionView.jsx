export default function InstructionView({ instructions }) {
  return (
    <div className="instructions-text">
      {
      instructions.map((instruction) => {
        return <p>{instruction}</p>;
      })
      }
    </div>
  )
}
