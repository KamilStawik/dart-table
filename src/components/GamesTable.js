import players from "../content/players";
import gamesCalendar from "../content/gamesCalendar";

const GamesTable = (props) => {
  const tableColumnsNumber = 4;

  const getPlayerNick = (playerIndex) => {
    return players.find((player) => playerIndex === player.id).nick;
  };

  return (
    <div style={{ width: "1000px", margin: "auto", marginTop: "50px" }}>

      <h2 style={{ width: "max-content", margin: "auto" }}> {props.title}</h2>

      <table style={{ width: "1000px" }}>
        <tbody>
          <tr>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Data + godzina</th>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Gracz 1</th>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Gracz 2</th>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Wynik</th>
          </tr>
          {gamesCalendar.map((game) => (
            <tr key={game.id}>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {`${game.date} ${game.time}`} </td>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {getPlayerNick(game.player1Id)} </td>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {getPlayerNick(game.player2Id)} </td>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {game.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamesTable;