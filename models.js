export class Player {
  user = null;
  agent = null;

  constructor(user) {
    this.user = user;
  }
}

class StandardMatch {
  teamA = null;
  teamB = null;
  datetime = null;

  constructor(teamA, teamB) {
    this.teamA = teamA;
    this.teamB = teamB;
  }
}

export class Unrated extends StandardMatch {
  constructor(teamA, teamB) {
    super(teamA, teamB);
  }
}

export class Competitive extends StandardMatch {
  constructor(teamA, teamB) {
    super(teamA, teamB);
  }
}