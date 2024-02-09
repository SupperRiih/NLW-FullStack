const perguntas = [
  {
    pergunta: "O que significa 'dbd' em DBD Mobile?",
    respostas: [
      "Database Design",
      "Death by Daylight",
      "Digital Business Development"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a plataforma principal do DBD Mobile?",
    respostas: [
      "iOS",
      "Android",
      "Ambas as opções estão corretas"
    ],
    correta: 2
  },
  {
    pergunta: "Quais são os modos de jogo disponíveis no DBD Mobile?",
    respostas: [
      "Apenas Sobrevivência",
      "Apenas Assassino",
      "Sobrevivência e Assassino"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o objetivo do Sobrevivente no DBD Mobile?",
    respostas: [
      "Eliminar os outros Sobreviventes",
      "Consertar geradores e escapar",
      "Assassinar o Assassino"
    ],
    correta: 1
  },
  {
    pergunta: "Quais são os tipos de Assassinos disponíveis no DBD Mobile?",
    respostas: [
      "Apenas Assassinos humanos",
      "Apenas Assassinos sobrenaturais",
      "Assassinos humanos e sobrenaturais"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o Cofre no DBD Mobile?",
    respostas: [
      "Um item para Sobreviventes",
      "Um local de armazenamento de tesouros",
      "Um local de execução para Assassinos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o propósito das Ofertas no DBD Mobile?",
    respostas: [
      "Personalizar o personagem",
      "Aumentar a dificuldade do jogo",
      "Obter bônus e benefícios durante a partida"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o 'Rift' no DBD Mobile?",
    respostas: [
      "Um buraco dimensional",
      "Uma expansão de mapa",
      "Um sistema de progressão com recompensas"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função das Habilidades Especiais do Assassino no DBD Mobile?",
    respostas: [
      "Ajudar os Sobreviventes",
      "Detectar a localização dos Sobreviventes",
      "Aumentar a velocidade de movimento"
    ],
    correta: 1
  },
  {
    pergunta: "O que acontece quando um Sobrevivente é apanhado pelo Assassino no DBD Mobile?",
    respostas: [
      "O Sobrevivente é eliminado do jogo",
      "O Sobrevivente é colocado em um gancho",
      "O jogo continua normalmente"
    ],
    correta: 1
  }
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
    for(const item of perguntas) {
        const quizItem = template.content.cloneNode(true)
        quizItem.querySelector('h3').textContent = item.pergunta

       for(let resposta of item.respostas) {
            const dt = quizItem.querySelector('dl dt').cloneNode(true)
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-'  + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)
                if(estaCorreta) {
                        corretas.add(item)
                }
            
                    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
                }
                
                
            quizItem.querySelector('dl').appendChild(dt)
            }
        
        quizItem.querySelector('dl dt').remove()
        
        //coloca a pergunta na tela
        quiz.appendChild(quizItem)
    }