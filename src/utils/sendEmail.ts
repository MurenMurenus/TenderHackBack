import {createTransport, Transport} from 'nodemailer'
import {Transform} from "stream";

export async function sendMail_(email: string, theme: string, text: string, textHtml: string) {
    let transporter = createTransport({
        pool: true,
        host: "smtp.mail.ru", //"smtp-mail.outlook.com",
        port: 465, //587,
        auth: {
            user: "123denix1337@mail.ru",
            pass: "nr7QQtjWqXtPexQ1cwk3"
        }
    })

    console.log(transporter);

    let message = {
        from: "123denix1337@mail.ru",
        to: email,
        subject: theme,
        text: text,
        html: textHtml
    }

    let info = await transporter.sendMail(message);

    if (info.response.substring(0, 3) == '250') {
        return 'Письмо успешно отправлено на адрес ${email}!'
    }

    return 'Ошибка отправки письма на адрес ${email}!'
}
