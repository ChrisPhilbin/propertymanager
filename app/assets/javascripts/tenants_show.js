$('.tenants.show').ready(function() {

	function Tenant(rawJson) {
		this.firstName = rawJson.firstname
		this.lastName = rawJson.lastname 
	};

	//add a method #name to each and every instance of a tenant
	Tenant.prototype.name = function() {
		return this.firstName + " " + this.lastName;
	};

	showTenantData = document.querySelector('#fullName');
	showTenantLandlordId = showTenantData.dataset.showTenantLandlord;
	showTenantPropertyId = showTenantData.dataset.showTenantProp;
	showTenantTenantId = showTenantData.dataset.showTenantTenant;

	fetch('http://localhost:3000/landlords/'+showTenantLandlordId+'/properties/'+showTenantPropertyId+'/tenants/'+showTenantTenantId+'.json')

	  .then(
	    function(response) {
	      if (response.status !== 201) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }

	      response.json().then(function(data) {
			let tenant = new Tenant(data);
			$("#fullName").text('Showing details for ' + tenant.name());
	      });
	    }
	  )
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);
	  });

});
