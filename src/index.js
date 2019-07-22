import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import MainLayout from "./components/MainLayout";

import GameStore from "./stores/GameStore";
import { Provider } from "mobx-react";

const store = new GameStore();

render(
  <Provider store={store}>
    <div>
      <DevTools />
      <MainLayout store={store} />
    </div>
  </Provider>,
  document.getElementById("root")
);

store.addMove(0, 0);
store.addMove(0, 1);

// playing around in the console
window.store = store;
