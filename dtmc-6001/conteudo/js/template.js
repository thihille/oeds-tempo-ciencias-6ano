var verificar_inicio_cnd;
var txtLvl = 0;


// Configurações dos textos do botão de ajuda... Se houver mais de um texto do botão de ajuda, no arquivo FUNÇÕES.JS de desenvolvimento insira apenas a variavel "txtLvl = NUMERO DO TEXTO DO BOTÃO DE AJUDA QUE APARECERÁ, no local da função de desenvolvimento do projeto.
function textosInstrucoes(txtLvl){
	
	if(txtLvl == 0){
		$("#instrucoes").html("Texto do botão de ajuda.");
	}else if(txtLvl == 1){
		$("#instrucoes").html("Se colocar txtLvl = 1, o texto do botão ajuda vai mudar para este aqui.");
	}else if(txtLvl == 2){
		$("#instrucoes").html("TEXTO3");
	}else if(txtLvl == 3){
		$("#instrucoes").html("TEXTO4");
	}else if(txtLvl == 4){
		$("#instrucoes").html("TEXTO5");
	}//...
}
	//Config audio
	var 
	path = "media/audio/";
	
	
	// Som de botões e falas em sprite
	var textos = new Howl({
		urls: [
			path+'parte1.mp3',
			path+'parte1.ogg',
		],
		sprite: {
			loading: [0, 500],
			text1: [600, 18500],
			text2: [20200, 7000],
			text3: [48000, 7500],
			text4: [29000, 5000],
			text5: [36000, 10000],
			text6: [58300, 10000]
		}
	});
	
	// Som de botões e falas em sprite
	var textos2 = new Howl({
		urls: [
			path+'feedback.mp3',
			path+'feedback.ogg',
		],
		sprite: {
			loading: [0, 100],
			acerto: [14500, 6000],
			erro: [0, 6500],
			gameover: [7500, 6000],
			acertofinal: [21600, 2300]
		}
	});
	
	
function updateScale() {var w = $(window).width(),h = $(window).height(),scaleFinal = 1,scaleX = w / 1024, scaleY = h / 660; if(scaleX < 1 && scaleY < 1){
	if(scaleX < scaleY) scaleFinal = scaleX; else scaleFinal = scaleY;}else{ if(scaleX < 1) scaleFinal = scaleX; else if(scaleY < 1) scaleFinal = scaleY;}$(".container").css({"transform":"scale("+scaleFinal+","+scaleFinal+")"});}
$(window).resize(function(){updateScale();});

