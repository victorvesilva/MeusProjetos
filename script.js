const quizData = [
    {
        pergunta: 'De quem é a famosa frase “Penso, logo existo”?',
        a: 'Platão',
        b: 'Galileu Galilei',
        c: 'Descartes',
        d: 'Sócrates',

        resposta: 'c'

    },


    {
        pergunta: 'Quais o menor e o maior país do mundo?',
        a:'Vaticano e Rússia',
        b:'Nauru e China',
        c:'Mônaco e Canadá',
        d:'Malta e Estados Unidos',

        resposta: 'a'
    


    },

    {
        pergunta: 'Quantas casas decimais tem o número pi?',
        a:'Duas',
        b:'Centenas',
        c:'Infinitas',
        d:'Milhares',

        resposta: 'c'




    }
];

const perguntaElemento = document.getElementById('pergunta');
const quiz = document.getElementById("quiz");

const a_texto = document.getElementById('a_texto');
const b_texto = document.getElementById('b_texto');
const c_texto = document.getElementById('c_texto');
const d_texto = document.getElementById('d_texto');
const respostaBotao = document.getElementById("resposta");



let quizAtual = 0;

let pontos = 0;

carregarQuiz();

function carregarQuiz(){
    const quizDataMomento = quizData[]
    [perguntaAtual];
    
    perguntaElemento.innerText = quizDataMomento.pergunta;
    
    a_texto.innerText = quizDataMomento.a;
    b_texto.innerText = quizDataMomento.b;
    c_texto.innerText = quizDataMomento.c;
    d_texto.innerText = quizDataMomento.d;


    perguntaAtual++;
}


function pegarSelecionado (){
    const respostaElemento = document.querySelectorAll('resposta');
    resposta.forEach((respostaElemento) => {
        resposta = respostaElemento.id;
        return respostaElemento;

    });
    return resposta;
}


function resetRespostas(){
    respostaElemento.forEach((respostaElemento)=>{
        respostaElemento.checked = false;
    });
}



respostaBotao.addEventListener('click', () => {
    
    quizAtual++;


    const resposta = pegarSelecionado();

    if(resposta){
        if(resposta === quizData[quizAtual].correct)
        if(quizAtual < quizData.length){
            carregarQuiz();
    
        } else {
            alert("Você terminou o quiz! Parabéns!");
        }
    

    }






});

