import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import WPSettings from 'WPSettings'
// Components
import Header from './header/Header.js'
import NavigationSideBar from './navigation-side-bar/NavigationSideBar.js'
import Home from './home/Home.js'
import Single from './post/Single.js'

const App = () => (
	<div className="css-variables theme-mod-light-variables">
		<Header />
		{ false && <NavigationSideBar /> }
		<Switch>
			<Route exact path={WPSettings.portalPath} >
				<Home
					posts=''
					isFetching={false}
				/>
			</Route>
			<Route path={`{WPSettings.portalPath}/single`} >
				<Single
					isFetching={false}
				/>
			</Route>
		</Switch>
	</div>
)

export default App