import './App.css';
import { Routing, store } from '../config';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
