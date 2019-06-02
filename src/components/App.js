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
				headline:	'Na webovém portálu se zatím ještě pracuje',
				excerpt: 'Je to dřina... no a co.',
			},
			{
				headline:	'Be mindfull, that people hurt others not always by intention.',
				excerpt: '- Marcus Aurelius',
			}
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