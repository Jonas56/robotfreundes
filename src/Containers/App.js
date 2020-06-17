import React from "react";
import CardsList from "../Components/CardsList";
import Searchbox from "../Components/Searchbox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };
  render() {
    const filtredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (!this.state.robots.length) {
      return <h1>Loading ...</h1>;
    } else {
      return (
        <div className="georgia tc">
          <h1 className="f1">RobotFreinds</h1>
          <Searchbox onSearchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardsList robots={filtredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
