$(document).ready(function(){
    $('#mainWindow').children().hide()
    $('#logo').show()
    $('#nav').show()
    $('#welcome').show()
    $('#footer').show()

    $( "#RegisterBtn" ).click(function() {
        $('#welcome').hide();
        $('#register').show();
      });

      $( "#LoginBtn" ).click(function() {
        $('#welcome').hide();
        $('#login').show();
      });

      $( "#welcomPage" ).click(function() {
        $('#mainWindow').children().hide()
        $('#logo').show()
        $('#nav').show()
        $('#welcome').show()
        $('#footer').show()
      });

      $( "#registerPage" ).click(function() {
        $('#mainWindow').children().hide()
        $('#logo').show()
        $('#nav').show()
        $('#register').show()
        $('#footer').show()
      });

      $( "#loginPage" ).click(function() {
        $('#mainWindow').children().hide()
        $('#logo').show()
        $('#nav').show()
        $('#login').show()
        $('#footer').show()
      });

});


var users=  JSON.parse(localStorage.getItem('users'));

if(!users){

  users=[];

  var defaultUser = { firstname: "p", lastName: "p", username: "p", password: "p", email: "p@example.com", birth: "1/1/1990" };
  users.push(defaultUser);
}


