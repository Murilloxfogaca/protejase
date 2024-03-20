import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-white">
      <NextSeo
        title="Home: Atividades de Extensão"
        description="Welcome to Atividades de Extensão homepage."
      />
      <Head>
        <title>Proteja-se | Atividades de Extensão</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          type="description"
          value="Atividades de Extensão: Integração de Competências em Análise e Desenvolvimento de Sistemas I - Turma_001"
        ></meta>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
