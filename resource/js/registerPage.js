

// // user fields
// var user = {
//     name: "",
//     username: "",
//     password: "",
//     email: "",
//     birth: ""
//   };

// // users storage
//   var users = [];

// // default user
//   var defaultUser = { name: "p", username: "p", password: "p", email: "p@gmail.com", birth: "16-03-1994" };

// // insert default user to the storage
//   users.push(defaultUser);


$(function() {
    jQuery.validator.addMethod("checkValidName", function (value, element) {
        return this.optional(element) || /^[^0-9]+$/i.test(value);
      },"The name can only contain letters"),
    
        /*check valid password*/
    jQuery.validator.addMethod("checkValidPassword", function (value, element) {
        return this.optional(element) || /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d\*]{6,}$/i.test(value);
      }, "The password must contain only numbers and letters");
    
    /*check valid date*/
    jQuery.validator.addMethod("checkValidDate", function (value, element) {
        return this.optional(element) || Date.now() - new Date(value).getTime() > 0;
      },"This date is in the future, please enter a valid date");

//     jQuery.validator.addMethod("lettersonly", function(value, element) {
//         return this.optional(element) || /^[a-z ]+$/i.test(value);
// },      "Please use only letters");


// jQuery.validator.addMethod("lettersNumbers", function(value, element) {
//     return this.optional(element) || /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i.test(value);
// },      "The password must contain number and letters");

//  $.validator.setDefaults({
//      submitHandler: function () {
//          alert("submitted!");
//     }
//  });

//$(document).ready(function () {
    // validate the comment form when it is submitted
    // $("#commentForm").validate();

    // validate signup form on keyup and submit
    $('#formRegister').validate({
        rules: {
            name:{
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
            }
        },
        messages: {
           name: {
               required: "Please enter your full name",
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
}
)

// user fields
var user = {
    name: "",
    username: "",
    password: "",
    email: "",
    birth: ""
  };

        //submitHandler: function (form, event) {
        $(document).ready(function(form, event){

        $('#formRegister').submit(function(){
            
        if ($(this).valid() !== true) {
        }
        else{

        var newUser = Object.create(user);

        newUser.name = $("#name").val();
        newUser.username = $("#username").val();
        newUser.password = $("#password").val();
        newUser.email = $("#email").val();
        newUser.date = $("#date").val();

        users.push(newUser);

        alert("The " + newUser.username + " created!");

        console.log(newUser);
        console.log(users);
        localStorage.setItem('users',JSON.stringify(users))

        $('#mainWindow').children().hide()
        $('#nav').show()
        $('#logo').show()
        $('#login').show();
        $('#footer').show()
    }
    return false;
        
      

        //document.getElementById("formRegister").reset();
               // }
   // return false;
       // login();//?
      
    });
});



    // propose username by combining first- and lastname
    // $("#username").focus(function () {
    //     var firstname = $("#firstname").val();
    //     var lastname = $("#lastname").val();
    //     if (firstname && lastname && !this.value) {
    //         this.value = firstname + "." + lastname;
    //     }
    // });

/*check valid name */
// jQuery.validator.addMethod("checkValidName", function (value, element) {
//     return /^[^0-9]+$/.test(value);
//   }),

//     /*check valid password*/
// jQuery.validator.addMethod("checkValidPassword", function (value, element) {
//     return /^(?=.*[a-zA-Z\d].*)[a-zA-Z\d\*]{6,}$/.test(value);
//   });

// /*check valid date*/
// jQuery.validator.addMethod("checkValidDate", function (value, element) {
//     return Date.now() - new Date(value).getTime() > 0;
//   });

    //code to hide topic selection, disable for demo
    // var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    // var inital = newsletter.is(":checked");
    // var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    // var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    // newsletter.click(function() {
    // 	topics[this.checked ? "removeClass" : "addClass"]("gray");
    // 	topicInputs.attr("disabled", !this.checked);
    // });


   


