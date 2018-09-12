// $(function() {

	getItemList();


	$('#formAddtodo').submit(function(e){

		e.preventDefault();


		$.post('http://workshopapi.democnc.com/api/todo', {
			'message' : $('[name=todoName]').val().trim()
		} ,function(response){
			if (response.id){
				location.reload();
			} else {
				alert('something went wrong. pleases try again later.');
			}
		}, 'json');
	})

	function getItemList(){

		var res = [{"id":1,"message":"Do Something 1","created_at":"2018-09-12 08:05:03","updated_at":"2018-09-12 08:09:13"},{"id":2,"message":"Do Something 2","created_at":"2018-09-12 08:09:26","updated_at":"2018-09-12 08:09:26"},{"id":3,"message":"Do Something 3","created_at":"2018-09-12 08:09:29","updated_at":"2018-09-12 08:09:29"},{"id":4,"message":"<Test> fgsdf2!$$$","created_at":"2018-09-12 08:10:58","updated_at":"2018-09-12 08:10:58"},{"id":5,"message":"alert('script')","created_at":"2018-09-12 08:11:45","updated_at":"2018-09-12 08:11:45"},{"id":6,"message":"alert('script')","created_at":"2018-09-12 08:12:19","updated_at":"2018-09-12 08:12:19"},{"id":7,"message":"1234567890","created_at":"2018-09-12 08:16:43","updated_at":"2018-09-12 08:16:43"},{"id":8,"message":"1234567890","created_at":"2018-09-12 08:17:15","updated_at":"2018-09-12 08:17:15"},{"id":9,"message":"\u0e0b\u0e37\u0e49\u0e2d\u0e02\u0e49\u0e32\u0e27","created_at":"2018-09-12 08:18:07","updated_at":"2018-09-12 08:18:07"},{"id":10,"message":"\u0e0b\u0e37\u0e49\u0e2d\u0e02\u0e49\u0e32\u0e27","created_at":"2018-09-12 08:18:56","updated_at":"2018-09-12 08:18:56"},{"id":11,"message":"\u0e0b\u0e37\u0e49\u0e2d\u0e02\u0e49\u0e32\u0e27","created_at":"2018-09-12 08:19:18","updated_at":"2018-09-12 08:19:18"},{"id":12,"message":"\u0e0b\u0e37\u0e49\u0e2d\u0e02\u0e49\u0e32\u0e27","created_at":"2018-09-12 08:19:33","updated_at":"2018-09-12 08:19:33"}];

		$.ajax( 'http://workshopapi.democnc.com/api/todo' , function(response){

		}).error(function(){
			alert('something went wrong. pleases try again later.');
		}).success(function(response){

			var html = "";
			$(response).each(function(i, item ){

				html += '<div class="listItem p-3">'
				html +=		'<div class="form">'
				html +=		'<div class="form-group form-row row">'
				html +=					'<div class="col-10">'
				html +=				      	'<label>'
				html +=				      		'<input type="checkbox" class="mr-3" onchange="updateStatus('+ item.id +')"> ' + item.message
				html +=				      	'</label>'
				html +=					'</div>'
				html +=					'<div class="col-2">'
				html +=						'<button class="btn btn-sm" onclick="deleteItem(' + item.id +')">Delete</button>'
				html +=					'</div>'
				html +=				'</div>'
				html +=			'</div>'
				html +=		'</div>'
			});
									
			$('#todoList').append(html);
		});


	
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

	function deleteItem(id){
		alert('delete' + id);
		return;
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
		alert(1);
		$.ajax({
			url : '',
		           method : "POST",
		           success : function (data){

		           },
		           error : function (data) {

		           },
		})
	}
// });  
