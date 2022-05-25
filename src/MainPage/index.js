import GamesTable from "../components/GamesTable";
import PlayersTable from "../components/PlayersTable";

const MainPage = () => (

  <>
    <h1 style={{ width: "max-content", margin: "auto" }}> BobOne Cup!</h1>

    <PlayersTable title="Gracze" />
    <GamesTable title="Terminarz"/>

    {/* <PlayersTable
      title={"Terminarz"}
      columnNumber={4}
      columnNames={[
        "data", "time", "player1Id", "player2Id"
      ]}
    /> */}


  </>
);

export default MainPage;