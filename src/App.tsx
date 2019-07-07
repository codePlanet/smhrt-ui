import React, { FC, ChangeEvent, FormEvent } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { Home } from './home/home';
import './App.scss';

interface NumberListProps {
  numbers: number[];
}

const NumberList: FC<NumberListProps> = ({ numbers }) => {
  return (
    <div>
      {numbers.map(num => (
        <div
          key={num}
          style={{
            height: '30px',
            width: '30px',
            background: 'blue',
            margin: '10px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
          }}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

function About() {
  return (
    <div>
      <h2>About</h2>
      <NumberList numbers={[1, 2, 3]} />
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

function Topic({ match }: { match: any }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }: { match: any }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <NavLink to={`${match.url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`}>Props v. State</NavLink>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

interface NameFormState {
  name: string;
  color: string;
}

interface SimpleProps {}

class NameForm extends React.Component<SimpleProps, NameFormState> {
  private colors = ['Red', 'White', 'Blue'];

  constructor(props: SimpleProps) {
    super(props);
    this.state = { name: '', color: 'blue' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const {
      target: { name, value }
    } = event;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <select
          value={this.state.color}
          name="color"
          onChange={this.handleChange}
        >
          {this.colors.map(color => (
            <option key={color} value={color.toLowerCase()}>
              {color}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
  return (
    <Router>
      <div>
        <NameForm />
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact={true}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/topics">Topics</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

export default App;
