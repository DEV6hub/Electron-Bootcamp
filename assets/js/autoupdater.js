'use strict';
const os = require('os');
const {app, dialog} = require('electron');
const updater = require('electron-updater');
const autoUpdater = updater.autoUpdater;
autoUpdater.autoDownload = true;

const log = require('electron-log');
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting');

app.on('ready', function () {
	log.info("Check for upates");
	autoUpdater.checkForUpdates();
});
// const version = app.getVersion();
const platform = os.platform() + '_' + os.arch();  // usually returns darwin_64

const updaterFeedURL = 'http://127.0.0.1:8080/';
//const updaterFeedURL = 'http://zulipdesktop.herokuapp.com/update/' + platform + '/' + version;
// replace updaterFeedURL with http://yourappname.herokuapp.com

function appUpdater() {
	autoUpdater.setFeedURL({
		provider: "generic",
		url: "http://127.0.0.1:8080"
	});
	/* Log whats happening
	TODO send autoUpdater events to renderer so that we could console log it in developer tools
	You could alsoe use nslog or other logging to see what's happening */
	autoUpdater.on('error', err => console.log(err));
	autoUpdater.on('checking-for-update', () => log.info('checking-for-update'));
	autoUpdater.on('update-available', () => log.info('update-available'));
	autoUpdater.on('update-not-available', () => log.info('update-not-available'));

	// Ask the user if update is available
	autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
		log.info('update-downloaded');
		let message = app.getName() + ' ' + app.getVersion() + ' is now available. It will be installed the next time you restart the application.';
		if (releaseNotes) {
			const splitNotes = releaseNotes.split(/[^\r]\n/);
			message += '\n\nRelease notes:\n';
			splitNotes.forEach(notes => {
				message += notes + '\n\n';
			});
		}
		// Ask user to update the app
		dialog.showMessageBox({
			type: 'question',
			buttons: ['Install and Relaunch', 'Later'],
			defaultId: 0,
			message: 'A new version of ' + app.getName() + ' has been downloaded',
			detail: message
		}, response => {
			if (response === 0) {
				setTimeout(() => autoUpdater.quitAndInstall(), 1);
			}
		});
	});
	
}

exports = module.exports = {
	appUpdater
};