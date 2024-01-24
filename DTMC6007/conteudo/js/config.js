/*!
 * Copyright 2016 Editora do Brasil
 * By: Tiago Juvenal de Lima
 * Email: tiago.lima@editoradobrasil.com.br

 * Foca no Código *

        .---.
       /o   o\
    __(=  "  =)__
     //\'-=-'/\\
        )   (_
       /      `"=-._
      /       \     ``"=.
     /  /   \  \         `=..--.
 ___/  /     \  \___      _,  , `\
`-----' `""""`'-----``"""`  \  \_/

*/

var CONFIG = [
	{
		// INFORMAÇÕES PRINCIPAIS DO OED
		infoOed: {
			// Tipo do OED: objeto ou video
			tipo: 'objeto',
			// Template do OED: akpalo, apoema, praticando, tempo
			template: 'tempo',
			// Disciplina do OED AKPALO | portugues, matematica, historia, geografia, ciencias, arte
			// Disciplina do OED APOEMA | gramatica
			// Disciplina do OED PRATICANDO | matematica
			// Disciplina do OED TEMPO | portugues, matematica, historia, geografia, ciencias, espanhol, ingles
			disciplina: 'ciencias',
			// Ano
			ano: 6,
			// Título do OED
			titulo: 'Manguezal',
			// Texto de Instruções do OED
			instrucoes: 'Clique nos ícones da imagem para obter mais informações sobre o manguezal.',
			// Texto de Navegação do OED
			navegacao: '',
			// Título do Crédito Akpalo, PROJETO OU COLEÇÃO
			tituloCreditoAkpalo: 'Coleção Akpalô',
			// Título do Crédito Apoema, PROJETO OU COLEÇÃO
			tituloCreditoApoema: 'Projeto Apoema',
      // Desabilitando botão de áudio
      botaoAudioDesabilitar: false  //true(sim) ou false(nao)
		},

    abertura: 'sim',

		// INFORMAÇÕES DO CRÉDITO
		infoCreditos: [
			// Cada inserção de credito, favor separar por virgula no fim ex: "TEXTO CRÉDITO",
			// Descartar a ultima linha q está comentado como "NÃO MEXER"

			// INICIO
			"<strong>Supervisão de arte, editoração e produção digital</strong><br>Adelaide Carolina Cerutti",
      "<strong>Coordenação de produção digital</strong><br>Daniel Cilli",
      "<strong>Web design</strong><br>Max Salvado e Thiago Hille",
      "<strong>Assistência de design digital</strong><br>Rodrigo Guedes",
      "<strong>Assistência de arte</strong><br>Livia Danielli",
      "<strong>Roteiro</strong><br>Ana Caroline Mendonça",
      "<strong>Revisão</strong><br>Equipe Revisão",
      "<strong>Coordenação iconográfica</strong><br>Léo Burgos",
      "<strong>Pesquisa iconográfica</strong><br>Douglas Cometti",
      "<strong>Imagens</strong><br>Paulo/kino.com.br, Tales Azzi/Pulsar Imagens, Marcos Amend/Pulsar Imagens, Haroldo Palo Jr./kino.com.br",
      "<strong>Ilustrações</strong><br>Vagner Coelho",
      "<strong>Locução</strong><br>Cidade 300",
      "<strong>Controle de processos editoriais</strong><br>Equipe CPE",
			// FIM

			// Fim dos Créditos, favor não mexer, se tirar essas aspas duplas vai dar bug ;)
			" "
		]
	}
];
