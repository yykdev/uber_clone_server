import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
    apiKey: process.env.MAILGUN_API_KEY || "",
    domain: "sandbox3dcb301746294b96a09b947cc994e7cc.mailgun.org"
});

const sendEmail = (to: string, subject: string, html: string) => {
    const emailData = {
        from: "assavictory@gmail.com",
        to,
        subject,
        html
    };

    return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (
    to: string,
    fullName: string,
    key: string
) => {
    const emailSubject = `Hello! ${fullName}, please verify your email`;
    const emailBody = `Verify your email by clicking <a herf="http://nouver.com/verification/${key}/">here</a>`;

    return sendEmail(to, emailSubject, emailBody);
};
