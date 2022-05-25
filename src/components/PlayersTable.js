import players from "../content/players";
import matchHistory from "../content/matchHistory";
import { getRanking } from "../content/ranking";

const PlayersTable = (props) => {
  const tableColumnsNumber = 2;
  const ranking = getRanking(players, matchHistory);
  console.log('Ranking:', ranking)


  return (
    <div style={{ width: "1000px", margin: "auto" }}>

      <h2 style={{ width: "max-content", margin: "auto", marginTop: "50px"}}> {props.title}</h2>

      <table style={{ width: "1000px" }}>
        <tbody>
          <tr>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Nick Gracza</th>
            <th style={{ width: `${1000 / tableColumnsNumber}px` }}> Ilość zwycięstw</th>
          </tr>
          {ranking.map((rankingPosition) => (
            <tr key={rankingPosition.id}>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {rankingPosition.nick} </td>
              <td style={{ width: `${1000 / tableColumnsNumber}px`, textAlign: "center" }}> {rankingPosition.playerWins} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;