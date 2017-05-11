import { version } from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h2>{`Vemund er VELDIG kul i dag ${version}`}</h2>
        </div>
        <p className="App-intro">
          Vent litt, Vemund er jo ALLTID kul! <br />
          <Link to="/test">Testside.</Link>
          <br />
          <Link to="/vemund">Vemunds bilde</Link>
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
