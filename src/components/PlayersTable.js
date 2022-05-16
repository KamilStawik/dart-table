import players from "../content/players";

const PlayersTable = (props) => {
  const tableColumnsNumber = 4;


  return (
    <div style={{ width: "1000px", margin: "auto" }}>

      <h2 style={{ width: "max-content", margin: "auto" }}> {props.title}</h2>

      <table style={{ width: "1000px" }}>
        <tbody>
          <tr>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Id Gracza</th>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Nick Gracza</th>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Imię Gracza</th>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Nazwisko Gracza</th>
          </tr>
          {players.map((player) => (
            <tr key={player.id}>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {player.id} </td>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {player.nick} </td>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {player.firstName} </td>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {player.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;