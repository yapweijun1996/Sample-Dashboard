
// [start] Query the .main_content element and load the external HTML file
// [start] Function to load external HTML content via fetch API
function loadExternalHTML(filePath, element_selector) {
	var temp_ele = document.querySelector(element_selector);
	
	// fetch the content from the file
	fetch(filePath)
	.then(function(response) {
		if (!response.ok) {
			throw new Error('Network response was not ok: ' + response.statusText);
		}
		return response.text();
	})
	.then(function(data) {
		// insert the fetched content into the specified element
		temp_ele.innerHTML = data;
		console.log("Content loaded successfully.");
		
		// check [start] mob-menu-toggle.active
		if (document.querySelector("div.mob-menu-toggle.active")) {
			document.querySelector("div.mob-menu-toggle.active").click();
		}
		// check [end  ] mob-menu-toggle.active
	})
	.catch(function(error) {
		// log any errors that occur during the fetch
		console.error('Error fetching filePath:', error);
		temp_ele.innerHTML = '<p style="color:red;">Failed to load content.</p>';
	});
}
// [end] Function to load external HTML content via fetch API

// Call the function to load the content.
// loadExternalHTML(""./template/topbar/topbar-001.html"", ".main_content");
// [end] Query the .main_content element and load the external HTML file