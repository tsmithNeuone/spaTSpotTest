var map;
$(document).ready(function() {
	
	$("#main_search").submit(function() {
		$("#results").append('vendor type: ' + $("#vendor_type").val() + ', address: ' + $("#address").val() + '\n');
		
		$("#map").fadeIn();
		
    	initialize();
		return false;
	});
	
});
function initialize() {
	var mapOptions = {
		center : new google.maps.LatLng(-34.397, 150.644),
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

