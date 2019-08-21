

// fetch('http://localhost:3000/landlords/1/tenants/all.json')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       response.json().then(function(data) {
// 	    let tenantArr = data[1]

//         let tenantElements = $();
    
//         for (var i = 0; i < tenantArr.length; i++) {
//           tenantElements = tenantElements.add('<div>'+'<a href="/landlords/'+tenantArr[i].landlord_id+'/properties/'+tenantArr[i].property_id+'/tenants/'+tenantArr[i].id+'">'+tenantArr[i].firstname+'</a></div>');
//         }

//         $("#tenants").append(tenantElements);
//         // console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });



  

// // $(document).ready(function(){getTenantsIndex()});
// // function getTenantsIndex() {
// // 	fetch('http://localhost:3000/landlords/1/tenants/all.json')
// // 	.then(resp => { 
// // 		debugger;
// // 		resp.json() } )
// //  	.then(data => {

// //  		let tenantArr = data[1]

// //  		let tenantElements = $();
    
// //  		for (var i = 0; i < tenantArr.length; i++) {
// //  			tenantElements = tenantElements.add('<div>'+'<a href="/landlords/'+tenantArr[i].landlord_id+'/properties/'+tenantArr[i].property_id+'/tenants/'+tenantArr[i].id+'">'+tenantArr[i].firstname+'</a></div>');
// //     		}

// //     	$("#tenants").append(tenantElements);

// //  	});
// // }