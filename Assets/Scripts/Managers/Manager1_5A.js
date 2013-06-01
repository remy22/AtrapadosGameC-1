#pragma strict
//Ojo, para evitar problemas en el nivel 1.5:


//Flags de control

//Texturas
var cinematicas : Texture2D[] = new Texture2D[5];

var texturaCursorDario : Texture2D;
var texturaCursorCristina : Texture2D;
var texturaCursorFabio : Texture2D;
var texturaCursorDiana : Texture2D;
var texturaCursorMario : Texture2D;
var texturaCursorFrancisco : Texture2D;



var texturaCuadroDario : Texture2D;
var texturaCuadroCristina : Texture2D;
var texturaCuadroFabio : Texture2D;
var texturaCuadroDiana : Texture2D;
var texturaCuadroMario : Texture2D;
var texturaCuadroFrancisco : Texture2D;

function Awake () {
GetComponent(Player_Manager).addPlayer(new Player(texturaCuadroDario,Player_Manager.DARIO, "Dario" , texturaCursorDario));
}


//Implementación de la función Trigger()
function EventTrigger(objName : String){
	
}

//Imlementación de la funcion Switch()
function EventSwitch(comando : String){
	var managerDialogos = GetComponent(ManagerDialogos1_5A);
	var lootManager = GetComponent(LootManager1_5);
	if(comando.Equals("Diana")){
	
	managerDialogos.empezarDialogos(ManagerDialogos1_5A.CONVERSACION_DIANA);
	
	}
	
	if(comando.Equals("Fabio")){
	
	managerDialogos.empezarDialogos(ManagerDialogos1_5A.CONVERSACION_FABIO);
	
	}
	
	if(comando.Equals("Cristina")){
	
	managerDialogos.empezarDialogos(ManagerDialogos1_5A.CONVERSACION_CRISTINA);
	
	}
	
	if(comando.Equals("Mario")){
	
	managerDialogos.empezarDialogos(ManagerDialogos1_5A.CONVERSACION_MARIO);
	
	}
	
	if(comando.Equals("Francisco")){
	
	managerDialogos.empezarDialogos(ManagerDialogos1_5A.CONVERSACION_FRANCISCO);
	
	}
	if(comando.Equals("Armario 1")){
	
	managerDialogos.empezarDialogos(ManagerDialogos1_5A.CONVERSACION_ARMARIO1);
	
	}
	if(comando.Equals("Armario 2")){
	
	managerDialogos.empezarDialogos(ManagerDialogos1_5A.CONVERSACION_ARMARIO2);
	
	}
	
}

//Implementación de la función IEventDialog
function EventDialog(idResultado : int){

switch(idResultado){

case ManagerDialogos1_5A.NEGACION:

break;
case ManagerDialogos1_5A.ACEPTACION_DIANA:
GetComponent(Player_Manager).addPlayer(new Player(texturaCuadroDiana,Player_Manager.DIANA, "Diana" , texturaCursorDiana));
break;

case ManagerDialogos1_5A.ACEPTACION_MARIO:
GetComponent(Player_Manager).addPlayer(new Player(texturaCuadroMario,Player_Manager.MARIO, "Mario" , texturaCursorMario));
break;

case ManagerDialogos1_5A.ACEPTACION_FRANCISCO:
GetComponent(Player_Manager).addPlayer(new Player(texturaCuadroFrancisco,Player_Manager.FRANCISCO, "Francisco" , texturaCursorFrancisco));
break;

case ManagerDialogos1_5A.DIALOGO_ARMARIO1:
GetComponent(LootManager1_5).empezarLoot(LootManager1_5.LOOT_ARMARIO1);
break;

case ManagerDialogos1_5A.DIALOGO_ARMARIO2:
GetComponent(LootManager1_5).empezarLoot(LootManager1_5.LOOT_ARMARIO2);
break;


}


		
}




function DarCinematica(index : int){
	return cinematicas[index];
}