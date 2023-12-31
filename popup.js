// Attach the click event listener to the button
document.getElementById('login').addEventListener('click', login);
document.getElementById('secureLogin').addEventListener('click', secureLogin);

// Function to close the popup window
function closePopup() {
	window.close();
}

async function login() {
	const tab = await chrome.tabs.query({ active: true, currentWindow: true });
	const currentURL = tab[0].url;

	// remove path from URL
	const urlSplit = currentURL.split('/');
	let domain;
	if (urlSplit[2].includes('localhost')) {
		domain = urlSplit[0] + '//' + urlSplit[2] + '/' + urlSplit[3];
	} else {
		domain = urlSplit[0] + '//' + urlSplit[2];
	}
	const wpLoginURL = domain + '/wp-login.php';

	// open wp-login.php in current tab
	if (typeof browser !== 'undefined') {
		browser.tabs.update({ url: wpLoginURL });
	} else {
		chrome.tabs.update({ url: wpLoginURL });
	}
	closePopup();
}

async function secureLogin() {
	const tab = await chrome.tabs.query({ active: true, currentWindow: true });
	const currentURL = tab[0].url;

	// remove path from URL
	const urlSplit = currentURL.split('/');
	let domain;
	if (urlSplit[2].includes('localhost')) {
		domain = urlSplit[0] + '//' + urlSplit[2] + '/' + urlSplit[3];
	} else {
		domain = urlSplit[0] + '//' + urlSplit[2];
	}
	const wpLoginURL = domain + '/switch';

	// open wp-login.php in current tab
	if (typeof browser !== 'undefined') {
		browser.tabs.update({ url: wpLoginURL });
	} else {
		chrome.tabs.update({ url: wpLoginURL });
	}
	closePopup();
}
