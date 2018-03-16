import React from 'react'
import Link from 'gatsby-link'

import logo from '../../assets/logo-only.svg'

class Sidebar extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => (
      <li key={index}>
        <Link to={item.path}>{item.title}</Link>
      </li>
    ))

    return (
      <div
        style={{
          height: '100%',
          width: '224px',
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          overflowX: 'hidden',
          padding: '16px 32px',
        }}
      >
        <Link to="/">
          <img src={logo} alt="Logo" style={{ width: '80px' }} />
        </Link>
        <ul>
        {items}
        </ul>
      </div>
    )
  }
}

export default Sidebar
