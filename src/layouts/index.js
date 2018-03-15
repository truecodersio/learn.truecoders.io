import React from "react";

const IndexLayout = ({ children }) => (
  <div style={{ margin: `0 auto`, padding: `0 1rem` }}>
    <h1>TrueCoders</h1>
    {children()}
  </div>
);

export default IndexLayout;
