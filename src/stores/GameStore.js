import { observable, action, computed, reaction } from "mobx";
import { getWinner } from "../services/boardLogicService";

class Move {
  player;
  x;
  y;

  constructor(x, y, player) {
    this.x = x;
    this.y = y;
    this.player = player;
  }
}

class GameStore {
  @observable moves = [];
  @observable playerSymbol;

  @observable winner = null;

  constructor() {
    reaction(
      () => this.moves.length,
      () => {
        const possibleWinner = getWinner(this.moves);
        if (possibleWinner) {
          this.winner = possibleWinner;
        }
      }
    );
  }

  currentPlayer;

  @action
  addMove = (x, y) => {
    const cellTaken = this.moves.filter(m => m.x == x && m.y == y).length == 1;

    if (!cellTaken) {
      this.moves.push(new Move(x, y, this.currentPlayer));
    }
  };

  @action
  restartGame = () => {
    this.moves = [];
    this.winner = null;
  };

  @computed
  get currentPlayer() {
    const movesMade = this.moves.length;
    if (movesMade > 0) {
      return this.moves[movesMade - 1].player === "x" ? "o" : "x";
    } else {
      return "x";
    }
  }
}

export default GameStore;
