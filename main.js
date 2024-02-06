const team = {
    _players: [
      { firstName: "Luka", lastName: "Modric", age: 35 },
      { firstName: "Neymar", lastName: "Jr", age: 29 },
      { firstName: "Robert", lastName: "Lewandowski", age: 32 } 
    ],
    _games: [
      { opponent: 'Barcelona', teamPoints: 3, opponentPoints: 2 },
      { opponent: 'Bayern Munich', teamPoints: 4, opponentPoints: 1 },
      { opponent: 'Manchester City', teamPoints: 5, opponentPoints: 6 }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer("Kevin", "De Bruyne", 29);
  team.addPlayer("Sergio", "Ramos", 35);
  team.addPlayer("Kylian", "Mbappe", 23);
  
  team.addGame("Paris Saint-Germain", 3, 2);
  team.addGame("Real Madrid", 2, 1);
  team.addGame("Liverpool", 5, 3);
  