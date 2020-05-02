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

})

