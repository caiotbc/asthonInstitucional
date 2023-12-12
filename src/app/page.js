import Card from "@/components/Card";
import styles from "./page.module.css";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h3>ASTHON TECNOLOGIA</h3>
            <h1>Monitoramento em tempo real</h1>
            <h2>
              Transforme sua conectividade com as nossas soluções de{" "}
              <strong>IoT e LoRaWAN</strong> para coleta de dados em tempo real
            </h2>
          </div>

          <div className={styles.CTA}>
            <a href="https://wa.me/+5511975635251">Contrate já</a>
            <a href="#produto">Conheça nosso produto</a>
          </div>
        </div>
        <img src="/graph.png" alt="graph" className={styles.heroGraph} />
      </header>
      <img src="/hero-deco.svg" alt="hero-deco" className={styles.heroDeco} />

      <main>
        <section className={styles.parceiros}>
          <div>
            <img src="./dac.png" alt="dac" />
            <img src="./inovai.png" alt="inovai" />
            <img src="./incit.png" alt="incit" />
          </div>
          <p>Nossos parceiros confiam na tecnologia da Asthon</p>
        </section>

        <section id="quem-somos" className={styles.quemSomos}>
          <img src="./asthon-office.jpg" alt="escritorio asthon" />
          <div>
            <h2>Quem somos?</h2>
            <p>
              Somos uma startup fundada em 2023 na cidade de Itajubá, Minas
              Gerais, especializada em fornecer soluções de conectividade, a fim
              de simplificar a vida dos usuários.
              <br />
              <br />
              Através de soluções avançadas, oferecemos serviços de
              monitoramento de parâmetros em tempo real, proporcionando um novo
              conceito de IoT ao mercado.
              <br />
              <br />
              Nossa equipe altamente qualificada e experiente, junto a nossa
              expertise em IoT, nos permite desenvolver soluções simples e
              eficazes para monitorar informações em tempo real, garantindo a
              operação correta do sistema, confiabilidade na transmissão e no
              armazenamento de dados.
              <br />
              <br />
              Assim, estamos sempre na vanguarda das soluções tecnológicas,
              proporcionando uma experiência única aos nossos clientes.
            </p>
          </div>
        </section>

        <section id="produto" className={styles.produto}>
          <h2>Estação de Monitoramento Hidrológico</h2>
          <p>
            Nossa Estação de Monitoramento Hidrológico oferece dados precisos em
            tempo real. Os dados de nível e pluviosidade são coletados pelos
            sensores instalados e enviados para o dashboard online por meio do
            MARLIN (Módulo Coletor de Dados LoRaWAN).
          </p>
          <div>
            <img src="./estacao.png" alt="estacao" />
            <img src="./dashboard.jpg" alt="dashboard" />
          </div>
          <a href="https://wa.me/+5511975635251" className={styles.cta2}>
            Fale já com um especialista <img src="./external-link.svg" />
          </a>
        </section>

        <section className={styles.Marlin}>
          <img src="./marlin.jpg" alt="marlin" />
          <div>
            <h2>Como o MARLIN funciona?</h2>
            <p>
              Essa solução avançada de monitoramento é capaz de fornecer dados
              precisos e em tempo real para os usuários, permitindo que eles
              monitorem a situação hidrológica de forma fácil e rápida. O MARLIN
              é a peça chave que permite a transmissão dos dados coletados para
              o dashboard. É possível garantir que os usuários recebam
              informações atualizadas em tempo real e alertas em situações
              ambientais extremas.
            </p>
          </div>
        </section>

        <section id="diferenciais" className={styles.diferenciais}>
          <h2>Diferenciais</h2>
          <div>
            <Card
              img={"./idea.svg"}
              desc="Solução completa de entrega: instalação, operação e manutenção de plataformas online e infraestrutura física durante todo o contrato."
            />
            <Card
              img={"./smartphone.svg"}
              desc="Aplicativo móvel e dashboard online para monitoramento da dados em tempo real."
            />
            <Card
              img={"./flooded-house.svg"}
              desc="Previsões de desastres ambientais e envio de alertas antecipados para usuários do app"
            />
            <Card
              img={"./dashboard.svg"}
              desc="Monitoramento com inteligência artificial: taxa de transmissão personalizável e dashboard sob demanda do cliente."
            />
            <Card
              img={"./benefit.svg"}
              desc="Equipamentos compactos, de fácil instalação e baixo custo."
            />
            <Card
              img={"./network.svg"}
              desc="Transmissão confiável e criação de banco de dados hidrológicos."
            />
          </div>
          <a href="https://wa.me/+5511975635251" className={styles.cta2}>
            Fale já com um especialista <img src="./external-link.svg" />
          </a>
        </section>

        <section id="contato" className={styles.contato}>
          <div className={styles.contatos}>
            <div>
              <img src="./vitoria.png" alt="vitoria" />
              <div>
                <h2>Vitória Jacomelli Baratella</h2>
                <p>
                  CEO e co-fundadora
                  <br />
                  <br />
                  vitoria.baratella@asthon.com.br
                  <br />
                  <br />
                  (11) 97563-5251
                </p>
              </div>
            </div>
            <div>
              <img src="./caio.png" alt="caio" />
              <div>
                <h2>Caio Tácito B. da Costa</h2>
                <p>
                  CTO e co-fundador
                  <br />
                  <br />
                  caio.tacito@asthon.com.br
                  <br />
                  <br />
                  (31) 98573-6946
                </p>
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <h2>Entre em contato</h2>
            <Form />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>Copyright © 2023 Asthon Tecnologia</p>
          <a href="https://maps.app.goo.gl/uyMAdTFdnBfdmJX36" target="_blank">
            {" "}
            Av. BPS 1303 - Campus UNIFEI - Prédio J3 - sala 26 - Bairro
            Pinheirinho - Itajubá - MG - 37500-903
          </a>
        </div>
      </footer>
    </div>
  );
}
