import React from 'react'
import Link from 'next/link'

import { config } from '../../config/config'

const Header = ({ title = config.appName, children }) => (
  <header
    className='color-header-bg color-header-fg darker'
  >
    <AppIcon />
    
    {title && <span className='title'>{title}</span>}
    
    {children}
    
    <style jsx>{`
      :global(main) {
        margin-top: 50px;
      }

      header {
        position: fixed;
        z-index: 1000;
        width: 100%;
        left: 0;
        top: 0;
        height: 50px;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }

      .title {
        font-weight: 500;
      }
    `}
    </style>
  </header>
)
export default Header

const AppIcon = () => (
  <Link href='/'>
    <a className='app-icon' title={config.appName}>
      <img src='/favicon.png' alt={config.appName} />
      <style jsx>{`
        .app-icon {
          position: absolute;
          left: 10px;
          top: 10px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        a:hover {
          filter: none;
        }

        img {
          width: 100%;
          height: 100%;
        }
      `}
      </style>
    </a>
  </Link>
)
