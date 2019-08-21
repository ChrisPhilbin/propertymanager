$( document ).ready(function() {

	function Property(rawJson) {
		this.street = rawJson.street;
		this.city = rawJson.city;
		this.state = rawJson.state;
		this.zip = rawJson.zip;
	};

	Property.prototype.fullAddress = function() {
		return this.street + " " + this.city + " " + this.state + " " + this.zip;
	};

	let paramsData = document.querySelector('#paramsDiv');
	let propertyId = paramsData.dataset.prop;
	let landlordId = paramsData.dataset.landlord;

	fetch('http://localhost:3000/landlords/'+landlordId+'/properties/'+propertyId+'.json')
	  .then(
	    function(response) {
	      if (response.status !== 201) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }

	      response.json().then(function(data) {

			let result = data;
			let rental = new Property(result[0]);
			let tenantArr = result[1];

			let tenantElements = $();

			$("#headerAddress").text('Showing details for ' + rental.street);

			//rendering a has_many through relationship through JSON using Javascript
			for (var i = 0; i < tenantArr.length; i++) {
				tenantElements = tenantElements.add('<div>'+'<a href="/landlords/'+tenantArr[i].landlord_id+'/properties/'+tenantArr[i].property_id+'/tenants/'+tenantArr[i].id+'">'+tenantArr[i].firstname+'</a></div>');
			}

			$("#tenantList").append(tenantElements);

	      });
	    }
	  )
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);
	  });
});









// request = $.getJSON('http://localhost:3000/landlords/<%= "#{params['landlord_id']}" %>/properties/<%= "#{params['id']}" %>.json', function(data) {

// 	let result = data;
// 	let rental = new Property(result[0]);
// 	let tenantArr = result[1];

// 	let tenantElements = $();

// 	$("#headerAddress").text('Showing details for ' + rental.street);

// 	//rendering a has_many through relationship through JSON using Javascript
// 	for (var i = 0; i < tenantArr.length; i++) {
// 		tenantElements = tenantElements.add('<div>'+'<a href="/landlords/'+tenantArr[i].landlord_id+'/properties/'+tenantArr[i].property_id+'/tenants/'+tenantArr[i].id+'">'+tenantArr[i].firstname+'</a></div>');
// 	}

// 	$("#tenantList").append(tenantElements);
// });