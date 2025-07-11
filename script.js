// Espera o conteúdo da página carregar completamente antes de rodar o script.
document.addEventListener('DOMContentLoaded', function() {

    // 1. Seleciona TODOS os elementos que representam nossos players visuais.
    const players = document.querySelectorAll('.beat-player-placeholder');

    // 2. Para CADA um desses players, nós vamos adicionar um "ouvinte de evento".
    players.forEach(player => {
        
        // O evento que estamos "ouvindo" é o 'click'.
        player.addEventListener('click', function() {
            
            // 3. Quando um player é clicado, encontramos o elemento <audio> correspondente.
            // A gente "sobe" para o .beat-content e depois procura o audio dentro dele.
            const audio = player.closest('.beat-content').querySelector('audio');

            // 4. Verificamos se o áudio está pausado.
            if (audio.paused) {
                // Se estiver pausado, nós o tocamos.
                audio.play();
                // E adicionamos uma classe 'playing' ao player para mudar o visual do botão.
                player.classList.add('playing');
            } else {
                // Se estiver tocando, nós o pausamos.
                audio.pause();
                // E removemos a classe 'playing'.
                player.classList.remove('playing');
            }

            // Opcional: Quando uma música acaba, removemos a classe 'playing'.
            audio.addEventListener('ended', function(){
                player.classList.remove('playing');
            });
        });
    });
});