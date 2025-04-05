import { useState } from "react";
import Carousell from "./components/Carousell";
import Header from "./components/Header";
import Notifications from "./components/Notifications";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Notifications />
    </Provider>
  );
}

export default App;
