import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/about" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/projects" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <Link to="/collaborate" className="navigation-links-navlink2">
        {props.text2}
      </Link>
      <Link to="/blog" className="navigation-links-navlink3">
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Collaborate',
  text: 'About',
  rootClassName: '',
  text1: 'Projects',
  text4: 'Blog',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
