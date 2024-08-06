const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Desde que viemos ao mudo existe um esporte chamado futebol, mais voce ja se perguntou como o futebol surgiu?",
        alternativas: [
            {
                texto: "nao",
                afirmacao: "Nao se interessa pelo futebol. "
            },
            {
                texto: "sim ",
                afirmacao: "Voce é um craque de bola."
            }
        ]
    },
    {
        enunciado: " Não se sabe com precisão a data em que o futebol surgiu. Historiadores contam que os ingleses adquiriram o hábito de chutar uma bola de couro, símbolo da cabeça de um membro do exército da Dinamarca, como forma de comemorar a expulsão dos dinamarqueses de seu país ainda no século X. Voce sabe quando foi a primeira partida de futebol? ",
        alternativas: [
            {
                texto: "Nao, nunca pesquisei.",
                afirmacao: "Nao se interessa pelo assunto."
            },
            {
                texto: "Nao, mais quero saber.",
                afirmacao: "Voce é um brasileiro legitimo."
            }
        ]
    },
    {
        enunciado: "A primeira partida de futebol foi realizada em 1864. Com quantas regars essa partida foi realizada?",
        alternativas: [
            {
                texto: "N sei,nunca procurei.",
                afirmacao: "Voce nasceu no Brasil mesmo ?."
            },
            {
                texto: "foi com 14 regras.",
                afirmacao: "Voce é curioso, a vida nao é só futebol."
            }
        ]
    },
    {
        enunciado: "?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
