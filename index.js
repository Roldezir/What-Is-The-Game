var pergunta = document.querySelector(".pergunta")

var opcoes = document.querySelector(".opcao")

var opcao1 = document.querySelector("#o1")
var opcao2 = document.querySelector('#o2')
var opcao3 = document.querySelector('#o3')
var opcao4 = document.querySelector('#o4')

var botaoProximo = document.querySelector(".proximo")
var botaoTentarNovamente = document.querySelector(".tentarNovamente")

var perguntaAtual=0
var opcaoSelecionada=0
var acertos=0

pergunta.innerText="Regras do Jogo:"
opcao1.innerText="1-Você deve escolher uma das 4 opções para responder a pergunta."
opcao2.innerText="2-Cada pergunta vai ter apenas uma resposta correta."
opcao3.innerText="3-Se você não selecionar nenhuma opção não poderá prosseguir."
opcao4.innerText="4-Responda sem pesquisar ;)"

botaoProximo.style.display='none'
botaoTentarNovamente.style.display='none'

function iniciar(){
    let botao=document.querySelector(".iniciar")
    botao.style.display='none' 
    botaoProximo.style.display='block'

    opcao1.style.color='black'
    opcao2.style.color='black'
    opcao3.style.color='black'
    opcao4.style.color='black'

    p1()
}

//perguntas
function p1(){

    pergunta.innerText='Qual a cor da casca da Goiaba?'

    opcao1.innerText='1-Vermelho'
    opcao2.innerText='2-Rosa'
    opcao3.innerText='3-Verde'
    opcao4.innerText='4-Branco'

    opcaoSelecionada=0

    perguntaAtual=1

}
function p2(){

    pergunta.innerText='Qual o segundo maior planeta do Sistema Solar?'

    opcao1.innerText='1-Plutão'
    opcao2.innerText='2-Saturno'
    opcao3.innerText='3-Urano'
    opcao4.innerText='4-Júpiter'

    perguntaAtual=2
}
function p3(){

    pergunta.innerText='Qual foi o País a ganhar a primeira Copa do Mundo?'

    opcao1.innerText='1-Uruguai'
    opcao2.innerText='2-Argentina'
    opcao3.innerText='3-Estados Unidos da América'
    opcao4.innerText='4-França'

    perguntaAtual=3
}
function p4(){

    pergunta.innerText='Qual animal é mais rápido?'

    opcao1.innerText='1-Gorila'
    opcao2.innerText='2-Pernilongo'
    opcao3.innerText='3-Baleia Azul'
    opcao4.innerText='4-Hipopótamo'

    perguntaAtual=4
}
function p5(){

    pergunta.innerText='Qual lugar é mais frio?'

    opcao1.innerText='1-Snag, Canadá'
    opcao2.innerText='2-Barrow, Alasca, EUA'
    opcao3.innerText='3-Oymyakon, Rússia'
    opcao4.innerText='4-Estação de Vostok, Antártica'

    perguntaAtual=5
}
function p6(){

    pergunta.innerText='Quem morreu de algum tipo de cancer?'

    opcao1.innerText='1-Elvis Presley'
    opcao2.innerText='2-Chester Bennington'
    opcao3.innerText='3-Bob Marley'
    opcao4.innerText='4-Christopher Reeve'

    perguntaAtual=6
}
function p7(){

    pergunta.innerText='Quantas cores diferentes tem um cubo mágico?'

    opcao1.innerText='1-6 Cores'
    opcao2.innerText='2-Sete Cores'
    opcao3.innerText='3-4 Cores'
    opcao4.innerText='4-5 Cores'

    perguntaAtual=7
}
function p8(){

    pergunta.innerText='Quantas horas tem uma semana?'

    opcao1.innerText='1-172 horas'
    opcao2.innerText='2-156 horas'
    opcao3.innerText='3-168 horas'
    opcao4.innerText='4-158 horas'

    perguntaAtual=8
}
function p9(){

    pergunta.innerText='O que tem mais memória?'

    opcao1.innerText='1-25 mb'
    opcao2.innerText='2-38.000 kb'
    opcao3.innerText='3-0,032 gb'
    opcao4.innerText='4-12 mb + 0,01 gb'

    perguntaAtual=9
}
function p10(){

    pergunta.innerText='O que vive mais tempo?'

    opcao1.innerText='1-Humano'
    opcao2.innerText='2-Tartaruga Marinha'
    opcao3.innerText='3-Helefante'
    opcao4.innerText='4-Rinoceronte'

    perguntaAtual=10
}

