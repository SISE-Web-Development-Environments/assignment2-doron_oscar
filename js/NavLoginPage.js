
$(document).ready(function(){
	$('#mainWindow').children().hide()
	$('#nav').show()
	$('#logo').show()
    $('#welcome').show()
    $('#footer').show()

    $('#loginPage').click(function(){
        $('#mainWindow').children().hide()
        $('#nav').show()
        $('#logo').show()
        $('#login').show()
        $('#footer').show()
    
    })

})