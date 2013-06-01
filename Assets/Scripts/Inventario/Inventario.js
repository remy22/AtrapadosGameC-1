#pragma strict


// ================================================================================
// Variables
// ================================================================================

private var itemsActuales : Item[] = new Item[4];
private var ancho : int;
private var alto : int;
var customSkin: GUISkin;
var texturaVacia : Texture2D;
private var lastTooltip : String =  "";
// ================================================================================
// Start
// ================================================================================


function Start () {
	ancho = (Screen.width/8) - 50;
	alto = Screen.height/8;


}

// ================================================================================
// OnGUI
// ================================================================================
 
function OnGUI () {

GUI.skin = customSkin;
var pausa : boolean = GetComponent(MenuScript).estaPausado();
if(!pausa){
for(var i:int = 0 ; i <4 ; i++){
	if (itemsActuales[i]){
		GUI.Box(new Rect(i*ancho,Screen.height - alto,ancho,alto), GUIContent(itemsActuales[i].getTextura(), "Button"));
	}
	else{
		GUI.Box(new Rect(i*ancho,Screen.height - alto,ancho,alto), GUIContent(texturaVacia, "Button"));
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
// Metodos
// ================================================================================
function enInventario(idItem : int): boolean{

for(var i:int = 0 ; i <4 ; i++){
	if (itemsActuales[i])
		
	if (itemsActuales[i].getId() == idItem){
		usarItem(idItem);
		return  true;

	}

}
return false;
}

function addItem(item:Item):boolean{

for(var i:int = 0 ; i <4 ; i++){

if(!itemsActuales[i]){
	itemsActuales[i] =item;
	return true;
}
}

}

function usarItem(id:int ){

var tempItems: Item[] = new Item[4];
var encontro: boolean = false;
for(var i:int = 0 ; i <4 ; i++){


	if(itemsActuales[i]){
	
		
		if(encontro){
		
		
			tempItems[i-1] = itemsActuales[i];
			
			
		}	
		
		if (itemsActuales[i].getId() == id && !encontro){

			encontro = true;
		}else if(!encontro){
		tempItems[i] = itemsActuales[i];
		}
		
		
	
	}
}

itemsActuales = tempItems;

}
// ================================================================================
// Getters y Setters
// ================================================================================


