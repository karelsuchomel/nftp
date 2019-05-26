import React from 'react';

import magnifierIcon from '../../images/magnifier-icon.svg';
import WPSettings from 'WPSettings'

export default class Search extends React.Component {
	render() {
		const buildURL = WPSettings.themeURL + "/build";
		return(
			<div id="searchform" className="search-container">
				<div className="mobile-centering-wrapper clear-both">
					<input name="s" id="search-field" placeholder="Hledat" type="text" />
					<svg version="1.1" baseProfile="full" width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
						<path d="m12.923 11.354a6.1317 6.1315 0 0 1 -1.92 1.9128l4.3355 4.3355c.53077.53076 1.3856.53076 1.9164 0 .53077-.53076.53077-1.3856 0-1.9164l-4.3318-4.3318z" fill="#646464"/>
						<path d="m.90651 7.3384a6.4321 6.4319 0 0 0 6.4321 6.4316 6.4321 6.4319 0 0 0 6.4324 -6.4316 6.4321 6.4319 0 0 0 -6.4324 -6.4319 6.4321 6.4319 0 0 0 -6.4321 6.4319z" fill="none" stroke="#646464" stroke-dashoffset="8" stroke-width="1.813"/>
					</svg>
				</div>
			</div>
		);
	}
}