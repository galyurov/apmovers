let placeSearch, autocomplete, secondAutocomplete, addPickAutocomplete, addDropAutocomplete

function initAutocomplete() {
	// Create the autocomplete object, restricting the search predictions to
	// geographical location types.
	let options = {
		componentRestrictions: {
			country: 'us'
		}
	}
	autocomplete = new google.maps.places.Autocomplete(
		document.getElementById('origin'), { types: ['geocode'],options });
	secondAutocomplete = new google.maps.places.Autocomplete(
		document.getElementById('destination'), { types: ['geocode'],options });
	addPickAutocomplete = new google.maps.places.Autocomplete(
		document.getElementById('inputAdd-pick-up'), { types: ['geocode'],options });
	addDropAutocomplete = new google.maps.places.Autocomplete(
		document.getElementById('inputAdd-drop'), { types: ['geocode'],options });

}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			let geolocation = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			let circle = new google.maps.Circle(
				{ center: geolocation, radius: position.coords.accuracy });
			autocomplete.setBounds(circle.getBounds());
			secondAutocomplete.setBounds(circle.getBounds());
			addPickAutocomplete.setBounds(circle.getBounds());
			addDropAutocomplete.setBounds(circle.getBounds());
			modalFrom.setBounds(circle.getBounds());
			modalTo.setBounds(circle.getBounds());
		});
	}
}
function codeAddress(address,direction) {
	let geocoder = new google.maps.Geocoder();
	geocoder.geocode( {address}, function(results, status) {
		if (status == 'OK') {
			results[0].address_components.forEach(value=> {
				if (value.types.includes("administrative_area_level_1")) {
					calculator.searchParam[`state${direction}`] = value.short_name
				}
			})
		} else {
			alert('Geocode was not successful! Update page! And try again!' );
		}
	});
}

function searchDistance(pickUp = undefined,dropOff = undefined) {

	let service = new google.maps.DistanceMatrixService();
	if (pickUp[0] && dropOff[0]) {
		service.getDistanceMatrix(
			{
				origins: pickUp,
				destinations: dropOff,
				travelMode: 'DRIVING',
				unitSystem: 1,
			}, callback);

		function callback(response, status) {
			if (status === 'OK') {
				let origin = response.originAddresses[0];
				let destination = response.destinationAddresses[0];

				let results = response.rows[0].elements;
				let distance = results[0].distance.value;
				calculator.searchParam.origin = origin;
				calculator.searchParam.destination = destination;
				calculator.searchParam.range = Math.round(distance/1609.34);

			} else {
				alert('Error!')
			}
		}
	}
}