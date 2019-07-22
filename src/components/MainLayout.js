import React from "react";

import GameBoard from "./GameBoard";
import WinnerBanner from "./WinnerBanner";

export default () => {
  return (
    <div>
      <GameBoard />
      <WinnerBanner />
    </div>
  );
};
