#pragma strict

private var dialogosActivos : boolean;
private var enOpcion: boolean = false;

private var conversacionActual : ArbolConversacion;
private var conversacionDario1: ArbolConversacion;
private var conversacionDario2: ArbolConversacion;
private var conversacionDario3: ArbolConversacion;
private var conversacionDario4: ArbolConversacion;
private var conversacionDario5: ArbolConversacion;
private var conversacionDiana1 : ArbolConversacion;
private var conversacionDiana2 : ArbolConversacion;
private var conversacionDiana3 : ArbolConversacion;
private var conversacionWorld1 : ArbolConversacion;
private var conversacionWorld2 : ArbolConversacion;
private var conversacionWorld3 : ArbolConversacion;
private var conversacionWorld4 : ArbolConversacion;
private var conversacionWorld5 : ArbolConversacion;
private var conversacionCristina1 : ArbolConversacion;
private var conversacionFabioDario1 : ArbolConversacion;
private var conversacionFabioDario2 : ArbolConversacion;
private var conversacionPlayer1 : ArbolConversacion;
private var conversacionPlayer2 : ArbolConversacion;
private var conversacionPlayer3 : ArbolConversacion;
private var conversacionPlayer4 : ArbolConversacion;
private var conversacionPlayer5 : ArbolConversacion;
private var conversacionPlayer6 : ArbolConversacion;
private var conversacionPlayer7 : ArbolConversacion;
private var conversacionPlayer8 : ArbolConversacion;
private var conversacionPlayer9 : ArbolConversacion;
private var conversacionPlayer10 : ArbolConversacion;
private var conversacionPlayer11 : ArbolConversacion;
private var conversacionPlayer12 : ArbolConversacion;
private var conversacionPlayer13 : ArbolConversacion;
private var conversacionPlayer14 : ArbolConversacion;
private var conversacionPlayer15 : ArbolConversacion;





private var ventana : Rect = Rect(0,(Screen.height/2)+50, Screen.width,(Screen.height/3));
private var textoActivo: String;
private var textoOpcion1: String;
private var textoOpcion2: String;
private var textoOpcion3: String;

private var texturaActual1 : Texture2D;
private var texturaActual2 : Texture2D;
private var partyJoin : boolean = false;

var customSkin: GUISkin;
var texturaDiana : Texture2D;
var texturaCristina : Texture2D;
var texturaDario: Texture2D;
var texturaFabio: Texture2D;
var texturaIncognito: Texture2D;

var texturaDianaSombreada : Texture2D;
var texturaCristinaSombreada : Texture2D;
var texturaDarioSombreada: Texture2D;
var texturaMarioSombreada: Texture2D;
var texturaFranciscoSombreada: Texture2D;
var texturaFabioSombreada: Texture2D;




public static final var CONVERSACION_DARIO1 : int = 0;
public static final var CONVERSACION_DARIO2 : int = 1;
public static final var CONVERSACION_DARIO3 : int = 2;
public static final var CONVERSACION_DARIO4 : int = 3;
public static final var CONVERSACION_DARIO5 : int = 4;
public static final var CONVERSACION_DIANA1  :int= 5;
public static final var CONVERSACION_DIANA2  :int= 6;
public static final var CONVERSACION_DIANA3  :int= 7;
public static final var CONVERSACION_CRISTINA :int = 8;
public static final var CONVERSACION_FABIO_DARIO1 :int = 9;
public static final var CONVERSACION_FABIO_DARIO2 :int = 10;
public static final var CONVERSACION_WORLD1 :int= 11;
public static final var CONVERSACION_WORLD2 :int= 12;
public static final var CONVERSACION_WORLD3 :int= 13;
public static final var CONVERSACION_WORLD4 :int= 14;
public static final var CONVERSACION_WORLD5 :int= 15;
public static final var CONVERSACION_PLAYER1 :int= 16;
public static final var CONVERSACION_PLAYER2 :int= 17;
public static final var CONVERSACION_PLAYER3 :int= 18;
public static final var CONVERSACION_PLAYER4 :int= 19;
public static final var CONVERSACION_PLAYER5 :int= 20;
public static final var CONVERSACION_PLAYER6 :int= 21;
public static final var CONVERSACION_PLAYER7 :int= 22;
public static final var CONVERSACION_PLAYER8 :int= 23;
public static final var CONVERSACION_PLAYER9 :int= 24;
public static final var CONVERSACION_PLAYER10 :int= 25;
public static final var CONVERSACION_PLAYER11 :int= 26;
public static final var CONVERSACION_PLAYER12 :int= 27;
public static final var CONVERSACION_PLAYER13 :int= 28;
public static final var CONVERSACION_PLAYER14 :int= 29;
public static final var CONVERSACION_PLAYER15 :int= 30;






