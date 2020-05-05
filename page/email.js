const sgMail = require('@sendgrid/mail');

const apikey = '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' ;

sgMail.setApiKey(apikey);

const sendSignEmail = (email,name) => {

	sgMail.sendMultiple

	sgMail.send({
        to:email,
        from:'fayazahamed035@gmail.com',
        subject : 'Test mail',
        text : 'Thanks for digning up ${name}. We would be gladto know how the app work',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    
	});
}
    
module.exports={
     sendSignEmail : sendSignEmail
}