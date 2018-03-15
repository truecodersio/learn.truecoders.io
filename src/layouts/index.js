import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const IndexLayout = ({ children }) => (
  <div>
    <Helmet
      title="TrueCoders"
      meta={[
        { name: "description", content: "TrueCoders" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <div
      style={{
        margin: "0 auto",
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 24
      }}
    >
      {children()}
    </div>
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.func
};

export default IndexLayout;
