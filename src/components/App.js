import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import SiteSettings from 'SiteSettings'
// Components
import Header from './header/Header.js'
import NavigationSideBar from './navigation-side-bar/NavigationSideBar.js'
import Home from './home/Home.js'
import Single from './post/Single.js'

const App = ({match}) => {
	const dummyProps = {
		category: 'Nejnovější',
		items: [
			{
				thumbnailURL: 'http://192.168.1.190/nftp/wp-content/uploads/2019/06/38365845672_4a02c56bb1_k.jpg',
				headline:	'Na webovém portálu se pracuje',
				endingDate: 'Programujeme',
			},
		]
	}

	return (
	<div className="css-variables theme-mod-light-variables">
		<Header />
		{ false && <NavigationSideBar /> }

		<Switch>
			<Route exact path={match.url} render={() => 
				<Home 
					{...dummyProps} 
				/>
			} />
			<Route path={match.url + '/single'} component={Single} />
		</Switch>
	</div>
	)
}

export default App