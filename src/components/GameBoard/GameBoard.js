import React from "react";
import { observer, inject } from "mobx-react";
import Cell from "./Cell";

@inject("store")
@observer
class GameBoard extends React.Component {
  render() {
    return this.renderAllCells();
  }

  renderAllCells() {
    const { moves, addMove } = this.props.store;
    const rows = [];

    for (let y = 0; y < 3; y++) {
      const cells = [];

      for (let x = 0; x < 3; x++) {
        const move = moves.find(move => move.x === x && move.y === y);

        cells.push(
          <Cell
            symbol={!!move ? move.player : null}
            xCoord={x}
            yCoord={y}
            addMove={addMove}
            key={x + "" + y}
          />
        );
      }

      rows.push(<Row key={y}>{cells}</Row>);
    }

    return rows;
  }
}

const Row = ({ children }) => (
  <div style={{ display: "flex" }}> {children}</div>
);

export default GameBoard;