function engine(tipo){
	var 
	init = document.getElementById("init"),
	conteudo = document.getElementById("content");
	var	
	header = document.createElement("div"),
	iconHeader = document.createElement("div"),
	tituloHeader = document.createElement("h1"),
	btnOptions = document.createElement("div"),
	activeOptions = document.createElement("div"),
	listOptions = document.createElement("ul"),
	instrucoes = document.createElement("div"),
	setaInstrucoes = document.createElement("div"),
	overlayOptions = document.createElement("div");
	header.setAttribute("id","header");
	iconHeader.setAttribute("class", "img"+config.genero+" icon");
	btnOptions.setAttribute("id","btnOptions");
	activeOptions.setAttribute("class","actionOptions");
	listOptions.setAttribute("id","navOptions");
	instrucoes.setAttribute("id","instrucoes");
	setaInstrucoes.setAttribute("class","seta");
	overlayOptions.setAttribute("class","overlayOptions");
	var
	btnStartCapa = $("#capa .acoes div:first-child"),
	subHeader = $(".subheader"),
	subHeaderText = $(".subheader p"),
	srcBotao1 = new Array ("btnHome","btnSom","btnInstrucoes"),
	tituloNavegador = $("head title");
	for(var m=0;m < srcBotao1.length;m++){
		var list = document.createElement("li");
			list.setAttribute("class","btnOption "+ srcBotao1[m]);
		var imgList = document.createElement("img");
			imgList.setAttribute("src","img/template/"+srcBotao1[m]+".png");
			list.appendChild(imgList);				
			listOptions.appendChild(list);
			header.appendChild(listOptions);
	}
	tituloNavegador.html(config.ano+" - "+config.titulo);
	init.insertBefore(header, conteudo);
	init.appendChild(overlayOptions);
	header.appendChild(iconHeader);
	header.appendChild(tituloHeader);
	header.appendChild(btnOptions);
	btnOptions.appendChild(activeOptions);
	instrucoes.appendChild(setaInstrucoes);
	header.appendChild(instrucoes);
	tituloHeader.innerHTML = config.titulo;
	iconHeader.style.backgroundImage = config.genero;
	if(tipo == "matematica"){
		$("body").css({background:config.matematica.bck});
		iconHeader.style.backgroundColor = config.matematica.cp4;
		header.style.backgroundColor = config.matematica.cp1; 
		btnOptions.style.background = config.matematica.btnOptions;
		btnStartCapa.css("background-color",config.matematica.cs1);	
		subHeader.css({"background-color":config.matematica.cs1, width:"335px"});
		subHeaderText.text(config.ano);
		$("#instrucoes").css("background",config.matematica.cp1);
		$(".seta").css("border-left-color",config.matematica.cp1);
	}else if(tipo == "portugues"){
		$("body").css({background:config.portugues.bck});
		iconHeader.style.backgroundColor = config.portugues.cp4;
		header.style.backgroundColor = config.portugues.cp1; 
		btnOptions.style.background = config.portugues.btnOptions;
		btnStartCapa.css("background-color",config.portugues.cs1);	
		subHeader.css({"background-color":config.portugues.cs1, width:"335px"});	
		subHeaderText.text(config.ano);
		$("#instrucoes").css("background",config.portugues.cp1);
		$(".seta").css("border-left-color",config.portugues.cp1);
	}else if(tipo == "geografia"){
		$("body").css({background:config.geografia.bck});
		iconHeader.style.backgroundColor = config.geografia.cp4;
		header.style.backgroundColor = config.geografia.cp1; 
		btnOptions.style.background = config.geografia.btnOptions;
		btnStartCapa.css("background-color",config.geografia.cs1);	
		subHeader.css({"background-color":config.geografia.cs1, width:"335px"});	
		subHeaderText.text(config.ano);
		$("#instrucoes").css("background",config.geografia.cp1);
		$(".seta").css("border-left-color",config.geografia.cp1);
	}else if(tipo == "ciencias"){
		$("body").css({background:config.ciencias.bck});
		iconHeader.style.backgroundColor = config.ciencias.cp4;
		header.style.backgroundColor = config.ciencias.cp1; 
		btnOptions.style.background = config.ciencias.btnOptions;
		btnStartCapa.css("background-color",config.ciencias.cs1);	
		subHeader.css({"background-color":config.ciencias.cs1, width:"270px"});	
		subHeaderText.text(config.ano);
		$("#instrucoes").css("background",config.ciencias.cp1);
		$(".seta").css("border-left-color",config.ciencias.cp1);
	}else if(tipo == "historia"){
		$("body").css({background:config.historia.bck});
		iconHeader.style.backgroundColor = config.historia.cp4;
		header.style.backgroundColor = config.historia.cp1; 
		btnOptions.style.background = config.historia.btnOptions;
		btnStartCapa.css("background-color",config.historia.cs1);	
		subHeaderText.text(config.ano);
		subHeader.css({"background-color":config.historia.cs1, width:"335px"});	
		$("#instrucoes").css("background",config.historia.cp1);
		$(".seta").css("border-left-color",config.historia.cp1);
	}
}
var config = {
	create: function(){
		updateScale();
		// Matéria do Objeto
		engine("ciencias");}, // 1 - português // 2 - matemática // 3 - ciências // 4 - história // 5 - geografia
	// Nome do Objeto
	titulo: "CICLO DA ÁGUA",
	// Ano da disciplina
	ano: "CIÊNCIAS | 4º Ano",
	
	
	
	
	genero: "home",
	tipo: "pnld 2016",
	colecao: "Jimboe",
	matematica: {
		cp1: "rgba(46,86,166,1)",
		cp2: "rgba(136,178,223,1)",
		cp3: "rgba(14,49,120,1)",
		cp4: "rgba(18,23,57,1)",
		cs1: "rgba(246,140,61,1)",
		cs2: "rgba(253,209,176,1)",
		cs3: "rgba(251,178,115,1)",
		cs4: "rgba(192,102,22,1)",
		bck: "url(img/template/background-matematica.gif) repeat center",
		btnOptions: "url(img/template/btnOptionsMatematica.png) no-repeat bottom right"
	},
	ciencias: {
		cp1: "rgba(1,186,189,1)",
		cp2: "rgba(119,205,208,1)",
		cp3: "rgba(0,125,126,1)",
		cp4: "rgba(0,72,74,1)",
		cs1: "rgba(237,26,59,1)",
		cs2: "rgba(245,151,149,1)",
		cs3: "rgba(241,102,106,1)",
		cs4: "rgba(196,18,47,1)",
		//bck: "url(img/template/background-ciencias.gif) repeat bottom",
		bck: "url(img/template/akpalo_textura_ciencias.png) repeat bottom",
		btnOptions: "url(img/template/btnOptionsCiencias.png) no-repeat bottom right"
	},
	historia: {
		cp1: "rgba(112,89,166,1)",
		cp2: "rgba(176,163,208,1)",
		cp3: "rgba(92,46,145,1)",
		cp4: "rgba(52,12,61,1)",
		cs1: "rgba(209,162,28,1)",
		cs2: "rgba(238,221,140,1)",
		cs3: "rgba(225,198,102,1)",
		cs4: "rgba(163,139,16,1)",
		bck: "url(img/template/background-historia.gif) repeat bottom",
		btnOptions: "url(img/template/btnOptionsHistoria.png) no-repeat bottom right"
	},
	portugues: {
		cp1: "rgba(237,20,91,1)",
		cp2: "rgba(245,152,157,1)",
		cp3: "rgba(176,4,65,1)",
		cp4: "rgba(93,0,35,1)",
		cs1: "rgba(0,169,100,1)",
		cs2: "rgba(165,217,201,1)",
		cs3: "rgba(79,190,149,1)",
		cs4: "rgba(0,98,58,1)",
		bck: "url(img/template/background-portugues.gif) repeat bottom",
		btnOptions: "url(img/template/btnOptionsPortugues.png) no-repeat bottom right"
	},
	geografia: {
		cp1: "rgba(180,62,151,1)",
		cp2: "rgba(199,142,191,1)",
		cp3: "rgba(143,43,120,1)",
		cp4: "rgba(104,0,89,1)",
		cs1: "rgba(77,184,72,1)",
		cs2: "rgba(196,223,155,1)",
		cs3: "rgba(151,203,89,1)",
		cs4: "rgba(33,116,52,1)",
		bck: "url(img/template/background-geografia.gif) repeat bottom",
		btnOptions: "url(img/template/btnOptionsGeografia.png) no-repeat bottom right"
	}
}


