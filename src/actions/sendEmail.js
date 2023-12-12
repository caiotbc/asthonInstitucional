"use server";

import { Resend } from "resend";

export default async function sendEmail(formData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { email, assunto, mensagem } = {
    email: formData.get("email"),
    assunto: formData.get("assunto"),
    mensagem: formData.get("mensagem"),
  };

  try {
    await resend.emails.send({
      from: process.env.EMAIL_AUTHOR,
      to: [process.env.DESTINATION_INBOX],
      subject: assunto,
      html: `<p>${mensagem}</p>
        <p>Enviado por: ${email}</p>`,
    });

    console.log("Sent message from: ", email);
  } catch (error) {
    console.log(error);
  }
}
