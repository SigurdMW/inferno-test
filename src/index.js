import Inferno from 'inferno';
import Component from 'inferno-component';
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import './index.css';


const browserHistory = createBrowserHistory();

class Homepage extends Component {
  render(){
    return (
      <div className="test">Dette er forsiden til appen som Vemund og jeg har laget.</div>
    )
  }
}

class TestPage extends Component {
  render(){
    return (
      <div className="test">Dette er en rar testside som vi også har laget.</div>
    )
  }
}

class Vemund extends Component {
  render(){
    return (
      <div>
        Bare se. <br />
        <img src="http://www.ebmodels.no/wp-content/uploads/2015/09/Vemund-T-95-185-Wesley-Garcia-WEB-02-1-600x600_t.jpg" />
      Looks can kill.
    </div>
  )
  }
}

const routes = (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <IndexRoute component={ Homepage }/>
      <Route path="/test" component={TestPage} />
      <Route path="/vemund" component={Vemund} />
    </Route>
  </Router>
);

Inferno.render(routes, document.getElementById('app'));
