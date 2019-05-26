import React from 'react';

// internal components
import HeroImage from './HeroImage';
import InfoPanel from './InfoPanel';

export default class HeroCard extends React.Component {
	render() {
		return(
			<div id="info-card-wrap" className="clear-both">
				<div id="hero-image">

						<HeroImage />
						
						<input id="mobile-tooltip-toggle" type="checkbox" />
						<InfoPanel />
				</div>
			</div>
		);
	}
}
