$(document).ready(function() {
	$("#show-tenants").click(function(){
		console.log("Click")
	});
})

// ('.tenants.show').ready(function() {

// 	// alert('Hello this should only be on the tenants show page');

// 	function Tenant(rawJson) {
// 		this.firstName = rawJson.firstname
// 		this.lastName = rawJson.lastname 
// 	};
// 	//create tenant objects... each tenant object has a first name and a last name

// 	//add a method #name to each and every instance of a tenant
// 	Tenant.prototype.name = function() {
// 		return this.firstName + " " + this.lastName;
// 	};

// 	showTenantData = document.querySelector('#fullName');
// 	showTenantLandlordId = showTenantData.dataset.showtenantlandlord;
// 	showTenantPropertyId = showTenantData.dataset.showtenantprop;
// 	showTenantTenantId = showTenantData.dataset.showtenanttenant;

// 	fetch('http://localhost:3000/landlords/'+showTenantLandlordId+'/properties/'+showTenantPropertyId+'/tenants/'+showTenantTenantId+'.json')

// 	  .then(
// 	    function(response) {
// 	      if (response.status !== 201) {
// 	        console.log('Looks like there was a problem. Status Code: ' +
// 	          response.status);
// 	        return;
// 	      }

// 	      response.json().then(function(data) {
// 			let tenant = new Tenant(data);
// 			$("#fullName").text('Showing details for ' + tenant.name());
// 	      });
// 	    }
// 	  )
// 	  .catch(function(err) {
// 	    console.log('Fetch Error :-S', err);
// 	  });

// });
