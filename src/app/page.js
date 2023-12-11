"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <div>
            <img src="/logo.svg" alt="logo" />
            <ul className={navOpen ? styles.navOpen : ""}>
              <li>
                <a
                  href="#quem-somos"
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                >
                  Quem somos
                </a>
              </li>
              <li>
                <a
                  href="#produto"
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                >
                  Produto
                </a>
              </li>
              <li>
                <a
                  href="#diferenciais"
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                >
                  Contato
                </a>
              </li>
            </ul>
            <button
              className={`${styles.hamburgerToggle} ${
                navOpen ? styles.hamburgerClose : ""
              }`}
              onClick={() => {
                setNavOpen(!navOpen);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </nav>

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
            <a href="#">Contrate já</a>
            <a href="#">Conheça nosso produto</a>
          </div>
        </div>
        <img src="/graph.png" alt="graph" className={styles.heroGraph} />
      </header>
      <img src="/hero-deco.svg" alt="hero-deco" className={styles.heroDeco} />

      <main>
        <section>
          <div>
            <img src="./dac.png" alt="dac" />
            <img src="./inovai.png" alt="inovai" />
            <img src="./incit.png" alt="incit" />
          </div>
          <p>Nossos parceiros confiam na tecnologia da Asthon</p>
        </section>

        <section id="quem-somos">
          <img src="naosei" alt="" />
          <div>
            <h2>Quem somos?</h2>
            <p>
              Somos uma startup fundada em 2023 na cidade de Itajubá, Minas
              Gerais, especializada em fornecer soluções de conectividade, a fim
              de simplificar a vida dos usuários.
              <br />
              Através de soluções avançadas, oferecemos serviços de
              monitoramento de parâmetros em tempo real, proporcionando um novo
              conceito de IoT ao mercado.
              <br />
              Nossa equipe altamente qualificada e experiente, junto a nossa
              expertise em IoT, nos permite desenvolver soluções simples e
              eficazes para monitorar informações em tempo real, garantindo a
              operação correta do sistema, confiabilidade na transmissão e no
              armazenamento de dados.
              <br />
              Assim, estamos sempre na vanguarda das soluções tecnológicas,
              proporcionando uma experiência única aos nossos clientes.
            </p>
          </div>
        </section>

        <section id="produto">
          <h2>Estação de Monitoramento Hidrológico</h2>
          <p>
            Nossa Estação de Monitoramento Hidrológico oferece dados precisos em
            tempo real. Os dados de nível e pluviosidade são coletados pelos
            sensores instalados e enviados para o dashboard online por meio do
            MARLIN (Módulo Coletor de Dados LoRaWAN).
          </p>
          <div>
            <img src="naosei" alt="" />
            <img src="naosei" alt="" />
          </div>
          <a href="#">
            Fale já com um especialista <img src="./external-link.svg" />
          </a>
        </section>

        <section>
          <img src="naosei" alt="" />
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

        <section id="diferenciais">
          <h2>Diferenciais</h2>
          <div>{/* Fazer componente dos cards de diferenciais */}</div>
        </section>

        <section id="contato">{/* Form */}</section>
      </main>

      <footer>{/* Footer */}</footer>
    </div>
  );
}
