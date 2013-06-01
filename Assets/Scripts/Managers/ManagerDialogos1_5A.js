#pragma strict

private var dialogosActivos : boolean;
private var enOpcion: boolean = false;
private var conversacionActual : ArbolConversacion;
private var conversacionDiana : ArbolConversacion;
private var conversacionFabio : ArbolConversacion;
private var conversacionFrancisco : ArbolConversacion;
private var conversacionMario : ArbolConversacion;
private var conversacionCristina : ArbolConversacion;
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
var texturaCristina : Texture2D;
var texturaDario: Texture2D;
var texturaMario: Texture2D;
var texturaFrancisco: Texture2D;
var texturaFabio: Texture2D;

var texturaDianaSombreada : Texture2D;
var texturaCristinaSombreada : Texture2D;
var texturaDarioSombreada: Texture2D;
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
 inicializarConversacionCristina();
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
case CONVERSACION_CRISTINA:

conversacionActual = conversacionCristina;

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
conversacionDiana = new ArbolConversacion(texturaDario,texturaDiana,texturaDarioSombreada,texturaDianaSombreada);

/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("La situación en todo el edificio parece muy delicada",1);
dialogos.Push(l);
l = new LineaDialogo("Si, lo que nos informan los dos hombres es terrible.",2);
dialogos.Push(l);
l = new LineaDialogo("Su ayuda ha sido providencial, se ve que sabe mucho para estos casos.",1);
dialogos.Push(l);
l = new LineaDialogo("Me halaga doctor, en realidad es lo que cualquier otra enfermera podría hacer.",2);
dialogos.Push(l);
l = new LineaDialogo("La verdad no lo creo, usted conoce muy bien dónde quedan los medicamentos y se ve que tiene experiencia en la atención de heridos.",1);
dialogos.Push(l);
l = new LineaDialogo("Ah, eso es porque fui enfermera jefe durante varios años.",2);
dialogos.Push(l);
l = new LineaDialogo("¡Pero usted se ve muy joven!",1);
dialogos.Push(l);
l = new LineaDialogo("Tan lindo, pero es pura apariencia.",2);
dialogos.Push(l);
l = new LineaDialogo("De cualquier modo, yo creo que usted debería acompañarme al piso de arriba para tratar de salvar a esa gente.",1);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

conversacionDiana.setRaiz(nodoRaiz);

/**
* Nodo Opcion 1
* 
**/
dialogos = new Array();
l = new LineaDialogo("¿Qué dice Diana, me acompaña?",1);
dialogos.Push(l);
l = new LineaDialogo("La verdad doc, es que estoy de acuerdo con Fabio, es mejor bajar y pedir auxilio a profesionales que ya deben estar listos para ayudar.",2);
dialogos.Push(l);

var nodo1: NodoDialogo = new NodoDialogo(dialogos, NEGACION );

nodoRaiz.setHijo1(nodo1);



/**
* Nodo Opcion 2
* 
*/

dialogos = new Array();
l = new LineaDialogo("Debe acompañarme",1);
dialogos.Push(l);
l = new LineaDialogo("La verdad, no sé qué decirle...",2);
dialogos.Push(l);

var nodo2: NodoDialogo = new NodoDialogo(dialogos);

nodoRaiz.setHijo2(nodo2);


/**
* Nodo Opcion 2.1
* 
*/

dialogos = new Array();
l = new LineaDialogo("Mire que usted es valiosa en estos casos,\n insisto en que será de gran ayuda ¿que dice?",1);
dialogos.Push(l);
l = new LineaDialogo("No doctor, mejor bajamos a pedir ayuda, somos muy pocos para tanta gente que hay arriba.",2);
dialogos.Push(l);

var nodo21 : NodoDialogo= new NodoDialogo(dialogos, NEGACION);

nodo2.setHijo1(nodo21);


/**
* Nodo Opcion 2.2
* 
*/