//resultado
function resultado(){

    pergunta.innerText=`Resultado: ${acertos}/10 acertos!`

    opcao1.innerText='Obrigado por Jogar!'
    opcao2.innerText='Criado por Roldezir'
    opcao3.innerText='Me siga no instagram: @roldezirzacarias'
    opcao4.style.display='none'

    botaoProximo.style.display='none'
    botaoTentarNovamente.style.display='block'
}
//tentar Novamente
function tentarNovamente(){
    perguntaAtual=0
    opcaoSelecionada=0
    acertos=0

    botaoTentarNovamente.style.display='none'
    opcao1.style.display='block'
    opcao2.style.display='block'
    opcao3.style.display='block'
    opcao4.style.display='block'

    iniciar()
}
//verificador de respostas
function proximo(){

if(opcaoSelecionada ==0){
    window.alert('Escolha uma opção!')
} else if(perguntaAtual==1 && opcaoSelecionada==3){
    acertos++
    p2()
    opcaoSelecionada=0

    opcao1.style.color='black'
    opcao2.style.color='black'
    opcao3.style.color='black'
    opcao4.style.color='black'

    } else if(perguntaAtual==1 && opcaoSelecionada != 3){
        p2()
        opcaoSelecionada=0

        opcao1.style.color='black'
        opcao2.style.color='black'
        opcao3.style.color='black'
        opcao4.style.color='black'

    } else if(perguntaAtual==2 && opcaoSelecionada==2){
        acertos++
        p3()
        opcaoSelecionada=0

        opcao1.style.color='black'
        opcao2.style.color='black'
        opcao3.style.color='black'
        opcao4.style.color='black'

        } else if(perguntaAtual==2 && opcaoSelecionada != 2){
            p3()
            opcaoSelecionada=0

            opcao1.style.color='black'
            opcao2.style.color='black'
            opcao3.style.color='black'
            opcao4.style.color='black'

        } else if(perguntaAtual==3 && opcaoSelecionada==1){
            acertos++
            p4()
            opcaoSelecionada=0

            opcao1.style.color='black'
            opcao2.style.color='black'
            opcao3.style.color='black'
            opcao4.style.color='black'

            } else if(perguntaAtual==3 && opcaoSelecionada != 1){
                p4()
                opcaoSelecionada=0

                opcao1.style.color='black'
                opcao2.style.color='black'
                opcao3.style.color='black'
                opcao4.style.color='black'

            } else if(perguntaAtual==4 && opcaoSelecionada==4){
                acertos++
                p5()
                opcaoSelecionada=0

                opcao1.style.color='black'
                opcao2.style.color='black'
                opcao3.style.color='black'
                opcao4.style.color='black'

                } else if(perguntaAtual==4 && opcaoSelecionada != 4){
                    p5()
                    opcaoSelecionada=0

                    opcao1.style.color='black'
                    opcao2.style.color='black'
                    opcao3.style.color='black'
                    opcao4.style.color='black'

                } else if(perguntaAtual==5 && opcaoSelecionada==4){
                    acertos++
                    p6()
                    opcaoSelecionada=0

                    opcao1.style.color='black'
                    opcao2.style.color='black'
                    opcao3.style.color='black'
                    opcao4.style.color='black'

                    } else if(perguntaAtual==5 && opcaoSelecionada != 4){
                        p6()
                        opcaoSelecionada=0
                        
                        opcao1.style.color='black'
                        opcao2.style.color='black'
                        opcao3.style.color='black'
                        opcao4.style.color='black'

                    } else if(perguntaAtual==6 && opcaoSelecionada==3){
                        acertos++
                        p7()
                        opcaoSelecionada=0

                        opcao1.style.color='black'
                        opcao2.style.color='black'
                        opcao3.style.color='black'
                        opcao4.style.color='black'

                        } else if(perguntaAtual==6 && opcaoSelecionada != 3){
                            p7()
                            opcaoSelecionada=0

                            opcao1.style.color='black'
                            opcao2.style.color='black'
                            opcao3.style.color='black'
                            opcao4.style.color='black'

                        } else if(perguntaAtual==7 && opcaoSelecionada==1){
                            acertos++
                            p8()
                            opcaoSelecionada=0

                            opcao1.style.color='black'
                            opcao2.style.color='black'
                            opcao3.style.color='black'
                            opcao4.style.color='black'

                            } else if(perguntaAtual==7 && opcaoSelecionada != 1){
                                p8()
                                opcaoSelecionada=0

                                opcao1.style.color='black'
                                opcao2.style.color='black'
                                opcao3.style.color='black'
                                opcao4.style.color='black'

                            } else if(perguntaAtual==8 && opcaoSelecionada==3){
                                acertos++
                                p9()
                                opcaoSelecionada=0

                                opcao1.style.color='black'
                                opcao2.style.color='black'
                                opcao3.style.color='black'
                                opcao4.style.color='black'

                                } else if(perguntaAtual==8 && opcaoSelecionada != 3){
                                    p9()
                                    opcaoSelecionada=0

                                    opcao1.style.color='black'
                                    opcao2.style.color='black'
                                    opcao3.style.color='black'
                                    opcao4.style.color='black'

                                } else if(perguntaAtual==9 && opcaoSelecionada==2){
                                    acertos++
                                    p10()
                                    opcaoSelecionada=0

                                    opcao1.style.color='black'
                                    opcao2.style.color='black'
                                    opcao3.style.color='black'
                                    opcao4.style.color='black'

                                    } else if(perguntaAtual==9 && opcaoSelecionada != 2){
                                        p10()
                                        opcaoSelecionada=0

                                        opcao1.style.color='black'
                                        opcao2.style.color='black'
                                        opcao3.style.color='black'
                                        opcao4.style.color='black'

                                    } else if(perguntaAtual==10 && opcaoSelecionada==2){
                                        acertos++
                                        resultado()
                                        opcaoSelecionada=0

                                        opcao1.style.color='black'
                                        opcao2.style.color='black'
                                        opcao3.style.color='black'
                                        opcao4.style.color='black'
                                        
                                        } else if(perguntaAtual==10 && opcaoSelecionada != 2){
                                            resultado()
                                        }
}

