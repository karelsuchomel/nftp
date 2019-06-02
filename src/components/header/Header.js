import React from 'react'

import MobileNavigationButton from './MobileNavigationButton.js'
import SiteIdentity from './SiteIdentity.js'
import Search from './Search.js'
import QuickLinksNavigation from './QuickLinksNavigation.js'

export default class NavigationTopBar extends React.Component {
	render() {
		return(
			<header>
				<div id="top-bar-wrapper" className="clear-both">

					<SiteIdentity />

					<nav>
						<MobileNavigationButton />
						
						<QuickLinksNavigation />
						
						<Search />
					</nav>
				</div>
			</header>
		);
	}
}

