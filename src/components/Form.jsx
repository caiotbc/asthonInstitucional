import styles from './Form.module.css'

export default function Form() {
    return (
        <form className={styles.form}>
            <label htmlFor="email">E-mail
            <input type="email" id="email" name="email" placeholder="Seu e-mail"/>
            </label>
            <label htmlFor="assunto">Assunto
            <input id="assunto" name="assunto" type="text" placeholder="Assunto"/>
            </label>
            <label htmlFor="mensagem">Mensagem
            <textarea id="mensagem" name="mensagem" placeholder="Gostaria de contratar o serviço de monitoramento avançado da Asthon"></textarea>
            </label>
            <button>Enviar</button>
        </form>
    );
}