// 1D	dialogos[0] = "¡El hospital se está\n derrumbando, hay que\n salir pronto de aquí!";
// 2D	dialogos[1] = "¡Esta cerrada,\n debe haber una llave\n para abrir la puerta!";
// 3D	dialogos[2] = "¡Aquí debe estar\n la llave de la puerta!";

// 5W	dialogos[4] = "AUXILIOOOOOO";
// 6D	dialogos[5] = "¡No puedo ayudar\n a esta persona, no puedo\n levantar los escombros!";
// 7D	dialogos[6] = "¡Aquí hay alguien\n atrapado, seguramente\n Fabio podrá ayudar!";
// 8W	dialogos[7] = "AYUDENMEEEEEE";
// 9P	dialogos[8] = "¡Hay una chica\n bajo este armario!\n ¡Pero no puedo moverlo!";
// 10P	dialogos[9] = "¡Aquí hay alguien\n atrapado, seguramente Fabio\n podrá ayudar!";
// 11DF	dialogos[10] = "¡Señor!\n  ¿Se encuentra bien?";
// 11DF	dialogos[11] = "Si doctor,\n estoy bien…";
// 11DF	dialogos[12] = "¡Otro derrumbe!\n ¿Ahora que hacemos?";
// 11DF	dialogos[13] = "No se preocupe Doctor,\n Yo puedo mover eso…";
// W	dialogos[14] = "¡FABIO SE HA UNIDO\n A TU GRUPO!";
// 12FD	dialogos[15] = "Listo, ya podemos salir.";
// 12DF	dialogos[16] = "¡Pero hay\n más personas, debemos\n ir por ellas!";
// 12FD	dialogos[17] = "Listo";
// 13Di	dialogos[18] = "¡Encontramos el botiquín!\n Ya podemos continuar.";
// 14C	dialogos[19] = "¡Gracias. Creí que\n iba a morir! Pero me\nduele mucho la\npierna…";
// 15Di	dialogos[20] = "¡Gracias por ayudarme!\n Hay gente herida,\n deberíamos buscar\n un botiquín.";
// 16P	dialogos[21] = "¡Ya esta!\n Ya podemos irnos.";
// 17P	dialogos[22] = "¡Es la salida!\n Pero no, aun hay\n gente atrapada.";
// 18P	dialogos[23] = "Obvio, el ascensor no\n funciona. Hay que buscar\n otra salida.";
// 19P	dialogos[24] = "¡No podremos salir\n por aquí, hay que buscar\n otra salida!";
// 20P	dialogos[25] = "¡Esta es una escalera de\n incendios pero la\n chapa esta rota!";
// 21P	dialogos[26] = "¡Cristina puede\ntrepar por esa\n ventanilla y abrirla\n desde el otro lado!";

// 23P	dialogos[28] = "Fabio dijo que él\n podia mover esto.";
// 24P	dialogos[29] = "Un botiquin,\n podria llegar a ser útil";
// 25P	dialogos[30] = "Perfecto,\n una salida.";
// 26P	dialogos[31] = "Aqui hay un\nbotiquin,Diana puede\nsacarlo.";
// 27P	dialogos[32] = "Solo las enfermeras\n pueden abrir estos\n cajones.";
// 28W	dialogos[33] = "DIANA SE HA UNIDO\n A TU GRUPO.";
// 29W	dialogos[34] = "CRISTINA SE HA UNIDO\n A TU GRUPO.";
// 30P	dialogos[35] = "Necesitamos la\n asistencia de\n una enfermera";
// 31Di	dialogos[36] = "Voy a necesitar\n un botiquin";
// 32P	dialogos[37] = "¿Pero qué...?\n SQUEEEE";





// ================================================================================
// OnCreate
// ================================================================================

function Start(){
	
	inicializarConversacionDario1();
	inicializarConversacionDario2();
	inicializarConversacionDario3();
	inicializarConversacionDario4();
	inicializarConversacionDario5();
	inicializarConversacionDiana1();
	inicializarConversacionDiana2();
	inicializarConversacionDiana3();
	inicializarConversacionCristina1();
	inicializarConversacionFabioDario1();
	inicializarConversacionFabioDario2();
	inicializarConversacionWorld1();
	inicializarConversacionWorld2();
	inicializarConversacionWorld3();
	inicializarConversacionWorld4();
	inicializarConversacionWorld5();


}


