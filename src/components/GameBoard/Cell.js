import React from "react";

class Cell extends React.Component {
  trySelectingCell = () => {
    const { xCoord, yCoord, addMove } = this.props;
    addMove(xCoord, yCoord);

    // if(this.props.isFilled) {
    //     // get some notification
    // } else {
    //     this.addMove(xCoord, )
    // }
  };

  render() {
    const { symbol } = this.props;

    return (
      <div
        onClick={this.trySelectingCell}
        style={{
          border: "1px solid black",
          padding: "2rem",
          height: "4rem",
          width: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem"
        }}
      >
        <p>{!!symbol ? symbol : " "}</p>
      </div>
    );
  }
}

export default Cell;
