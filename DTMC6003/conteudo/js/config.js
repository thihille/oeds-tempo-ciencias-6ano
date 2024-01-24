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
			// Disciplina do OED AKPALO | portugues, matematica, historia, geografia, ciencias
			// Disciplina do OED APOEMA | gramatica
			// Disciplina do OED PRATICANDO | matematica
			// Disciplina do OED TEMPO | portugues, matematica, historia, geografia, ciencias, espanhol, ingles
			disciplina: 'ciencias',
			// Ano
			ano: 6,
			// Título do OED
			titulo: 'Propriedades do ar',
			// Texto de Instruções do OED
			instrucoes: '',
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
			"<strong>Supervisão de arte, editoração e produção digital</strong><br /> Adelaide Carolina Cerutti",
			"<strong>Coordenação de produção digital</strong><br /> Daniel Cilli",
			"<strong>Web design</strong><br />Max Salvado Thiago Hille e Tiago Lima",
			"<strong>Assistência de design digital</strong><br />Rodrigo Guedes",
			"<strong>Assistência de arte</strong><br /> Livia Danielli ",
			"<strong>Roteiro</strong><br /> Erika Maria de Jesus e Mateus Carneiro Ribeiro Alves",
			"<strong>Ilustração</strong><br /> Kanton",
			"<strong>Revisão</strong><br /> Equipe Revisão",
			"<strong>Pesquisa iconográfica</strong><br /> Jonathan Santos e Mariana Tonidandel Moreira",
			"<strong>Áudio</strong><br /> Duo de Bois/ Sonata 5 in A major- Allegro/ Magnatune",
			"<strong>Narração</strong><br /> Mariana Zink",
			"<strong>Produção de mídia</strong><br /> Perugluglu Tecnologia Criativa",
			"<strong>Controle de processos editoriais</strong><br /> Equipe CPE",
			// FIM

			// Fim dos Créditos, favor não mexer, se tirar essas aspas duplas vai dar bug ;)
			" "
		]
	}
];
