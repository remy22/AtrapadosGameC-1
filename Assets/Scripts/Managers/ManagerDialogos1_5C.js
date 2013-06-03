#pragma strict

private var dialogosActivos : boolean;
private var enOpcion: boolean = false;
private var conversacionActual : ArbolConversacion;
private var conversacionDiana : ArbolConversacion;
private var conversacionFabio : ArbolConversacion;
private var conversacionFrancisco : ArbolConversacion;
private var conversacionMario : ArbolConversacion;
private var conversacionDario : ArbolConversacion;
private var conversacionArmario1 : ArbolConversacion;
private var conversacionArmario2 : ArbolConversacion;


private var ventana : Rect = Rect(0,(Screen.height/2)+50, Screen.width,(Screen.height/3));
private var textoActivo: String;
private var textoOpcion1: String;
private var textoOpcion2: String;
private var textoOpcion3: String;

private var texturaActual1 : Texture2D;
private var texturaActual2 : Texture2D;


//Conexión con el LevelManager
var manager : GameObject;


var customSkin: GUISkin;
var texturaDiana : Texture2D;
var texturaDario : Texture2D;
var texturaCristina: Texture2D;
var texturaMario: Texture2D;
var texturaFrancisco: Texture2D;
var texturaFabio: Texture2D;

var texturaDianaSombreada : Texture2D;
var texturaDarioSombreada : Texture2D;
var texturaCristinaSombreada: Texture2D;
var texturaMarioSombreada: Texture2D;
var texturaFranciscoSombreada: Texture2D;
var texturaFabioSombreada: Texture2D;



public static final var CONVERSACION_DIANA  :int= 0;
public static final var CONVERSACION_FABIO :int = 1;
public static final var CONVERSACION_DARIO :int = 2;
public static final var CONVERSACION_MARIO : int = 3;
public static final var CONVERSACION_CRISTINA :int = 4;
public static final var CONVERSACION_FRANCISCO  :int= 5;
public static final var CONVERSACION_ARMARIO1  :int= 6;
public static final var CONVERSACION_ARMARIO2  :int= 7;


public static final var NEGACION = 0;

public static final var ACEPTACION_DIANA = 1;

public static final var ACEPTACION_MARIO = 2;

public static final var ACEPTACION_FRANCISCO = 3;

public static final var DIALOGO_ARMARIO1 = 4;

public static final var DIALOGO_ARMARIO2 = 5;



// ================================================================================
// OnCreate
// ================================================================================

function Start(){

 inicializarConversacionDiana();
 inicializarConversacionDario();
 inicializarConversacionFabio();
 inicializarConversacionFrancisco();
 inicializarConversacionMario();
 inicializarConversacionArmario1();
 inicializarConversacionArmario2();
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
var pausa : boolean = GetComponent(MenuScript).estaPausado();
if(!pausa){
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
		GetComponent(Player_Manager).getCurrentPlayer().getGameObject().GetComponent(MoverClick).MoverOn();
		manager.GetComponent(IEvent_manager).DialogSwitch(conversacionActual.getResultado());
		
	}
}

}

}

// ================================================================================
// Metodos
// ================================================================================


function empezarDialogos(idConversacion:int ){
print("empezarDialogos");

switch(idConversacion){

case CONVERSACION_DIANA:

conversacionActual = conversacionDiana;

break;
case CONVERSACION_FABIO:

conversacionActual = conversacionFabio;

break;
case CONVERSACION_MARIO:

conversacionActual = conversacionMario;

break;
case CONVERSACION_DARIO:

conversacionActual = conversacionDario;

break;
case CONVERSACION_FRANCISCO:

conversacionActual = conversacionFrancisco;

break;
case CONVERSACION_ARMARIO1:

conversacionActual = conversacionArmario1;

break;
case CONVERSACION_ARMARIO2:

conversacionActual = conversacionArmario2;

break;
}

GetComponent(Player_Manager).getCurrentPlayer().getGameObject().GetComponent(MoverClick).MoverOff();

dialogosActivos = true;


}

