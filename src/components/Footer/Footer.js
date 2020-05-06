import React from 'react'
import './Footer.scss'

const Footer = props => {
  const year = new Date().getFullYear()
  return (
    <footer className="Footer">
      <a className="Footer__link" href="https://www.sashabajzek.com">
        &copy; {year} Sasha Bajzek
      </a>
    </footer>
  )
}

export default Footer
