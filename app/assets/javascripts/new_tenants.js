// let tenantDiv = $('#paramsData');
// let landlordId = paramsDiv.data('landlord');
// let propertyId = paramsDiv.data('property');

// $(function () {
// 	$('form').submit(function(event) {
// 		event.preventDefault();
//   		var values = $(this).serialize();
//   		var posting = $.post('/landlords/' + <%= "#{@landlord.id}" %> + '/properties/' + <%= "#{@property.id}" %> + '/tenants', values);
//   		posting.done(function(data) {
//   			var tenant = data;
//   			console.log(tenant["firstname"])
//   			$("#tenantPreview").text('Previewing details for...')
//     			$("#tenantFirstname").text('Tenant first name: '+tenant["firstname"]);
//     			$("#tenantLastname").text('Tenant last name: '+tenant["lastname"]);
//     			$("#tenantEmail").text('Tenant email address: '+tenant["email"]);
//     			$("#tenantRent").text('Tenant monthly rent: '+tenant["rent"]);
//   		});
// 		});
// });