import React from 'react'

import placeholderImage from './hero-card-images/school-in-forest-wide-3-1.png'

import WPSettings from 'WPSettings'

export default class HeroImage extends React.Component {
	render() {
		const buildURL = WPSettings.themeURL + "/build";

		return(
			<picture>
				<source 
					media="(min-width: 571px)"
					srcSet={ buildURL + placeholderImage + " 960w, " + buildURL + placeholderImage + " 1920w"}
					sizes="960px"
				/>
				<source
					media="(max-width: 570px)"
					srcSet={ buildURL + placeholderImage + " 360w, " + buildURL + placeholderImage + " 720w"}
				/>
				<img 
					className="image-container" 
					src={ buildURL + placeholderImage }
					alt="Fill from admin"
				/>
			</picture>
		);
	}
}