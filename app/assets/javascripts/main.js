var map;
$(document).ready(function() {
	$("#search_submit").bind("click", function() {
		alert("test");
	});
	
	
	// $("#main_search").submit(function() {
		// $("#results").append('vendor type: ' + $("#vendor_type").val() + ', address: ' + $("#address").val() + '\n');
		// $("#map").fadeIn();
		// initialize();
	// });

});



function initialize() {
	var mapOptions = {
		center : new google.maps.LatLng(-34.397, 150.644),
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}

