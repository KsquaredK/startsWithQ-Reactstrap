import logo from './logo.svg';
import { Button } from 'reactstrap';
import './StartsWithQ.css';

function StartsWithQ() {
  return (
    <div className="Starts_With_Q">
      <header className="Starts_With_Q-header">
        <img src={logo} className="Starts_With_Q-logo" alt="logo" />
        <p>
          Edit <code>src/StartsWithQ.js</code> and save to reload.
        </p>
        <a
          className="Starts_With_Q-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default StartsWithQ;