// ================================================================================
// OnGui
// ================================================================================

function OnGUI () {
var pausa : boolean = GetComponent(MenuScript).estaPausado();
if(!pausa){
GUI.skin = customSkin;
	if(dialogosActivos){
		ventana = GUI.Window(0,ventana , WindowFunction,"");
		GUI.Box(Rect(0,50,Screen.width/2,Screen.height/2),texturaActual1);
		GUI.Box(Rect(Screen.width/2,50,Screen.width/2,Screen.height/2),texturaActual2);
		
	}
	
	
	}
}

function WindowFunction (windowID : int) {


	if(enOpcion){
	
	
	if(GUI.Button(Rect (10, 20, ventana.width, 75), textoOpcion1)){
	print("Escogio Opcion 1:");
	conversacionActual.setNodoActual(conversacionActual.getNodoActual().getHijo1());
	dibujarDialogo();
	enOpcion = false;
	textoOpcion1 = "";
	textoOpcion2 = "";
	
	}
	if(GUI.Button(Rect (10, 95, ventana.width, 75), textoOpcion2)){
		print("Escogio Opcion 2:");
	conversacionActual.setNodoActual(conversacionActual.getNodoActual().getHijo2());
	dibujarDialogo();
	enOpcion = false;
	textoOpcion1 = "";
	textoOpcion2 = "";
	}
	if(conversacionActual.getNodoActual().getHijo3()){
	
	if(GUI.Button(Rect (10, 170, ventana.width, 75), textoOpcion3)){
		print("Escogio Opcion 2:");
	conversacionActual.setNodoActual(conversacionActual.getNodoActual().getHijo3());
	dibujarDialogo();
	enOpcion = false;
	textoOpcion1 = "";
	textoOpcion2 = "";
	}
	
	
	
	}
	
	}
	else{
	GUI.Label (Rect (10, 30, ventana.width, ventana.height), textoActivo);
	}
}


// ================================================================================
// OnMouseDown
// ================================================================================
function Update(){


if(dialogosActivos && Input.GetKeyDown(KeyCode.Mouse0) && !enOpcion){

	print("OnMouseDown");
		
	print("Tiene hijos?: " +conversacionActual.getNodoActual().tieneHijos());
	
	if(!conversacionActual.getNodoActual().estaTerminado()){
	print("Dialogo:");
		dibujarDialogo();
	}
	else if(conversacionActual.getNodoActual().estaTerminado()&&conversacionActual.getNodoActual().tieneHijos()){
		print("Opciones:");
		enOpcion = true;
		dibujarOpcion();
	}
	else if(conversacionActual.getNodoActual().estaTerminado() && !conversacionActual.getNodoActual().tieneHijos()){
		print("Fin dialogo");
		dialogosActivos = false;
		prenderMovimiento();
		
	}
}

}

// ================================================================================
// Metodos
// ================================================================================

function prenderMovimiento(){
yield WaitForSeconds(0.5);
		GetComponent(Player_Manager).getCurrentPlayer().getGameObject().GetComponent(MoverClick).MoverOn();

}

