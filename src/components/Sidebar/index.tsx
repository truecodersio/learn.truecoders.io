import * as React from 'react'
import Link from 'gatsby-link'

const logo = require('../../assets/logo-only.svg') as string

interface SidebarProps {
  items: {
    path: string
    title: string
  }[]
}

class Sidebar extends React.Component<SidebarProps, {}> {
  render() {
    const items = this.props.items.map(item => (
      <li
        style={{
          listStyle: 'none outside',
        }}
        key={item.path}
      >
        <Link
          to={item.path}
          style={{
            textDecoration: 'none'
          }}
          activeStyle={{
            textDecoration: 'none'
          }}
          key={item.path}
        >
          {item.title}
        </Link>
      </li>
    ))

    return (
      <div
        style={{
          height: '100%',
          width: '352px',
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          overflowX: 'hidden',
          padding: '32px 16px',
        }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '80px', marginLeft: '32px' }}
          />
        </Link>
        <ul>{items}</ul>
      </div>
    )
  }
}

export default Sidebar
