import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter, Route} from 'react-router-dom'
import WPSettings from 'WPSettings'

const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Route path={WPSettings.portalPath} component={App} />
		</BrowserRouter> 
	</Provider>
)
Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