function dibujarDialogo(){


if(conversacionActual.getNodoActual().getQuienLinea() == 1){
texturaActual1 = conversacionActual.getTexturaPj1();
texturaActual2 = conversacionActual.getTexturaPj2Sombreada();
}
else if (conversacionActual.getNodoActual().getQuienLinea() == 2){
texturaActual1 = conversacionActual.getTexturaPj1Sombreada();
texturaActual2 = conversacionActual.getTexturaPj2();
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

//Conversacion con Diana
function inicializarConversacionDiana(){
print("Inicializa la conversacion");
conversacionDiana = new ArbolConversacion(texturaCristina,texturaDiana,texturaCristinaSombreada,texturaDianaSombreada);

/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("Tal vez usted me entienda, Diana, hay seres que nos vienen acompañando desde que se iniciaron los ataques y ahora sé qué es lo que necesitan, me lo han dicho.",1);
dialogos.Push(l);
l = new LineaDialogo("Chica, voy a ser muy sincera contigo, tú no estás bien. Ese brazo necesita curaciones y la falta de droga te puede estar afectando la mente, es preciso que entres en tratamiento inmediatamente, y eso no lo conseguirás aquí adentro.",2);
dialogos.Push(l);
l = new LineaDialogo("Nunca me he sentido mejor, lo del brazo no es tan grave y jamás he estado tan lúcida. De verdad Diana, hay seres que nos necesitan, usted podría ayudarlos mucho, no con curaciones, sino con otro tipo de cuidados.",1);
dialogos.Push(l);
l = new LineaDialogo("Bueno, si te sientes tan bien ¿Por qué no subes a auxiliar la gente que está atrapada arriba? Seguro que serás de gran ayuda.",2);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

conversacionDiana.setRaiz(nodoRaiz);

/**
* Nodo Opcion 1
* 
**/
dialogos = new Array();
l = new LineaDialogo("Por favor Diana, es verdad lo que le digo, sé que no es fácil entenderlo,\n pero si me acompaña lo entenderá.",1);
dialogos.Push(l);
l = new LineaDialogo("No, he decidido bajar con el anciano y con Fabio. Abajo podemos conseguir ayuda profesional y tú deberías acompañarnos.",2);
dialogos.Push(l);

var nodo1: NodoDialogo = new NodoDialogo(dialogos, NEGACION );

nodoRaiz.setHijo1(nodo1);



/**
* Nodo Opcion 2
* 
*/

dialogos = new Array();
l = new LineaDialogo("Son seres que después compensarán nuestra ayuda, de verdad Diana,\n son más importantes que los de arriba, son los otros.",1);
dialogos.Push(l);
l = new LineaDialogo("No, he decidido subir con el doctor y con el muchacho a auxiliar a los oficinistas de arriba, Tú serías de gran ayuda, acompáñanos.",2);
dialogos.Push(l);

var nodo2: NodoDialogo = new NodoDialogo(dialogos);

nodoRaiz.setHijo2(nodo2);
}

//Conversacion con Fabio
function inicializarConversacionFabio(){
conversacionFabio = new ArbolConversacion(texturaCristina,texturaFabio,texturaCristinaSombreada,texturaFabioSombreada);

/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("Hay seres al otro lado que necesitan ayuda, usted me debería acompañar, puede haber escombros o cosas que impidan el paso y necesitamos moverlos para ayudarlos.",1);
dialogos.Push(l);
l = new LineaDialogo("¿Seres? ¿Movernos? ¿De qué me habla usted?",2);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

conversacionFabio.setRaiz(nodoRaiz);

/**
* Nodo Opcion 1
* 
**/
dialogos = new Array();
l = new LineaDialogo("No es fácil entenderlo, pero esos seres nos imploran ayuda.",1);
dialogos.Push(l);
l = new LineaDialogo("Pero mírese, usted todavía está herida, tienen que sanarle bien ese brazo, no está en condiciones de ayudar a nadie.",2);
dialogos.Push(l);

var nodo1: NodoDialogo = new NodoDialogo(dialogos, NEGACION);

nodoRaiz.setHijo1(nodo1);

/**
* Nodo Opcion 2
* 
*/

dialogos = new Array();
l = new LineaDialogo("No hay mucho tiempo para ayudarlos, acompáñeme.",1);
dialogos.Push(l);
l = new LineaDialogo("no, yo voy a bajar. Pobre chiquilla, se enloqueció del todo,  allá usted si quiere morir aplastada junto con sus seres, yo me largo. ",2);
dialogos.Push(l);

var nodo2: NodoDialogo = new NodoDialogo(dialogos, NEGACION);

nodoRaiz.setHijo2(nodo2);
}

//Conversacion con Francisco
function inicializarConversacionFrancisco(){
conversacionFrancisco = new ArbolConversacion(texturaCristina,texturaFrancisco,texturaCristinaSombreada,texturaFranciscoSombreada);
/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("Señor, sé que usted tiene la idea de salvarse, pero debería escucharme antes, hay seres que necesitan nuestra ayuda.",1);
dialogos.Push(l);
l = new LineaDialogo("Ya le he dicho a todos que lo mejor es bajar y conseguir ayuda, lo de arriba es muy complejo para que podamos resolverlo nosotros.",2);
dialogos.Push(l);
l = new LineaDialogo("Es que yo no hablo de la gente de arriba, sino de ellos, los otros, los que están al otro lado implorando nuestra atención.",1);
dialogos.Push(l);
l = new LineaDialogo("Al otro lado, ¿De qué habla usted? ¿Está loca? Quédese aquí, a morir aplastada, yo bajo ya.",2);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos, NEGACION);

conversacionFrancisco.setRaiz(nodoRaiz);
}

//Conversación con Mario
function inicializarConversacionMario(){
conversacionMario = new ArbolConversacion(texturaCristina,texturaMario,texturaCristinaSombreada,texturaMarioSombreada);
/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("Chico, usted puede que me entienda, hay seres que nos están pidiendo ayuda",1);
dialogos.Push(l);
l = new LineaDialogo("¿Seres?  ¿Se refiere a la gente atrapada arriba?",2);
dialogos.Push(l);
l = new LineaDialogo("No, no, a los de aquí al lado, yo voy a pasar allá y usted me acompaña, no quiero ir sola, voy a necesitar ayuda.",1);
dialogos.Push(l);
l = new LineaDialogo("La ayuda se requiere arriba, que yo sepa al lado no hay nadie, sólo los cuerpos.",2);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

conversacionMario.setRaiz(nodoRaiz);


/**
* Nodo Opcion 1
* 
**/
dialogos = new Array();
l = new LineaDialogo("No son cuerpos, son almas que necesitan ayuda. Por favor, acompáñeme usted",1);
dialogos.Push(l);
l = new LineaDialogo("No, no puedo. Me comprometí a colaborarte al doctor, no, no",2);
dialogos.Push(l);

var nodo1: NodoDialogo = new NodoDialogo(dialogos, NEGACION);

nodoRaiz.setHijo1(nodo1);

/**
* Nodo Opcion 2
* 
*/

dialogos = new Array();
l = new LineaDialogo("No es una locura, si me acompaña usted los verá,\n son seres muy necesitados y tienen miedo, acompáñeme y entre los dos los auxiliamos.",1);
dialogos.Push(l);
l = new LineaDialogo("No, es que creo que podemos hacer mucho más si bajamos y conseguimos ayuda de los profesionales, incluso para lo que usted necesita. Yo voy a bajar, pero le prometo que vuelvo con ayuda.",2);
dialogos.Push(l);

var nodo2: NodoDialogo = new NodoDialogo(dialogos, NEGACION);

nodoRaiz.setHijo2(nodo2);
}

//Conversacion Dario
function inicializarConversacionDario(){
conversacionDario = new ArbolConversacion(texturaCristina,texturaDario,texturaCristinaSombreada,texturaDarioSombreada);
/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("Doctor, los seres que más necesitan ayuda no están arriba como dijo el muchacho.",1);
dialogos.Push(l);
l = new LineaDialogo("¿Cómo? ¿Hay más gente atrapada? ¿Dónde?",2);
dialogos.Push(l);
l = new LineaDialogo("No es gente, son seres, y necesitan nuestra ayuda, usted debería acompañarme.",1);
dialogos.Push(l);
l = new LineaDialogo("No entiendo de qué me habla, pero creo que debemos subir para rescatar a las personas que están atrapadas arriba.",2);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos, NEGACION);

conversacionDario.setRaiz(nodoRaiz);

/**
* Nodo Opcion 1
* 
**/
dialogos = new Array();
l = new LineaDialogo("Doctor, los seres de allá son los más necesitados en este momento.",1);
dialogos.Push(l);
l = new LineaDialogo("No, mientras usted no me explique lo de los seres, dónde están y qué necesitan, le voy a dar prioridad a la gente de las oficinas, lo siento.",2);
dialogos.Push(l);

var nodo1: NodoDialogo = new NodoDialogo(dialogos, NEGACION);

nodoRaiz.setHijo1(nodo1);

/**
* Nodo Opcion 2
* 
**/
dialogos = new Array();
l = new LineaDialogo("Por favor, doctor, se lo pido, ¡acompáñeme, ayúdeme!",1);
dialogos.Push(l);
l = new LineaDialogo("Creo que usted necesita ayuda, debería bajar para que la atiendan, yo voy a subir y veré qué hago sin su ayuda.",2);
dialogos.Push(l);

var nodo2: NodoDialogo = new NodoDialogo(dialogos, NEGACION);

nodoRaiz.setHijo2(nodo2);
}

//Monólogo en los armarios
function inicializarConversacionArmario1(){
conversacionArmario1 = new ArbolConversacion(texturaCristina,null,null,null);
/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("Hay varios objetos que pueden llegar a ser útiles aquí",1);
dialogos.Push(l);
l = new LineaDialogo("Pero tengo que decidir bien, solo puedo cargar cuatro objetos",1);
dialogos.Push(l);

var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos, DIALOGO_ARMARIO1);

conversacionArmario1.setRaiz(nodoRaiz);
}

function inicializarConversacionArmario2(){
conversacionArmario2 = new ArbolConversacion(texturaCristina,null,null,null);
/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("Hay varios objetos que pueden llegar a ser útiles aquí",1);
dialogos.Push(l);
l = new LineaDialogo("Pero tengo que decidir bien, solo puedo cargar cuatro objetos",1);
dialogos.Push(l);

var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos, DIALOGO_ARMARIO2);

conversacionArmario2.setRaiz(nodoRaiz);
}