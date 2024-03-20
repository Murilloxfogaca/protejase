export default function Footer() {
  return (
    <footer class="text-white body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          class="flex title-font font-medium items-center md:justify-start justify-center"
          href="/"
        >
          <span class="ml-3 text-xl">
            Atividades de Extensão: Integração de Competências em Análise e
            Desenvolvimento de Sistemas I - Turma_001
          </span>
        </a>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="ml-3" href="https://www.linkedin.com/in/jacklatimer/">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
