const defaultFilters = [
	"*://*.URL HERE, every url must be in this format/*",
	"*://*.URL HERE, every url must be in this format/*",
	"*://*.URL HERE, every url must be in this format/*",
	"*://*.URL HERE, every url must be in this format/*",
	"*://*.URL HERE, every url must be in this format/*",
	


]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)