import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';


Template.SignupForm.events({
  'submit #signup-form'(e, t) {
    // increment the counter when button is clicked
    e.preventDefault();

    Accounts.createUser({
      username:t.find("#signup-username").value,
      password:t.find("#signup-password").value,
      email:t.find("#signup-email").value,
      profile:{
        fullname:t.find("#signup-name").value,
      }
    },function(err){
                    if(err){
                        alert("account is not created");
                    }
    });
  },
});

Template.logoutForm.events({
  "submit #logout-form":function(e,t){
      e.preventDefault();
      Meteor.logout(function(error){
          if(error){
            alert("unable to logout"+  +error);
          }
        
       
      })
  }
});

Template.loginForm.events({
  "submit #login-form":function(e,t){
      e.preventDefault();

      var username=t.find("#login-username").value;
      var password=t.find("#login-password").value;
      Meteor.loginWithPassword(username,password,function(error){
            if(error){
              alert("wrong credentials");
            }
      })  
  }
})

Template.recovery.helpers({
  "resetPassword":function(){
    if (Accounts._resetPasswordToken) {
      Session.set('resetPassword',true)
    }
    return Session.get('resetPassword')
  }
})

Template.recovery.events({
  "submit recovery-form":function(e,t){
    e.preventDefault();
    var email = t.find("#recovery-email").value;
    Accounts.forgotPassword({email:email},function(error){
      if(error){
            alert("unable to send reset link")
      }
    })
  }
})