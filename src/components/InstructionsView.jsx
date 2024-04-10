export default function InstructionsView({ instructions }) {
  function instructionSplitter(insString) {
    // Return an array of objects (steps) to be displayed separately
    return insString.split('\n');
  }

  return (
    <div className="instructions-text">
    <h2>Instructions:</h2>
      {
      instructionSplitter(instructions).map((instruction) => {
        return <p>{instruction}</p>;
      })
      }
    </div>
  )
}
