#pragma strict
public class NodoDialogo{
	
	
// ================================================================================
// Variables
// ================================================================================

private var lineasDialogo : Array;
private var indiceDialogo : int ; 

private var hijo1 : NodoDialogo;
private var hijo2 : NodoDialogo;
private var hijo3 : NodoDialogo;

//En caso de ser el ultimo nodo tiene un resultado de la conversacion
private var resultado: int;

// ================================================================================
// Constructores
// ================================================================================

function NodoDialogo(dialogo: Array){
lineasDialogo = dialogo;
indiceDialogo = 0;

}

function NodoDialogo(dialogo: Array, res : int){
resultado = res;
lineasDialogo = dialogo;
indiceDialogo = 0;

}


// ================================================================================
// Metodos
// ================================================================================

function tieneHijos():boolean{


if(!hijo1 && !hijo2){//&& !hijo3){

return false;
}else 
return true;

}

function estaTerminado(): boolean{

if(indiceDialogo >= lineasDialogo.Count){

return true;

}
else{
return false;
}
}

// ================================================================================
// Getters y Setters
// ================================================================================
function getHijo1():NodoDialogo{
return hijo1;
}

function setHijo1(nodo:NodoDialogo){

hijo1 = nodo;
}

function setHijo2(nodo:NodoDialogo){
hijo2 = nodo;

}

function setHijo3(nodo:NodoDialogo){
hijo3 = nodo;

}

function getHijo2():NodoDialogo{
return hijo2;
}
function getHijo3():NodoDialogo{
return hijo3;
}

function getQuienLinea():int {

 var linea : LineaDialogo= lineasDialogo[indiceDialogo] as LineaDialogo;
 var quien: int = linea.getQuienHabla();

return quien;

}



function getTextoLinea():String {

 var linea : LineaDialogo= lineasDialogo[indiceDialogo] as LineaDialogo;
 var respuesta: String = linea.getTextoLinea();
indiceDialogo ++ ;
return respuesta;

}

function getResultado():int{
return resultado;
}



}