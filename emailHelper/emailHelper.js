// emailHelper.js
const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'bryansagarino222@gmail.com',
        pass: 'sfld srmj kclj vmgt'
    }
});

// Function to send email
exports.sendEmail = async (to, subject, htmlContent) => {
    try {
        // Email options
        let mailOptions = {
            from: 'rybrybb@gmail.com',
            to: to,
            subject: subject,
            html: htmlContent // Set the content type to HTML
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return { status: "OK" };
    } catch (error) {
        console.log('Error occurred while sending email:', error);
        throw error;
    }
};