function template(){
	config.create();
	var
	template = $("#header");
	var 
	capa = {
		imagem: $("#capa"),
		cabecalho: $("#capa .header"),
		subcapa: $("#capa .subheader"),
		tituloCabecalho: $("#capa .header h1"),
		botaoIniciar: $("#capa .acoes div:first-child"),
		botaoCredito: $("#capa .acoes div:nth-child(2)"),
		creditos: {
			janela: $("#creditos"),
			texto: $(".text-creditos"),
			botaoFechar: $(".btnFechaCreditos")
		}
	}
	var 
	opcoes = {
		ativo:0,
		tool: $(".actionOptions"),
		botoes: $("#navOptions"),
		overlay: $(".overlayOptions"),
		menu: {
			geral: $("#navOptions li"),
			background: $("#btnOptions"),
			atualizar: $(".imghome"),
			principal: $(".btnMenu"),
			instrucoes: $(".btnInstrucoes")
		},
		cntInstrucoes: $("#instrucoes"),
		textoInstrucoes: ""
	}	
	capa.cabecalho.show().addClass("animated slideInRight");
	capa.tituloCabecalho.text(config.titulo);
	setTimeout(function(){
		capa.subcapa.css({"margin-top":"-222px",opacity:"1"});
		capa.botaoIniciar.show().addClass("animated lightSpeedIn");
		setTimeout(function(){capa.botaoIniciar.removeClass("animated lightSpeedIn");},1000);
		capa.botaoCredito.delay(500).fadeIn(500);
	},1000);
	capa.botaoIniciar.on("click",function(){
		toc.stop().play();
		textos.stop().play("loading");
		capa.cabecalho.css({marginTop:"-380px"});
		capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		capa.botaoCredito.css({marginLeft:"250px"});
		template.show();
		setTimeout(function(){
			capa.imagem.fadeOut(300,function(){
				$(this).remove();
				startGame.init();
			});
		},800);
	});
	velocidadeCreditos = 25000;
	capa.botaoCredito.on("click",function(){
		$(this).fadeOut(500);		
		capa.creditos.janela.fadeIn(500,function(){
			capa.creditos.texto.stop().animate({marginTop:"-340px"},velocidadeCreditos, "linear");
			starwars = setInterval(function(){
				capa.creditos.texto.css({marginTop:"261px"}).stop().animate({marginTop:"-340px"},velocidadeCreditos, "linear");
			},velocidadeCreditos);
			
		});
	});
	capa.creditos.botaoFechar.on("click",function(){
		capa.creditos.texto.stop().css({marginTop:"261px"});
		clearInterval(starwars);
		capa.creditos.janela.fadeOut(500);
		capa.botaoCredito.fadeIn(500);
	});
	// opcoes.tool.on({
	// 	click:function(){
	// 		if(opcoes.ativo == 0){
	// 			textosInstrucoes(txtLvl);
	// 			$(this).parent().css("box-shadow","-5px -25px 10px rgba(0,0,0,.5)");
	// 			$(this).css("opacity",".3");
	// 			opcoes.cntInstrucoes.removeClass("animated rotateOutUpRight");
	// 			opcoes.cntInstrucoes.show().addClass("animated rotateInDownRight");
	// 			opcoes.ativo = 1;
	// 		}else{
	// 			$(this).parent().css("box-shadow","none");
	// 			$(this).css("opacity","1");
	// 			opcoes.cntInstrucoes.removeClass("animated rotateInDownRight");
	// 			opcoes.cntInstrucoes.addClass("animated rotateOutUpRight");
	// 			opcoes.ativo = 0;
	// 		}
	// 	}
	// });
	opcoes.menu.atualizar.on("click",function(){
		location.href="index.html"
	});
	
	
	verificar_inicio();
	function verificar_inicio(){
	  verificar_inicio_cnd = setInterval(function(){
	  if(window.sessionStorage.getItem('iniciar_oed')=='sim'){
	      startGame.init();
		  sound.play();
		  //template.show();
	      clearInterval(verificar_inicio_cnd);
		  
	    }
	  }, 1000);
	}
	
	

}
	function iniciar_com_tap(){
	//alert("Tap");
	startGame.init();
	clearInterval(verificar_inicio_cnd);
}