function apagarMovimiento(){

GetComponent(Player_Manager).getCurrentPlayer().getGameObject().GetComponent(MoverClick).MoverOff();
}
function empezarDialogos(idConversacion:int ){
print("empezarDialogos");
var texturaPlayer:Texture2D;
apagarMovimiento();

switch(idConversacion){


	case CONVERSACION_DARIO1:
	print("Esta entrando");
		conversacionActual = conversacionDario1;
		dibujarDialogo();
	break;

	case CONVERSACION_DARIO2: 
		inicializarConversacionDario2();
		conversacionActual = conversacionDario2;
		
	break;

	case CONVERSACION_DARIO3: 
		conversacionActual = conversacionDario3;
	break;

	case CONVERSACION_DARIO4: 
		inicializarConversacionDario4();
		conversacionActual = conversacionDario4;
	break;

	case CONVERSACION_DARIO5: 
		conversacionActual = conversacionDario5;
	break;

	case CONVERSACION_DIANA1:
		conversacionActual = conversacionDiana1;
	break;

	case CONVERSACION_DIANA2:
		conversacionActual = conversacionDiana2;
	break;

	case CONVERSACION_DIANA3:
		conversacionActual = conversacionDiana3;
	break;

	case CONVERSACION_CRISTINA:
		conversacionActual = conversacionCristina1;
		dibujarDialogo();
		
	break;

	case CONVERSACION_FABIO_DARIO1:
	
		conversacionActual = conversacionFabioDario1;
		dibujarDialogo();
	break;

	case CONVERSACION_FABIO_DARIO2:
		
		conversacionActual = conversacionFabioDario2;
		dibujarDialogo();
		
	break;

	case CONVERSACION_WORLD1:
		conversacionActual = conversacionWorld1;
		dibujarDialogo();
	break;
			
	case CONVERSACION_WORLD2:
		conversacionActual = conversacionWorld2;
		dibujarDialogo();
	break;
	
	case CONVERSACION_WORLD3:
		conversacionActual = conversacionWorld3;
		dibujarDialogo();
	break;
			
	case CONVERSACION_WORLD4:
		conversacionActual = conversacionWorld4;
		dibujarDialogo();
	break;
	
	case CONVERSACION_WORLD5:
		conversacionActual = conversacionWorld5;
		dibujarDialogo();
	break;
			
	case CONVERSACION_PLAYER1:
	
		
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer1(texturaPlayer);
		conversacionActual = conversacionPlayer1;
	break;
			
	case CONVERSACION_PLAYER2:
	
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer2(texturaPlayer);
		conversacionActual = conversacionPlayer2;
		
	break;
			
	case CONVERSACION_PLAYER3:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer3(texturaPlayer);
		conversacionActual = conversacionPlayer3;
		dibujarDialogo();
	break;
			
	case CONVERSACION_PLAYER4:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer4(texturaPlayer);
		conversacionActual = conversacionPlayer4;
		dibujarDialogo();
	break;
			
	case CONVERSACION_PLAYER5:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer5(texturaPlayer);
		conversacionActual = conversacionPlayer5;
		dibujarDialogo();
	break;
			
	case CONVERSACION_PLAYER6:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer6(texturaPlayer);
		conversacionActual = conversacionPlayer6;
		dibujarDialogo();
	break;
			
	case CONVERSACION_PLAYER7:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer7(texturaPlayer);
		conversacionActual = conversacionPlayer7;
		dibujarDialogo();
	break;
			
	case CONVERSACION_PLAYER8:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer8(texturaPlayer);
		conversacionActual = conversacionPlayer8;
		
	break;
			
	case CONVERSACION_PLAYER9:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer9(texturaPlayer);
		conversacionActual = conversacionPlayer9;
		
	break;
			
	case CONVERSACION_PLAYER10:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer10(texturaPlayer);
		conversacionActual = conversacionPlayer10;
		
	break;	
		
	case CONVERSACION_PLAYER11:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer11(texturaPlayer);
		conversacionActual = conversacionPlayer11;
		
	break;	
		
	case CONVERSACION_PLAYER12:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
		print("Dario botiquin");
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
		print("Dario botiquin");
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer12(texturaPlayer);
		conversacionActual = conversacionPlayer12;
		dibujarDialogo();
		
	break;
			
	case CONVERSACION_PLAYER13:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer13(texturaPlayer);
		conversacionActual = conversacionPlayer13;
		
	break;
			
	case CONVERSACION_PLAYER14:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer14(texturaPlayer);
		conversacionActual = conversacionPlayer14;
		
	break;	
		
	case CONVERSACION_PLAYER15:
		
		 
		if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DARIO)
		{
			texturaPlayer=texturaDario;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.DIANA)
		{
			texturaPlayer=texturaDiana;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.FABIO)
		{
			texturaPlayer=texturaFabio;
		}
		else if(GetComponent(Player_Manager).getCurrentPlayer().getId() == Player_Manager.CRISTINA)
		{
			texturaPlayer=texturaCristina;
		}
		inicializarConversacionPlayer15(texturaPlayer);
		conversacionActual = conversacionPlayer15;
		dibujarDialogo();
	break;

}




dialogosActivos = true;
print("El final de empezarDialogo"+dialogosActivos);

}