//selecionando a opção
    function cop1(){
        opcaoSelecionada=1
        opcao1.style.color='gray'
        
        opcao2.style.color='black'
        opcao3.style.color='black'
        opcao4.style.color='black'
    }
    function cop2(){
        opcaoSelecionada=2
        opcao2.style.color='gray'

        opcao1.style.color='black'
        opcao3.style.color='black'
        opcao4.style.color='black'
    }
    function cop3(){
        opcaoSelecionada=3
        opcao3.style.color='gray'

        opcao2.style.color='black'
        opcao1.style.color='black'
        opcao4.style.color='black'
    }
    function cop4(){
        opcaoSelecionada=4
        opcao4.style.color='gray'

        opcao2.style.color='black'
        opcao3.style.color='black'
        opcao1.style.color='black'
    }

//trocando as cores

function eop1(){
    if(opcaoSelecionada !=1){
    opcao1.style.color='yellow'
    }
}
function eop2(){
    if(opcaoSelecionada !=2){
        opcao2.style.color='yellow'
    }
}
function eop3(){
    if(opcaoSelecionada !=3){
        opcao3.style.color='yellow'
        }
}
function eop4(){
    if(opcaoSelecionada !=4){
        opcao4.style.color='yellow'
        }
}

function oop1(){
    if(opcaoSelecionada !=1){
        opcao1.style.color='black'
        }
 }
 function oop2(){
    if(opcaoSelecionada !=2){
        opcao2.style.color='black'
        }
 }
 function oop3(){
    if(opcaoSelecionada !=3){
        opcao3.style.color='black'
        }
 }
 function oop4(){
    if(opcaoSelecionada !=4){
        opcao4.style.color='black'
        }
 }