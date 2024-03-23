import React from "react";
import { NextSeo } from "next-seo";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="text-white">
      <NextSeo
        title="Home: Atividades de Extensão"
        description="Welcome to Atividades de Extensão homepage."
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
