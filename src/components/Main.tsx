import React from "react";
import Image from "next/image";
import Image1 from "@/assets/Image.jpg";
import Seguranca from "@/assets/seguranca.jpg";
import Remoto from "@/assets/remoto.jpg";
import Mais from "@/assets/mais.jpg";
import Softawe from "@/assets/softawe.jpg";
import Biometria from "@/assets/biometria.jpg";

export default function Main() {
  return (
    <section className="text-black body-font lg:pt-20">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-10xl md:text-8xl">
            <span>Proteja-se</span>
            <br />
            Online
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-white dark:text-white lg:w-2/3">
            Aprenda dicas práticas para proteger seu celular e dados online.
            Juntos, vamos construir uma comunidade digital segura. Seja a
            mudança: navegue com confiança, mantenha sua privacidade e
            conecte-se com segurança. Essa campanha é para você, que valoriza
            sua presença online e deseja um ambiente digital mais protegido.
          </p>
        </div>
      </div>
      <div className="md:w-1/4 m-auto text-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfSLGs6MtTqoK5yi-xUA0qe7aWd-usQOeXy0qapH4TY_uZjow/viewform"
          target="_blank"
          className="bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <span>Responder Formulário</span>
        </a>
      </div>
      <div className="container mt-4 flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <Image
          className="object-cover object-center w-full mb-10 border-white dark:border-white g327 border rounded-lg shadow-md"
          alt="hero"
          src={Image1}
        />
      </div>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Mais}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-4xl font-bold title-font font-medium mb-3">
                  Mantenha seus Dados Seguros:
                </h2>
                <p className="leading-relaxed text-lg mb-3">
                  <b>- Senha Forte: </b>Use senhas únicas e complexas para
                  desbloquear seu celular. Evite datas de nascimento ou
                  sequências simples.
                </p>
                <p className="leading-relaxed text-lg mb-3">
                  <b>- Bloqueio Automático: </b>Ative o bloqueio automático para
                  que seu celular seja protegido quando não estiver em uso.
                </p>
                <p className="leading-relaxed text-lg">
                  <b>- Atualizações Regulares: </b> Mantenha seu sistema
                  operacional e aplicativos atualizados para corrigir falhas de
                  segurança.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-4xl font-bold title-font font-medium mb-3">
                  Evite Ataques:
                </h2>
                <p className="leading-relaxed text-lg mb-3">
                  <b>- Phishing: </b> Desconfie de e-mails ou mensagens
                  suspeitas. Não clique em links ou baixe anexos de remetentes
                  desconhecidos.
                </p>
                <p className="leading-relaxed text-lg mb-3">
                  <b>- Antivírus Atualizado: </b>Instale e mantenha um software
                  antivírus atualizado para proteger contra malware e vírus.
                </p>
                <p className="leading-relaxed text-lg">
                  <b>- Autenticação de Dois Fatores: </b>Ative a autenticação de
                  dois fatores sempre que possível para uma camada extra de
                  segurança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-medium title-font text-white mb-4">
              Proteger?
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">
              Proteger seu celular é crucial para manter suas informações
              pessoais seguras. Como um importante dispositivo de comunicação e
              armazenamento, seu celular contém dados sensíveis, como fotos,
              contatos e informações bancárias. Além disso, ele pode ser alvo de
              hackers e golpistas que buscam acessar suas informações pessoais
              para cometer fraudes.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <Image
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={Biometria}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Utilize senhas ou biometria
                      </h2>
                      <h3 className="text-white mb-3">Segurança no acesso</h3>
                      <p className="mb-4">
                        Configure uma senha, PIN ou padrão de desbloqueio seguro
                        para impedir o acesso não autorizado ao seu dispositivo.
                        Além disso, muitos smartphones modernos oferecem opções
                        de biometria, como impressões digitais ou reconhecimento
                        facial, que podem ser usadas para desbloquear o telefone
                        de forma rápida e segura.
                      </p>
                      <span className="inline-flex">
                        <a className="text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <Image
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={Softawe}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Mantenha o software atualizado
                      </h2>
                      <h3 className="text-white mb-3">
                        Evitar erros do sistema
                      </h3>
                      <p className="mb-4">
                        Certifique-se de manter o sistema operacional do seu
                        smartphone, bem como todos os aplicativos, atualizados.
                        As atualizações de software muitas vezes incluem
                        correções de segurança importantes que ajudam a proteger
                        o dispositivo contra ameaças conhecidas.
                      </p>
                      <span className="inline-flex">
                        <a className="text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <Image
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={Seguranca}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Instale um antivírus
                      </h2>
                      <h3 className="text-white mb-3">Segurar</h3>
                      <p className="mb-4">
                        Considere instalar um aplicativo antivírus confiável no
                        seu smartphone. Esses aplicativos podem ajudar a
                        detectar e remover malware, protegendo o seu dispositivo
                        contra ameaças como vírus, spyware e phishing.
                      </p>
                      <span className="inline-flex">
                        <a className="text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <Image
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={Remoto}
                    />

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-white">
                        Ative o controle de acesso remoto
                      </h2>
                      <h3 className="text-white mb-3">
                        Para você e seus filhos
                      </h3>
                      <p className="mb-4">
                        Utilize recursos de controle de acesso remoto, como o
                        Find My iPhone para dispositivos iOS ou o Find My Device
                        para dispositivos Android. Esses recursos permitem
                        localizar, bloquear ou apagar remotamente o conteúdo do
                        seu smartphone em caso de perda ou roubo, garantindo que
                        suas informações pessoais permaneçam seguras.
                      </p>
                      <span className="inline-flex">
                        <a className="text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/4 m-auto">
                  <h2 className="title-font mb-4 text-4xl font-bold tracking-tighter text-white">
                    Ajude na pesquisa:
                  </h2>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfSLGs6MtTqoK5yi-xUA0qe7aWd-usQOeXy0qapH4TY_uZjow/viewform"
                    target="_blank"
                    className="bg-gray-300 hover:bg-gray-500 text-white-600 font-bold py-2 px-4 rounded inline-flex items-center"
                  >
                    <span>Responder Formulário</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
