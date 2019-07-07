import * as React from 'react';
import './home.scss';
import logo from '../logo.svg';

export const Home: React.FunctionComponent = () => {
  return (
    <div className="home">
      <header className="home__header">
        <img src={logo} className="home__logo" alt="logo" />
        <p>
          Edit <code>src/home.tsx</code> and save to reload.
        </p>
        <a
          className="home__link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
