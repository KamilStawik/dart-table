import players from "../content/players";
import matchHistory from "../content/matchHistory";
import { getRanking } from "../content/ranking";
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const PlayersTable = (props) => {
  const tableColumnsNumber = 2;
  const ranking = getRanking(players, matchHistory);
  console.log('Ranking:', ranking)

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'firstName', headerName: 'Imię', width: 130 },
    { field: 'playerWins', headerName: 'Zwycięstwa', width: 200 },
  ];


  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      {console.log('DataGrid ranking:', ranking)}

      <h2 style={{ width: "max-content", margin: "auto", marginTop: "50px" }}> {props.title}</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nick</TableCell>
              <TableCell align="right">Zwycięstwa</TableCell>
              <TableCell align="right">Wygrane Legi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranking.map((rankingPosition) => (
              <TableRow
                key={rankingPosition.firstName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{rankingPosition.firstName}</TableCell>
                <TableCell align="right">{rankingPosition.playerWins}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <table style={{ width: "1000px" }}>
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
      </table> */}
    </div>
  );
};

export default PlayersTable;
