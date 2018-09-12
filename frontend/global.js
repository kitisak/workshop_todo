
$(function() {

	alert(todo_name);

	function getList(){
		$.ajax({
			url : '',
		           method : "GET",
		           success : function (data){

		           },
		           error : function (data) {

		           },
		})
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