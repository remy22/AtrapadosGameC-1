#pragma strict

// ================================================================================
// Variables
// ================================================================================
private var lootActivo : boolean;

private var lootActual : Loot;
private var lootArmario1 : Loot;
private var lootArmario2 : Loot;
private var lootArmario3 : Loot;
//Usado para aplicar estilo a la ventana de loot
var customSkin: GUISkin;

//Dimensiones de la ventana del loot
private var ventana : Rect = Rect(Screen.width/4,Screen.height/4, Screen.width/2,(Screen.height/2));




private var inventario : Inventario;

//Dimensiones de los botones
private var ancho : int = 128;
private var alto : int = 64;
//texturas
var texturaVacia : Texture2D;

var texturaPala : Texture2D;
var texturaExtintor : Texture2D;
var texturaToalla : Texture2D;
var texturaBotiquin : Texture2D;
var texturaLlaveInglesa : Texture2D;
var texturaCuerda : Texture2D;
var texturaTijeras : Texture2D;





//Constantes
public static final var LOOT_ARMARIO1  :int= 0;
public static final var LOOT_ARMARIO2 :int = 1;
public static final var LOOT_ARMARIO3 :int = 2;



public static final var PALA : int = 0;
public static final var EXTINTOR : int = 1;
public static final var TOALLA : int = 2;
public static final var BOTIQUIN : int = 3;
public static final var LLAVE_INGLESA : int = 4;
public static final var CUERDA : int = 5;
public static final var TIJERAS : int = 6;







// ================================================================================
// OnCreate
// ================================================================================

function Start(){

inventario = GetComponent(Inventario);
 inicializarLootArmario1();
 inicializarLootArmario2();
// inicializarLootArmario3();

}


// ================================================================================
// OnGui
// ================================================================================
//TODO
function OnGUI () {

//GUI.skin = customSkin;
	if(lootActivo){
		ventana = GUI.Window(0,ventana , WindowFunction,"");
		//GUI.Box(Rect(0,50,Screen.width/2,Screen.height/2),texturaActual1);
		//GUI.Box(Rect(Screen.width/2,50,Screen.width/2,Screen.height/2),texturaActual2);		
	}
}
//TODO
function WindowFunction (windowID : int) {
GUI.Label(new Rect(ventana.width/2,10,ancho,alto), "Loot");
for(var i:int = 0 ; i <lootActual.getItems().Length ; i++){


	if (lootActual.getItems()[i]){
		if(GUI.Button(new Rect(ventana.width/3,i*alto+100,ancho,alto), GUIContent( lootActual.getItems()[i].getNombre() ,lootActual.getItems()[i].getTextura()))){
		//if(GUI.Button(new Rect(ventana.width/3,i*alto+100,ancho,alto), lootActual.getItems()[i].getTextura())){
		
		
		print(lootActual.getItems()[i].getNombre());
		if(inventario.addItem(lootActual.getItems()[i])){
		lootActual.tomarItem(lootActual.getItems()[i].getId());
		
		}else{
		print("tiene demasiados items");
		}
		}
		
	}
	else{
		GUI.Box(new Rect(ventana.width/3,i*alto+100,ancho,alto), GUIContent("Vacio", texturaVacia));
		
		
		
	}
}

if(GUI.Button(new Rect(ventana.width/2, (ventana.height * 3)/4, ancho, alto ), "Cancelar")){
		
		lootActivo = false;
		GetComponent(Player_Manager).getCurrentPlayer().getGameObject().GetComponent(MoverClick).MoverOn();		
		}


}



// ================================================================================
// Metodos
// ================================================================================


function empezarLoot(idLoot:int ){
print("empezarLoot");

switch(idLoot){

case LOOT_ARMARIO1:
print("armario 1");
lootActual = lootArmario1;

break;
case LOOT_ARMARIO2:
print("armario 2");
lootActual = lootArmario2;

break;
case LOOT_ARMARIO3:

lootActual = lootArmario3;

break;

}

GetComponent(Player_Manager).getCurrentPlayer().getGameObject().GetComponent(MoverClick).MoverOff();

lootActivo = true;


}






// ================================================================================
// Inicializacion de Loot
// ================================================================================

//Loot del armario 1
function inicializarLootArmario1(){
print("Inicializa el loot del primer armario ");

var tmpItems : Item[] = new Item[3];
tmpItems[0]  = new Item(texturaPala,PALA,"Pala");
tmpItems[1] =new Item(texturaExtintor,EXTINTOR,"Extintor");
tmpItems[2] = new Item(texturaToalla,TOALLA,"Toalla");
lootArmario1 = new Loot(tmpItems,LOOT_ARMARIO1);


}



//Loot del armario 2
function inicializarLootArmario2(){
print("Inicializa el loot del segundo armario ");
var tmpItems: Item[] = new Item[3];
tmpItems[0]  = new Item(texturaBotiquin,BOTIQUIN,"Botiquin");
tmpItems[1] = new Item(texturaLlaveInglesa,LLAVE_INGLESA,"Llave Inglesa");
tmpItems[2] = new Item(texturaCuerda,CUERDA,"Cuerda");
lootArmario2 = new Loot(tmpItems,LOOT_ARMARIO2);

}

//Loot del armario 3
//function inicializarLootArmario3(){
//lootArmario1[0]  = new Item(texturaTest1,ITEM_TEST1,"Primer item");
//lootArmario1[1] = new Item(texturaTest1,ITEM_TEST1,"Primer item");;
//lootArmario1[2] = new Item(texturaTest1,ITEM_TEST1,"Primer item");

//}
