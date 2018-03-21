// Imports

import * as React from 'react'
import Link from 'gatsby-link'

const logo = require('../../assets/logo-only.svg') as string

// Interfaces

export interface SidebarProps {
  items: {
    module: string
    path: string
    title: string
  }[]
}

// Classes

export default class Sidebar extends React.Component<SidebarProps, {}> {
  render() {
    let currentModule = ''

    const items = this.props.items.map(item => {
      const showHeader = currentModule !== item.module
      currentModule = item.module

      return (
        <div key={item.path}>
          {showHeader && <h3>{currentModule}</h3>}
          <li
            style={{
              listStyle: 'none outside',
            }}
          >
            <Link
              to={item.path}
              style={{
                textDecoration: 'none',
              }}
              activeStyle={{
                textDecoration: 'none',
              }}
            >
              {item.title}
            </Link>
          </li>
        </div>
      )
    })

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
