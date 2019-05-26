import SiteSettings from 'SiteSettings'

const path = SiteSettings.URL.path || '/'
const themeURL = SiteSettings.themeURL

let portalPath, frontPageRoute
if ( SiteSettings.frontPage.page ) {
  portalPath = path + 'page/' + SiteSettings.frontPage.blog + '/'
  // const FrontPageComponent = props => (
  //   <SinglePage slug={ FoxhoundSettings.frontPage.page } { ...props } />
  // );
  // frontPageRoute = <Route path={ path } component={ FrontPageComponent } />; // eslint-disable-line react/jsx-no-bind
} else {
  portalPath = path
  frontPageRoute = null
}

const WPSettings = { portalPath: portalPath, portalBase: SiteSettings.URL.base ,themeURL: themeURL}
export default WPSettings