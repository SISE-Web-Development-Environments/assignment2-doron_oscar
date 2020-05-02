$("#loginForm").validate({

    rules: {
        username_login: {
        required: true
      },
      password_login: {
        required: true,
      }
    },
  
    messages: {
        username_login: {
        required: "Please eneter your username"
      },
      password_login: {
        required: "Please eneter your password",
      }
    },
  
    /**
     * what the sumbit button will do
     * @param {login} form 
     */
    submitHandler: function (form) {
      let username = $('#loginForm').find('input[name="username_login"]').val();
      let password = $('#loginForm').find('input[name="password_login"]').val();
      let insert_password = localStorage.getItem(username);
     
      console.log(username);
      console.log(password);
      console.log(insert_password);

      if (username == 'p' && password == 'p') {

       if (localStorage.getItem(username) === null) {
          localStorage.setItem('p', 'p');
       }
        
        //go to settings
        $('#mainWindow').children().hide()
        $('#logo').show()
        $('#nav').show()
        $('#settings').show()
        $('#footer').show()  

        // $("#header").show();
        // $("#header-left").show();
        // $("#header-center").show();
        // $("#header-right").show();
        // $("#sidenav").show();
        // $("#settings_page").show();
        // $("#random_settings").show();
        // $("#save_settings").show();
  
  
      }
      else if (password === insert_password) {
        //go to settings

        $('#mainWindow').children().hide()
        $('#logo').show()
        $('#nav').show()
        $('#settings').show()
        $('#footer').show()  
        
        // $("div").hide();
  
        // $("#header").show();
        // $("#header-left").show();
        // $("#header-center").show();
        // $("#header-right").show();
        // $("#sidenav").show();
        // $("#settings_page").show();
        // $("#random_settings").show();
        // $("#save_settings").show();
      }
      else {
        alert("Wrong Password or Username");
        return false;
      }
  
    }
  });