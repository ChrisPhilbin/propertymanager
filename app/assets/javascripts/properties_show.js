//property show page... works after refreshing page... unsure as to why?

$('.properties.show').ready(function() {

	function Property(rawJson) {
		this.street = rawJson.street;
		this.city = rawJson.city;
		this.state = rawJson.state;
		this.zip = rawJson.zip;
	};

	Property.prototype.fullAddress = function() {
		return this.street + " " + this.city + " " + this.state + " " + this.zip;
	};

	let showPropertiesData = document.querySelector('#showPropertiesDiv');
	let showPropertiesPropertyId = showPropertiesData.dataset.showpropertiesprop;
	let showPropertiesLandlordId = showPropertiesData.dataset.showpropertieslandlord;

	fetch('http://localhost:3000/landlords/'+showPropertiesLandlordId+'/properties/'+showPropertiesPropertyId+'.json')
	  .then(
	    function(response) {
	      if (response.status !== 201) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }

	      response.json().then(function(data) {
	      	//.json() takes the actual http response and extracts the json body tht we need

			let result = data;
			let rental = new Property(result[0]);
			let tenantArr = result[1];

			let tenantElements = $();

			if (tenantArr <= 0) {
				tenantElements = tenantElements.add('<h3><strong>It looks like there are no tenants here!</h3>')
			} else {
				$("#headerAddress").text('Showing details for ' + rental.street);

				//rendering a has_many through relationship through JSON using Javascript
				for (var i = 0; i < tenantArr.length; i++) {
					tenantElements = tenantElements.add('<div>'+'<a href="/landlords/'+tenantArr[i].landlord_id+'/properties/'+tenantArr[i].property_id+'/tenants/'+tenantArr[i].id+'">'+tenantArr[i].firstname+'</a></div>');
				}
			}
				$("#tenantList").append(tenantElements);
	      });
	    }
	  )
	  .catch(function(err) {
	    console.log('Fetch Error', err);
	});
});