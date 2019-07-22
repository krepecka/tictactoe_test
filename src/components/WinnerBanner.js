import React from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class WinnerBanner extends React.Component {
  render() {
    const { winner, restartGame } = this.props.store;

    if (!winner) return null;

    return (
      <div style={{ paddingTop: "20px" }}>
        <h2>Our winner is {winner}!</h2>{" "}
        <button onClick={restartGame}>Play again</button>
      </div>
    );
  }
}

export default WinnerBanner;
