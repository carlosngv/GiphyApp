import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__backInLeft">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={url} alt={title} />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}


GifGridItem.propTypes =  {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}