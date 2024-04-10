export default function InstructionView({ instructions }) {
  return (
    instructions.map((instruction) => {
      return <p>{instruction}</p>;
    })
  )
}
