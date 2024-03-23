import React from "react";
import { NextSeo } from "next-seo";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="text-white">
      <NextSeo
        title="Home: Atividades de Extensão"
        description="Welcome to Atividades de Extensão homepage."
      />
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