dialogos = new Array();
l = new LineaDialogo("No soy su superior, pero no me queda más remedio que ordenarle \ncomo médico y en virtud de nuestro juramento que suba conmigo.",1);
dialogos.Push(l);
l = new LineaDialogo("Si lo pone en esos términos doctor, entonces que se haga lo que usted dice.",2);
dialogos.Push(l);

var nodo22: NodoDialogo = new NodoDialogo(dialogos, ACEPTACION_DIANA);

nodo2.setHijo2(nodo22);
}

//Conversacion con Fabio
function inicializarConversacionFabio(){
conversacionFabio = new ArbolConversacion(texturaDario,texturaFabio,texturaDarioSombreada,texturaFabioSombreada);

/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("¿Escuchó  a los hombres?",1);
dialogos.Push(l);
l = new LineaDialogo("Si, está muy claro ¿no?",2);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

conversacionFabio.setRaiz(nodoRaiz);

/**
* Nodo Opcion 1
* 
**/
dialogos = new Array();
l = new LineaDialogo("Yo creo que debemos subir a ayudar a esa otra gente\n y usted puede ser de gran ayuda.",1);
dialogos.Push(l);
l = new LineaDialogo("De una vez se lo digo doctor, no cuente conmigo. Yo bajo en seguida.",2);
dialogos.Push(l);

var nodo1: NodoDialogo = new NodoDialogo(dialogos, NEGACION);

nodoRaiz.setHijo1(nodo1);

/**
* Nodo Opcion 2
* 
*/

dialogos = new Array();
l = new LineaDialogo("No puede tener ninguna excusa. Debe subir conmigo, lo necesitamos.",1);
dialogos.Push(l);
l = new LineaDialogo("De una vez se lo digo doctor, no cuente conmigo. Yo bajo en seguida.",2);
dialogos.Push(l);

var nodo2: NodoDialogo = new NodoDialogo(dialogos, NEGACION);

nodoRaiz.setHijo2(nodo2);
}

//Conversacion con Francisco
function inicializarConversacionFrancisco(){
conversacionFrancisco = new ArbolConversacion(texturaDario,texturaFrancisco,texturaDarioSombreada,texturaFranciscoSombreada);
/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("No creía que la situación fuera tan grave.",1);
dialogos.Push(l);
l = new LineaDialogo("Lo peor es que tenemos muy poco tiempo para salvarnos.",2);
dialogos.Push(l);
l = new LineaDialogo("Según el muchacho hay gente arriba que necesita de nosotros. Entre todos, seguro que podríamos ayudar.",1);
dialogos.Push(l);
l = new LineaDialogo("¿Está usted hablando en serio?",2);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

conversacionFrancisco.setRaiz(nodoRaiz);

/**
* Nodo Opcion 1
* 
**/
dialogos = new Array();
l = new LineaDialogo("Se trata de un deber humanitario, no creo que haya alternativa, ¡Acompáñeme usted!",1);
dialogos.Push(l);
l = new LineaDialogo("Está loco, amigo, no crea que por ser doctor puede darme órdenes\n, yo me voy ya, usted verá lo que hace.",2);
dialogos.Push(l);

var nodo1: NodoDialogo = new NodoDialogo(dialogos,NEGACION);

nodoRaiz.setHijo1(nodo1);

/**
* Nodo Opcion 2
* 
*/

dialogos = new Array();
l = new LineaDialogo("Acabamos de salvarnos gracias a la colaboración de todos\n, seguro que usted podría ayudar arriba, acompáñeme ¿Si?",1);
dialogos.Push(l);
l = new LineaDialogo("No doctorcito que se encarguen de eso los que saben, yo voy a salvar mi pellejo.",2);
dialogos.Push(l);

var nodo2: NodoDialogo = new NodoDialogo(dialogos);

nodoRaiz.setHijo2(nodo2);

/**
* Nodo Opcion 2.1
* 
*/

dialogos = new Array();
l = new LineaDialogo("No hay tiempo para pedir ayuda abajo, debemos encargarnos\n nosotros mismos de la ayuda a los de arriba.",1);
dialogos.Push(l);
l = new LineaDialogo("Haga lo que quiera, yo me largo.",2);
dialogos.Push(l);

var nodo21 : NodoDialogo= new NodoDialogo(dialogos,NEGACION);

nodo2.setHijo1(nodo21);

/**
* Nodo Opcion 2.2
* 
*/

dialogos = new Array();
l = new LineaDialogo("Por favor, acompáñeme. Es una cuestión puramente humanitaria.",1);
dialogos.Push(l);
l = new LineaDialogo("Está bien, subo. Pero le advierto, si a los 5 minutos veo que la cosa no funciona, bajo a salvar mi pellejo.",2);
dialogos.Push(l);

var nodo22: NodoDialogo = new NodoDialogo(dialogos,ACEPTACION_FRANCISCO);

nodo2.setHijo2(nodo22);
}

