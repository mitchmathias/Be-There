const nodemailer = require('nodemailer');

function Mailer(username, password, done){
		User.findOne({ username: username }, (err, user) => {
			console.log(username, user, err)
			if (err) {
				return done(err)
			}
			if (!user) {
				console.log('not found')
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})

    const userEmail = user.email
    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        ssl: false,
        use_authentication: true,
        user: 'betherecommunity@gmail.com',
        pass: process.env.SMTP_PASS
    });

    const message = {
        from: 'betherecommunity@gmail.com', // Sender address
        to: userEmail,         // List of recipients
        subject: 'Welcome to Be-There', // Subject line
        text: 'This message is to confirm your email for future events you sign up for. Please feel free to contact our team with any questions or concerns.' // Plain text body
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
}

export default Mailer; 