import mailgen from "mailgen";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const sendMail = async (options) => {
     const mailGenerator = new mailgen({
            theme: "default",
            product:{
                name:"Task Manager",
                link:"https://mailgen.js/",
            },
     });


    var emailText = mailGenerator.generatePlainText(options.mailGenContent); 
    var emailHtmlText = mailGenerator.generate(options.mailGenContent); 

     const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        }
     })

     const mail = {
        from : process.env.FROM_EMAIL,
        to : options.email,
        subject : options.subject,
        text : emailText,
        html : emailHtmlText,
     }

     try {
        await transporter.sendMail(mail);
     } catch (error) {
        console.log("Error while sending email: ", error);
     }


}


const emailVerificationMailGenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to Task Manager! We're very excited to have you on board.",
            action: {
                instructions: "To get started with Task Manager, please click here:",
                button: {
                    color: "#22BC66",
                    text: "Confirm your account",
                    link: verificationUrl,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help."
        }
    }
}



const forgotPasswordMailGenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "You have requested to reset your password.",
            action: {
                instructions: "To reset your password, please click here:",
                button: {
                    color: "#22BC66",
                    text: "Reset your password",
                    link: passwordResetUrl,
                },
            },
            outro: "If you did not request a password reset, please ignore this email."
        }
    }
}