//Conversación con Mario
function inicializarConversacionMario(){
conversacionMario = new ArbolConversacion(texturaDario,texturaMario,texturaDarioSombreada,texturaMarioSombreada);
/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("¿Cómo está la situación arriba?",1);
dialogos.Push(l);
l = new LineaDialogo("Es un poco extraña. Un sector se derrumbó y hay gente atrapada que pide ayuda, pero hay otro sector intacto y la gente como si nada, sigue trabajando.",2);
dialogos.Push(l);
l = new LineaDialogo("¿Pero cree que si subimos podemos ayudar?",1);
dialogos.Push(l);
l = new LineaDialogo("No sé, es mucha gente. Lo que es cierto es que los atrapados necesitan auxilio.",2);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos);

conversacionMario.setRaiz(nodoRaiz);


/**
* Nodo Opcion 1
* 
**/
dialogos = new Array();
l = new LineaDialogo("Estoy seguro que armando un buen un equipo podremos ayudar ¿Se une usted?\n Usted conoce el lugar y los procedimientos.",1);
dialogos.Push(l);
l = new LineaDialogo("Está bien, usted organiza y vemos cómo puedo ayudar.",2);
dialogos.Push(l);
l = new LineaDialogo("Gracias, sé que juntos podemos hacer mucho.",1);
dialogos.Push(l);

var nodo1: NodoDialogo = new NodoDialogo(dialogos, ACEPTACION_MARIO);

nodoRaiz.setHijo1(nodo1);

/**
* Nodo Opcion 2
* 
*/

dialogos = new Array();
l = new LineaDialogo("Esta labor es humanitaria y es mi deber conformar un equipo de rescate a como dé lugar,\n le ordeno que me acompañe.",1);
dialogos.Push(l);
l = new LineaDialogo("Insisto en que no tengo claridad de lo que puedo hacer, no tengo experiencia y soy\n muy nervioso para estas cosas, mejor bajo a conseguir ayuda.",2);
dialogos.Push(l);
l = new LineaDialogo("Acabamos de salir de un sitio que estaba a punto de desplomarse ¿Sabe cómo?",1);
dialogos.Push(l);
l = new LineaDialogo("¿Cómo doctor?",2);
dialogos.Push(l);

var nodo2: NodoDialogo = new NodoDialogo(dialogos);

nodoRaiz.setHijo2(nodo2);

/**
* Nodo Opcion 2.1
* 
*/

dialogos = new Array();
l = new LineaDialogo("Colaborando. Cada uno con lo que sabía o podía hacer",1);
dialogos.Push(l);
l = new LineaDialogo("Es justamente lo que no sé, cómo ayudar. Soy un mensajero, no tengo formación para esto.",2);
dialogos.Push(l);
l = new LineaDialogo("Es que no se trata de formación, sino de habilidades y esas salen a flote en\n la situación misma, seguro que en algo nos puede ayudar usted, ya verá, es mejor sumar que restar\n en estos casos.",1);
dialogos.Push(l);
l = new LineaDialogo("Bueno doctor, subo con usted. Ojalá que mis nervios no me traicionen",2);
dialogos.Push(l);

