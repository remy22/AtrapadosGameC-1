#pragma strict
//Menu_script: Este script controla las acciones del menu de personajes en la interfaz de usuario



// ================================================================================
// Variables
// ================================================================================
private var lastTooltip : String = " "; //Tooltip para controlar los mensajes del menu

// Las siguientes variables determinan el posicionamiento de los botones

private var ancho : int;
private var alto : int;
private var separacion : int;
private var pausa :boolean = false;

//Establece el estilo que se usara en los botones
var customSkin: GUISkin;
//Texturas de los botones del menu
var menu : Texture2D;
var reiniciar : Texture2D;
var home : Texture2D;

//Inicializa el jugador activo al principio del nivel
function Start () {
	ancho = (Screen.width/8) - 50;
	alto = Screen.height/8;
	separacion = 3;
	
}



// ================================================================================
// OnGui
// ================================================================================
//Dibuja el menu y responde a los eventos de los botones
function OnGUI () {


GUI.skin = customSkin;
	
	if(pausa){
		
		if(GUI.Button (new Rect (Screen.width   - 64,64,64,64),GUIContent(reiniciar,"Button"))){
			Time.timeScale=1;
			pausa = false;
			Application.LoadLevel("Nivel1");
		}
		if(GUI.Button (new Rect (Screen.width - 64,128,64,64),GUIContent (home,"Button"))){
			Time.timeScale=1;
			pausa = false;
			Application.LoadLevel("menu");
		}
	}
	 //Dibuja el boton de pausa
    if(GUI.Button (new Rect (Screen.width - 64,0,64,64),GUIContent (menu,"Button"))){
    	if(!pausa){
    		Time.timeScale=0;
    		pausa = true;
		}
	else{
		Time.timeScale=1;
			pausa = false;
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


// ================================================================================
// Metodos
// ================================================================================

    function ButtonOnMouseOver () {
      GetComponent(Player_Manager).getCurrentPlayer().getGameObject().GetComponent(MoverClick).MoverOff();
    }
    function ButtonOnMouseOut () {
    if(!pausa){
    print("pausa" + pausa);
        GetComponent(Player_Manager).getCurrentPlayer().getGameObject().GetComponent(MoverClick).MoverOn();
        }
    }


function estaPausado():boolean {

return pausa;

}
