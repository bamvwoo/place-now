import { Link, Route, Switch } from 'react-router-dom';
import Main from './pages/main/Main.js';
import './assets/common.scss';

function App() {
  return (
      <div className="App">
          <Route exact path="/">
              <Main />
          </Route>
      </div>
  );
}

export default App;