var nodo21 : NodoDialogo= new NodoDialogo(dialogos,ACEPTACION_MARIO);

nodo2.setHijo1(nodo21);

/**
* Nodo Opcion 2.2
* 
*/

dialogos = new Array();
l = new LineaDialogo("Tragándonos nuestro miedo y haciendo lo que teníamos que hacer.",1);
dialogos.Push(l);
l = new LineaDialogo("No creo que sea miedo doctor. No voy a poder hacer nada para ayudar, es mejor si solo salgo, no quiero estorbar.",2);
dialogos.Push(l);
l = new LineaDialogo("¿Está seguro de esa decisión?",1);
dialogos.Push(l);
l = new LineaDialogo("Más que seguro doctor, es lo correcto, no puedo meterme en su camino.",2);
dialogos.Push(l);

var nodo22: NodoDialogo = new NodoDialogo(dialogos,NEGACION);

nodo2.setHijo2(nodo22);

/**
* Nodo Opcion 3
* 
*/

dialogos = new Array();
l = new LineaDialogo("Acabamos de salir de un sitio que estaba a punto de desplomarse ¿Sabe cómo?",1);
dialogos.Push(l);
l = new LineaDialogo("¿Cómo doctor?",2);
dialogos.Push(l);

var nodo3: NodoDialogo = new NodoDialogo(dialogos);

nodoRaiz.setHijo3(nodo3);

/**
* Nodo Opcion 3.1
* 
*/
nodo3.setHijo1(nodo21);

/**
* Nodo Opcion 3.2
* 
*/
nodo3.setHijo2(nodo22);

}

//Conversacion Cristina
function inicializarConversacionCristina(){
conversacionCristina = new ArbolConversacion(texturaDario,texturaCristina,texturaDarioSombreada,texturaCristinaSombreada);
/**
* Nodo Raiz
* 
*/
var dialogos : Array = new Array();
var l: LineaDialogo = new LineaDialogo("¿Cómo se siente?",1);
dialogos.Push(l);
l = new LineaDialogo("Mucho mejor, pero todavía me duele mi brazo.",2);
dialogos.Push(l);
l = new LineaDialogo("Si no hubiera sido por  usted, todavía estaríamos atrapados.",1);
dialogos.Push(l);
l = new LineaDialogo("Si, fue una suerte que pudiera pasar por la ventana.",2);
dialogos.Push(l);
l = new LineaDialogo("Ahora tenemos que ayudar otra gente.",1);
dialogos.Push(l);
l = new LineaDialogo("¿Se refiere a los seres que están al otro lado?",2);
dialogos.Push(l);
l = new LineaDialogo("¿Al otro lado? No, a los que están atrapados arriba ¿No oyó al muchacho?",1);
dialogos.Push(l);
l = new LineaDialogo("Hay seres que nos necesitan.",2);
dialogos.Push(l);
l = new LineaDialogo("Si, a eso me refiero, los que están en las oficinas.",1);
dialogos.Push(l);
l = new LineaDialogo("No, usted no me entiende. Hay otros seres que nos piden ayuda.",2);
dialogos.Push(l);
l = new LineaDialogo("Disculpe, no la entiendo. Lo que quiero saber es si sube conmigo.",1);
dialogos.Push(l);
l = new LineaDialogo("No, me voy al otro lado, a ayudarlos. Más  bien debería usted acompañarme.",2);
dialogos.Push(l);
l = new LineaDialogo("No, yo subo. Pero debería usted pedir ayuda para su brazo y para su estado emocional.\n Una crisis de abstinencia podría ser fatal.",1);
dialogos.Push(l);
  
var nodoRaiz:NodoDialogo = new NodoDialogo(dialogos, NEGACION);

conversacionCristina.setRaiz(nodoRaiz);
}

//Monólogo en los armarios
function inicializarConversacionArmario1(){
conversacionArmario1 = new ArbolConversacion(texturaDario,null,null,null);
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
conversacionArmario2 = new ArbolConversacion(texturaDario,null,null,null);
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