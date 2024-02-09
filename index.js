const perguntas = [
  {
    pergunta: "Qual clube venceu a Copa do Brasil em 2005?",
    respostas: [
      "Corinthians",
      "Flamengo",
      "São Paulo",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o artilheiro do Campeonato Brasileiro de 2018?",
    respostas: [
      "Gabigol",
      "Pedro",
      "Fábio Quagliarella",
    ],
    correta: 0
  },
  {
    pergunta: "Em qual ano o Palmeiras conquistou a Taça Rio Internacional?",
    respostas: [
      "2000",
      "2001",
      "2002",
    ],
    correta: 2
  },
  {
    pergunta: "Qual estádio sediou a final da Copa do Mundo de 2014?",
    respostas: [
      "Maracanã",
      "Mineirão",
      "Arena da Amazônia",
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o técnico da Seleção Brasileira na conquista da Copa América de 2019?",
    respostas: [
      "Tite",
      "Felipão",
      "Mano Menezes",
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano o Corinthians venceu a Libertadores e o Mundial no Japão?",
    respostas: [
      "2011",
      "2012",
      "2013",
    ],
    correta: 1
  },
  {
    pergunta: "Qual jogador brasileiro foi o artilheiro da Copa do Mundo de 2002?",
    respostas: [
      "Ronaldo",
      "Kaká",
      "Ronaldinho Gaúcho",
    ],
    correta: 0
  },
  {
    pergunta: "Em qual Ano o Internacional conquistou a Copa Sul-Americana?",
    respostas: [
      "2010",
      "2011",
      "2012",
    ],
    correta: 0
  },
  {
    pergunta: "Qual clube brasileiro possui mais títulos da Copa do Brasil até 2021?",
    respostas: [
      "Palmeiras",
      "Grêmio",
      "Cruzeiro",
    ],
    correta: 2
  },
  {
    pergunta: "Quem foi o artilheiro do Campeonato Brasileiro de 2020?",
    respostas: [
      "Gabigol",
      "Luciano",
      "Marinho",
    ],
    correta: 2
  },
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