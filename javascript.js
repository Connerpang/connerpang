/* webcoder assignment JavaScript */

var input = $('#name-id');
var msg = $('#alert-id');
input.change(function(){
	var txtLength = input.val().length;
	console.log(txtLength);
	if( txtLength < 4 ){
		msg.removeClass('hidden');
	} else {
		msg.addClass('hidden');
	}
});


// $("form-group").click(function()){
// 	alert("Thank you & see you soon!.");
// });

function myFunction() {
    var x = document.getElementById("mySubmit").value;
    document.getElementById("demo").innerHTML = x;
}

