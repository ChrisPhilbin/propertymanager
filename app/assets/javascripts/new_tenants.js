$('.tenants.new').ready(function() {
	let newTenantDiv = $('#newTenantDiv');
	let newTenantLandlordId = newTenantDiv.data('newTenantLandlord');
	let newTenantPropertyId = newTenantDiv.data('newTenantProp');

	$(function () {
		$('form').submit(function(event) {
			event.preventDefault();
	  		var values = $(this).serialize();
	  		var posting = $.post('/landlords/' + newTenantLandlordId + '/properties/' + newTenantPropertyId + '/tenants', values);
	  		posting.done(function(data) {
	  			let tenant = data;
	  			$("#tenantPreview").text('Previewing details for...')
	    			$("#tenantFirstname").text('Tenant first name: '+tenant["firstname"]);
	    			$("#tenantLastname").text('Tenant last name: '+tenant["lastname"]);
	    			$("#tenantEmail").text('Tenant email address: '+tenant["email"]);
	    			$("#tenantRent").text('Tenant monthly rent: '+tenant["rent"]);
	  		});
		});
	});
});