function dibujarDialogo(){


if(conversacionActual.getNodoActual().getQuienLinea() == 1){
texturaActual1 = conversacionActual.getTexturaPj1();
texturaActual2 = conversacionActual.getTexturaPj2Sombreada();
}
else if (conversacionActual.getNodoActual().getQuienLinea() == 2){
texturaActual1 = conversacionActual.getTexturaPj1Sombreada();
texturaActual2 = conversacionActual.getTexturaPj2();
}else if(conversacionActual.getNodoActual().getQuienLinea() == 3){
texturaActual1 = null;
texturaActual2 = null;
}

textoActivo = conversacionActual.getNodoActual().getTextoLinea();



}


function dibujarOpcion(){
textoOpcion1 = conversacionActual.getNodoActual().getHijo1().getTextoLinea();
textoOpcion2 = conversacionActual.getNodoActual().getHijo2().getTextoLinea();
textoActivo = "";
if(conversacionActual.getNodoActual().getHijo3()){
	textoOpcion3 = conversacionActual.getNodoActual().getHijo3().getTextoLinea();
}


texturaActual1 = conversacionActual.getTexturaPj1();
texturaActual2 = conversacionActual.getTexturaPj2Sombreada();




}



// ================================================================================
// Inicializacion de Arboles
// ================================================================================

