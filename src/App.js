import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Child from './Components/Child';
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
         <Route exact path="/home/:id" component={Child} />
        <Route path="/home" component={Parent} />
        <Redirect to="/home" />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
