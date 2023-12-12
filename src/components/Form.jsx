"use client";

import styles from "./Form.module.css";
import { useFormStatus } from "react-dom";
import sendEmail from "@/actions/sendEmail";
import { useEffect, useState } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (pending && clicked) {
      console.log("Sending email...");
      document.getElementById("email").setAttribute("disabled", true);
      document.getElementById("assunto").setAttribute("disabled", true);
      document.getElementById("mensagem").setAttribute("disabled", true);
    }

    if (!pending && clicked) {
      console.log("Email sent!");
      alert("Email enviado com sucesso!");

      document.getElementById("email").value = "";
      document.getElementById("assunto").value = "";
      document.getElementById("mensagem").value = "";
      document.getElementById("email").removeAttribute("disabled");
      document.getElementById("assunto").removeAttribute("disabled");
      document.getElementById("mensagem").removeAttribute("disabled");
    }
  }, [pending]);

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={() => {
        setClicked(true);
      }}
    >
      {pending ? "Enviando..." : "Enviar"}
    </button>
  );
}

export default function Form() {
  return (
    <form className={styles.form} action={sendEmail}>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        required
        id="email"
        name="email"
        placeholder="Seu e-mail"
      />
      <label htmlFor="assunto">Assunto</label>
      <input
        id="assunto"
        name="assunto"
        type="text"
        required
        minLength={10}
        maxLength={255}
        placeholder="Assunto"
      />
      <label htmlFor="mensagem">Mensagem</label>
      <textarea
        id="mensagem"
        name="mensagem"
        required
        minLength={10}
        maxLength={2000}
        placeholder="Gostaria de contratar o serviço de monitoramento avançado da Asthon"
      ></textarea>
      <SubmitButton />
    </form>
  );
}
