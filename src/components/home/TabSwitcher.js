import React from 'react';

export default class TabSwitcher extends React.Component {
	render() {
		return(
			<div id="tab-switcher" className="clear-both">
				<div id="posts" className="tab-button opened">Příspěvky</div>
				<div id="agenda" className="tab-button">Nadcházející akce</div>
				<div className="tab-divider"></div>
			</div>
		);
	}
}