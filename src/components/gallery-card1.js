import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        src="/playground_assets/screenshot_20221221_063512-1500h.png"
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-heading">{props.title}</h2>
      <span className="gallery-card1-text">{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'C, Windows, Linux',
  title: 'The Worst Text Editor',
  image_alt: 'image',
  rootClassName: '',
}

GalleryCard1.propTypes = {
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default GalleryCard1
