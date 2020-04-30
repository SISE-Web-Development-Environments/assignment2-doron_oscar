$(document).ready(function(){
	$('#mainWindow').children().hide()
	$('#nav').show()
	$('#logo').show()
    $('#welcome').show()
    $('#footer').show()

})


// user fields
var user = {
    name: "",
    username: "",
    password: "",
    email: "",
    birth: ""
  };



 var users = JSON.parse(localStorage.getItem('users'));

   if(!users){
 		// users storage
 		var users = [];

 		// default user
 		var defaultUser = { name: "p", username: "p", password: "p", email: "p@gmail.com", birth: "16-03-1994" };

 		// insert default user to the storage
 		users.push(defaultUser);

 		console.log(users);
 	  }
 