function inicializarConversacionDario1()
{
	 //print("Inicializa la conversacion");
	conversacionDario1 = new ArbolConversacion(texturaDario,null,texturaDarioSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡El hospital se está derrumbando, hay que salir pronto de aquí!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionDario1.setRaiz(nodoRaiz);
}

function inicializarConversacionDario2()
{
	 //print("Inicializa la conversacion");
	conversacionDario2 = new ArbolConversacion(texturaDario,null,texturaDarioSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Esta cerrada, debe haber una llave para abrir la puerta!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionDario2.setRaiz(nodoRaiz);
}

function inicializarConversacionDario3()
{
	 //print("Inicializa la conversacion");
	conversacionDario3 = new ArbolConversacion(texturaDario,null,texturaDarioSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Aquí debe estar la llave de la puerta!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionDario3.setRaiz(nodoRaiz);
}

function inicializarConversacionDario4()
{
	 //print("Inicializa la conversacion");
	conversacionDario4 = new ArbolConversacion(texturaDario,null,texturaDarioSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡No puedo ayudar a esta persona, no puedo levantar los escombros!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionDario4.setRaiz(nodoRaiz);
}

function inicializarConversacionDario5()
{
	 //print("Inicializa la conversacion");
	conversacionDario5 = new ArbolConversacion(texturaDario,null,texturaDarioSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Aquí hay alguien atrapado, seguramente Fabio podrá ayudar!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionDario5.setRaiz(nodoRaiz);
}

function inicializarConversacionDiana1()
{
	 //print("Inicializa la conversacion");
	conversacionDiana1 = new ArbolConversacion(texturaDiana,null,texturaDianaSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Encontramos el botiquín! Ya podemos continuar.",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionDiana1.setRaiz(nodoRaiz);
}

function inicializarConversacionDiana2()
{
	 //print("Inicializa la conversacion");
	conversacionDiana2 = new ArbolConversacion(texturaDiana,null,texturaDianaSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Gracias por ayudarme! Hay gente herida, deberíamos buscar un botiquín.",1);
	dialogos.Push(l);
	l = new LineaDialogo("¡DIANA SE HA UNIDO A TU GRUPO!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionDiana2.setRaiz(nodoRaiz);
}

function inicializarConversacionDiana3()
{
	 //print("Inicializa la conversacion");
	conversacionDiana3 = new ArbolConversacion(texturaDiana,null,texturaDianaSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Voy a necesitar un botiquin",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionDiana3.setRaiz(nodoRaiz);
}

function inicializarConversacionCristina1()
{
	 //print("Inicializa la conversacion");
	conversacionCristina1 = new ArbolConversacion(texturaCristina,null,texturaCristinaSombreada,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Gracias. Creí que iba a morir! Pero me duele mucho la pierna…",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionCristina1.setRaiz(nodoRaiz);
}

function inicializarConversacionFabioDario1()
{
	 //print("Inicializa la conversacion");
	conversacionFabioDario1 = new ArbolConversacion(texturaDario,texturaFabio,texturaDarioSombreada,texturaFabioSombreada);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Señor!  ¿Se encuentra bien?",1);
	dialogos.Push(l);
	l = new LineaDialogo("Si doctor, estoy bien…",2);
	dialogos.Push(l);
	l = new LineaDialogo("¡Otro derrumbe! ¿Ahora que hacemos?",1);
	dialogos.Push(l);
	l = new LineaDialogo("No se preocupe Doctor, Yo puedo mover eso…",2);
	dialogos.Push(l);
 	l= new LineaDialogo("¡FABIO SE HA UNIDO A TU GRUPO!",3);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);
	
	conversacionFabioDario1.setRaiz(nodoRaiz);
}

function inicializarConversacionFabioDario2()
{
	 //print("Inicializa la conversacion");
	conversacionFabioDario2 = new ArbolConversacion(texturaDario,texturaFabio,texturaDarioSombreada,texturaFabioSombreada);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Listo, ya podemos salir.",2);
	dialogos.Push(l);
	l = new LineaDialogo("¡Pero hay más personas, debemos ir por ellas!",1);
	dialogos.Push(l);
	l = new LineaDialogo("Listo",2);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionFabioDario2.setRaiz(nodoRaiz);
}

function inicializarConversacionWorld1()
{
	 //print("Inicializa la conversacion");
	conversacionWorld1 = new ArbolConversacion(texturaIncognito,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("AUXILIOOOOOO",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionWorld1.setRaiz(nodoRaiz);
}

function inicializarConversacionWorld2()
{
	 //print("Inicializa la conversacion");
	conversacionWorld2 = new ArbolConversacion(texturaIncognito,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("AYUDENMEEEEEE",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionWorld2.setRaiz(nodoRaiz);
}
//DEPRECATED
function inicializarConversacionWorld3()
{
	 //print("Inicializa la conversacion");
	conversacionWorld3 = new ArbolConversacion(texturaIncognito,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡FABIO SE HA UNIDO A TU GRUPO!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionWorld3.setRaiz(nodoRaiz);
}
//DEPRECATED
function inicializarConversacionWorld4()
{
	 //print("Inicializa la conversacion");
	conversacionWorld4 = new ArbolConversacion(texturaIncognito,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡DIANA SE HA UNIDO A TU GRUPO!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionWorld4.setRaiz(nodoRaiz);
}

function inicializarConversacionWorld5()
{
	 //print("Inicializa la conversacion");
	conversacionWorld5 = new ArbolConversacion(texturaIncognito,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡CRISTINA SE HA UNIDO A TU GRUPO!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionWorld5.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer1(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer1 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Hay una chica bajo este armario! ¡Pero no puedo moverlo!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer1.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer2(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer2 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Aquí hay alguien\n atrapado, seguramente Fabio\n podrá ayudar!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer2.setRaiz(nodoRaiz);

}
function inicializarConversacionPlayer3(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer3 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Ya esta! Ya podemos irnos.",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer3.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer4(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer4 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Es la salida! Pero no, aun hay gente atrapada.",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer4.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer5(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer5 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Obvio, el ascensor no funciona. Hay que buscar otra salida.",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer5.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer6(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer6 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡No podremos salir por aquí, hay que buscar otra salida!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer6.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer7(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer7 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Esta es una escalera de incendios pero la chapa esta rota!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer7.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer8(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer8 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¡Cristina puede\ntrepar por esa ventanilla y abrirla desde el otro lado!",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer8.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer9(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer9 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Fabio dijo que él podia mover esto.",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer9.setRaiz(nodoRaiz);
}


function inicializarConversacionPlayer10(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer10 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Un botiquin, podria llegar a ser útil",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer10.setRaiz(nodoRaiz);
}


function inicializarConversacionPlayer11(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer11 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Perfecto, una salida.",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer11.setRaiz(nodoRaiz);
}


function inicializarConversacionPlayer12(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer12 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Aqui hay un botiquin,Diana puede sacarlo.",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer12.setRaiz(nodoRaiz);
}


function inicializarConversacionPlayer13(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer13 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Solo las enfermeras pueden abrir estos cajones.",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer13.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer14(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer14 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("Necesitamos la asistencia de una enfermera",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer14.setRaiz(nodoRaiz);
}

function inicializarConversacionPlayer15(textura:Texture2D)
{
	 //print("Inicializa la conversacion");
	conversacionPlayer15 = new ArbolConversacion(textura,null,null,null);

	/**
	* Nodo Raiz
	* 
	*/
	var dialogos : Array = new Array();
	var l: LineaDialogo = new LineaDialogo("¿Pero qué...?",1);
	dialogos.Push(l);
 	var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

	conversacionPlayer15.setRaiz(nodoRaiz);
}


