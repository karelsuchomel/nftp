import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter, Route} from 'react-router-dom'
import SiteSettings from 'SiteSettings'

const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Route path={SiteSettings.URL.path} component={App} />
		</BrowserRouter> 
	</Provider>
)
Root.propTypes = {
	store: PropTypes.object.isRequired
}

export default Root
