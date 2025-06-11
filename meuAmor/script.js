function atualizarCronometro() {
  const dataInicio = new Date("2022-03-26T00:00:00");
  const agora = new Date();

  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  const cronometro = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

  document.getElementById("cronometro").textContent = cronometro;
}

setInterval(atualizarCronometro, 1000);
atualizarCronometro(); // Atualiza logo ao carregar



const btnFugao = document.getElementById('fugaoBtn');
        const btnQuiz = document.querySelector('.containerQuiz button');
        const quizContainer = document.querySelector('.containerQuiz');

        function posicionaFugao() {
            // Pega a posição e tamanho do botão "Vamos lá"
            const quizRect = btnQuiz.getBoundingClientRect();
            const containerRect = quizContainer.getBoundingClientRect();

            // Calcula a posição relativa ao container
            const left = btnQuiz.offsetLeft + btnQuiz.offsetWidth + 16; // 16px de espaço
            const top = btnQuiz.offsetTop;

            btnFugao.style.left = left + 'px';
            btnFugao.style.top = top + 'px';
        }

        // Ao recarregar posiciona corretamente
        window.addEventListener('DOMContentLoaded', posicionaFugao);
        window.addEventListener('resize', posicionaFugao);

        // Botão fujao move para uma posição aleatória dentro do container
        btnFugao.addEventListener('mouseover', function () {
            const padding = 10;
            const maxX = quizContainer.offsetWidth - btnFugao.offsetWidth - padding;
            const maxY = quizContainer.offsetHeight - btnFugao.offsetHeight - padding;

            let randX = Math.random() * maxX + padding / 2;
            let randY = Math.random() * maxY + padding / 2;

            btnFugao.style.left = randX + 'px';
            btnFugao.style.top = randY + 'px';
        });