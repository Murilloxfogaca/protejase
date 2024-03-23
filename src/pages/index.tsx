import React from "react";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="text-white">
      <Head>
        <title>Proteja-se | Atividades de Extensão</title>
        <meta
          name="description"
          content="Atividades de Extensão: Integração de Competências em Análise e Desenvolvimento de Sistemas I - Turma_001"
        ></meta>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
