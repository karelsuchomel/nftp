import React from 'react';

export default class MenuItems extends React.Component {
	render() {
		return(
			<div id="links-navigation">
				<ul id="menu-horni-lista" className="menu">
					<li id="menu-item-8" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8">
						<a href="http://192.168.1.190/zs-hroznova/obedy/">Zapojit se</a>
					</li>
					<li id="menu-item-9" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9">
						<a href="http://192.168.1.190/zs-hroznova/sample-page/">O NFTP</a>
					</li>
					<li id="menu-item-9" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9">
						<a href="http://192.168.1.190/zs-hroznova/sample-page/">Účet</a>
					</li>
				</ul>
			</div>
		);
	}
}