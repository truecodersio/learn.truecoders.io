import React, { Component } from "react";
import Link from "gatsby-link";

class App extends Component {
  render() {
    return (
      <div style={{ color: `#0093c9` }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <br />
        <div>
          <Link to="/page-2/">Link</Link>
        </div>
      </div>
    );
  }
}

export default App;
