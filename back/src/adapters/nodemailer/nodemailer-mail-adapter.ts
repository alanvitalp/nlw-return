import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "16fe15b8ba6e6e",
    pass: "0337a125786f43"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Alan Vital <alanvital18@gmail.com>",
      subject: subject,
      html: body
    })
  
  }
}