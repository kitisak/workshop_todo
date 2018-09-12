$(function() {

getItemList();

	function getItemList(){
		var html = ""
		           		html += '<div class="listItem p-3">'
						html +=		'<div class="form">'
						html +=		'<div class="form-group form-row row">'
						html +=					'<div class="col-10">'
						html +=				      	'<label>'
						html +=				      		'<input type="checkbox" class="mr-3"> just a test items'
						html +=				      	'</label>'
						html +=					'</div>'
						html +=					'<div class="col-2">'
						html +=						'<button class="btn btn-sm">Delete</button>'
						html +=					'</div>'
						html +=				'</div>'
						html +=			'</div>'
						html +=		'</div>'
								
						$('#todoList').append(html);
		// $.ajax({
		// 	url : 'http://workshopapi.democnc.com/api/todo',
		//            method : "GET",
		//            success : function (data){
		//            		var html = ""
		//            		html = '<div class="listItem p-3">\
		// 							<div class="form">\
		// 								<div class="form-group form-row row">\
		// 									<div class="col-10">\
		// 								      	<label>\
		// 								      		<input type="checkbox" class="mr-3"> just a test items\
		// 								      	</label>\
		// 									</div>\
		// 									<div class="col-2">\
		// 										<button class="btn btn-sm">Delete</button>\
		// 									</div>			\		
		// 								</div>\
		// 							</div>\
		// 						</div>';

		// 				$('#todoList').append(html);
		//            },
		//            error : function (data) {

		//            },
		// })
	}

	function editItem(){
		$.ajax({
			url : '',
		           method : "POST",
		           success : function (data){

		           },
		           error : function (data) {

		           },
		})
	}

	function deleteItem(){
		$.ajax({
			url : '',
		           method : "DELETE",
		           success : function (data){

		           },
		           error : function (data) {

		           },
		})
	}

	function updateStatus(){
		$.ajax({
			url : '',
		           method : "POST",
		           success : function (data){

		           },
		           error : function (data) {

		           },
		})
	}
});  
