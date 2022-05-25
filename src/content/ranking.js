

const getRanking = (players, matchHistory) => {
  let playersWins = [];

  players.forEach(player => { 
    let playerWins = 0;

    for(let i = 0; i < matchHistory.length; i++) {
      if ((matchHistory[i].player1Id === player.id && matchHistory[i].result1 > matchHistory[i].result2)
      || (matchHistory[i].player2Id === player.id && matchHistory[i].result2 > matchHistory[i].result1)) {
        playerWins++;
      }
    }
    playersWins.push({ ...player, playerWins: playerWins });
  });

  playersWins.sort((a, b) => b.playerWins - a.playerWins)

  return playersWins;
}

export {
  getRanking,
};