chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    	let url = tabs[0].url;
    	// use `url` here inside the callback because it's asynchronous!
		console.log(url);
	});
});
