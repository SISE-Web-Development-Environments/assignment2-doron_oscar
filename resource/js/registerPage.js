

/**
 * only for Registration page
 */
$.validator.setDefaults({
    submitHandler: function() {
        /**
         * what the sumbit button will do
         */
        let username = $('#signupForm').find('input[name="username"]').val();
        let password = $('#signupForm').find('input[name="password"]').val();
        localStorage.setItem(username, password);
        //go to home page!
        return true;
    }
});

/*check valid name*/
$.validator.addMethod("checkValidName", function (value, element) {
    return /^[^0-9]+$/.test(value);
    }),
    
/*check valid password*/
$.validator.addMethod("checkValidPassword", function (value, element) {
    return /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d\*]{6,}$/.test(value);
    });
    
/*check valid date*/
$.validator.addMethod("checkValidDate", function (value, element) {
    return Date.now() - new Date(value).getTime() > 0;
    });



    // validate signup form on keyup and submit
    $('#signupForm').validate({
        errorElement: 'div',
        rules: {
            firstname:{
                required: true,
                checkValidName: true
            },
            lastname:{
                required: true,
                checkValidName: true
            },
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                checkValidPassword: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
            date: {
                required: true,
                checkValidDate: true
            }
        },
        messages: {
           firstname: {
               required: "Please enter your first name name",
               checkValidName: "The name can only contain letters"
            },
            lastname: {
                required: "Please enter your last name name",
                checkValidName: "The name can only contain letters"
             },
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long",
                checkValidPassword: "The password must contain only numbers and letters"
            },
            email:{
                required: "Please enter an email address"
            },
            date: {
                required: "Pleasr enter a birthday",
                checkValidDate: "This date is in the future, please enter a valid date"
            },
        }
    });

