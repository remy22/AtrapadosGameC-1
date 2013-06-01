#pragma strict



// ================================================================================
// Variables
// ================================================================================
private var actuales : Player[] = new Player[4];
private var currentGO : GameObject;
private var current : Player;
private var ancho : int;
private var alto : int;
private var separacion : int;
private var lastTooltip : String =  "";
var customSkin: GUISkin;
var camara : Camera;
var luz : GameObject;  





public static final var DARIO : int = 0;
public static final var CRISTINA : int = 1;
public static final var DIANA : int = 2;
public static final var FABIO : int = 3;
public static final var MARIO : int = 4;
public static final var FRANCISCO : int = 5;

// ================================================================================
// OnGUI
// ================================================================================


function OnGUI () 
{

var pausa : boolean = GetComponent(MenuScript).estaPausado();
if(!pausa){

for(var i:int = 0 ; i <4 ; i++)
{

	if(actuales[i])
	{

 		if(GUI.Button(new Rect (i*ancho,0,ancho,alto),GUIContent(actuales[i].getTextura(), "Button")))
 		{
 			cambiarPj(actuales[i].getId());
 		}
			
			
	}
}

if (Event.current.type == EventType.Repaint && GUI.tooltip != lastTooltip) 
{
            if (lastTooltip != "")
                SendMessage (lastTooltip + "OnMouseOut", SendMessageOptions.DontRequireReceiver);
            if (GUI.tooltip != "")
                SendMessage (GUI.tooltip + "OnMouseOver", SendMessageOptions.DontRequireReceiver);
            lastTooltip = GUI.tooltip;
}

}
}
// ================================================================================
// Start
// ================================================================================


function Start () {
print("start player manager");
ancho = (Screen.width/8) - 50;
	alto = Screen.height/8;
	separacion = 3;
	current = actuales[0];
	currentGO = current.getGameObject();
	currentGO.GetComponent(MoverClick).MoverOn();
}

function cambiarPj(id : int){
	print("esta cambiando de pj");
		var posActual = currentGO.transform.position;
		var rotActual = currentGO.transform.rotation;
		currentGO.renderer.enabled = false;
		currentGO.collider.enabled = false;
		currentGO.GetComponent(MoverClick).SetTargetPosition(Vector3.zero);
	
	for(var i:int = 0 ; i <4 ; i++){
	if (actuales[i])
		
	if (actuales[i].getId() == id){
	
	current = actuales[i];
	
	currentGO = current.getGameObject();
	currentGO.transform.position = posActual;
	
	currentGO.renderer.enabled = true;
	currentGO.collider.enabled = true;
	
	}

	}
	

	camara.GetComponent(SmoothFollow).ChangeTarget(currentGO.transform);
	luz.GetComponent(SmoothFollow).ChangeTarget(currentGO.transform);
	}

// ================================================================================
// Metodos
// ================================================================================
function estaPersonaje(idPlayer : int): boolean{

for(var i:int = 0 ; i <4 ; i++){
	if (actuales[i])
		
	if (actuales[i].getId() == idPlayer){
		return  true;

	}

}
return false;
}


function addPlayer(player:Player):boolean{


for(var i:int = 0 ; i <4 ; i++){

if(!actuales[i]){
	actuales[i] =player;
	
	
	print("se esta anadiendo");
	return true;
}
}
return false;
}

function getCurrentPlayer(): Player{
return current;

}




