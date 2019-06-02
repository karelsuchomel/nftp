import React from 'react';

import SiteLogo from './logo-light.svg'
import SiteSettings from 'SiteSettings'

export default class SiteIdentity extends React.Component {
	render() {
		const buildURL = SiteSettings.themeURL + "/build";
		return(
			<a id="logo-wrapper" href="#">
				<img src={ buildURL + SiteLogo } alt="site identyty" />
			</a>
		);
	}
}