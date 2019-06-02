import React from 'react';

import magnifierIcon from './magnifier-icon.svg';
import SiteSettings from 'SiteSettings'

export default class Search extends React.Component {
	render() {
		const buildURL = SiteSettings.themeURL + "/build";
		return(
			<div id="searchform" className="search-container">
				<div className="mobile-centering-wrapper clear-both">
					<input name="s" id="search-field" placeholder="Hledat" type="text" />
					<img src={ buildURL + magnifierIcon } alt="site identyty" />
				</div>
			</div>
		);
	}
}