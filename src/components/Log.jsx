export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ player, square: { row, col } }) => (
        <li key={`${row}${col}`}>
          {player} played at {row}, {col}
        </li>
      ))}
    </ol>
  );
}
