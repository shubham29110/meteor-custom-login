import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    process.env.MAIL_URL = 'postmaster@sandboxdafb4638f8114d9e91afff64ac8e66cf.mailgun.org:644b9e80ecd40c9ceed577c62efcefb4-8889127d-31822067@smtp.mailgun.org:587'
    Accounts.emailTemplates.form="Verification Link"
  });
