import React from 'react';
import RootStackScreen from './src/navigation/main';
import { Provider } from "react-redux";

import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store} >
      <RootStackScreen token={true} />
    </Provider >
  );
}