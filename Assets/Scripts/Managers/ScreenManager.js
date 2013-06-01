#pragma strict
//Script que controla el comportamiento de la pantalla y los cursores del juego
private var cursor : String = "CursorMano"; 

function Awake () {
	Screen.SetResolution (1024, 768, false);
}

function Cursor(){
	return cursor;
}

function CambiarCursor(nCursor : String){
	cursor = nCursor;
}