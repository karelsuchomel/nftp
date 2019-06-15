const path = require('path')
var FtpDeploy = require('ftp-deploy')
var ftpDeploy = new FtpDeploy()
var credentials = require('../ftp-credentials.json')
 
var config = {
	user: credentials.user,                   // NOTE that this was username in 1.x 
	password: credentials.password,           // optional, prompted if none given
	host: credentials.host,
	port: 21,
	localRoot: './',
	remoteRoot: '/wp-content/themes/ntfp/',
	// include: ['*', '**/*'],      					// this would upload everything except dot files
	include: ['*.php', 'build/**/*', 'inc/**/*', 'style.css'],
	exclude: ['node_modules/', '.git/'],						// e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
	deleteRemote: true,											// delete ALL existing files at destination before uploading, if true
	forcePasv: true														// Passive mode is forced (EPSV command is not sent)
}
 
// use with promises
ftpDeploy.deploy(config)
	.then(res => console.log('finished:', res))
	.catch(err => console.log(err))