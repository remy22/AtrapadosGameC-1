#pragma strict
public class ArbolConversacion{


// ================================================================================
// Variables
// ================================================================================
private var raiz : NodoDialogo;
private var nodoActual : NodoDialogo;
private var texturaPj1 : Texture2D ;
private var texturaPj1Sombreada: Texture2D ;
private var texturaPj2 : Texture2D;
private var texturaPj2Sombreada: Texture2D ;
// ================================================================================
// Constructores
// ================================================================================
function ArbolConversacion(textura1 : Texture2D , textura2: Texture2D, texturaSombreada1 : Texture2D , texturaSombreada2 : Texture2D){
texturaPj1 = textura1;
texturaPj2 = textura2;
texturaPj1Sombreada =texturaSombreada1;
texturaPj2Sombreada =texturaSombreada2 ;
}

// ================================================================================
// Metodos
// ================================================================================

function  getResultado():int{

return nodoActual.getResultado();
}
// ================================================================================
// Getters y Setters
// ================================================================================

function  getTexturaPj1():Texture2D{

return texturaPj1;
}
function  getTexturaPj2():Texture2D{

return texturaPj2;
}

function  getTexturaPj1Sombreada():Texture2D{

return texturaPj1Sombreada;
}

function  getTexturaPj2Sombreada():Texture2D{

return texturaPj2Sombreada;
}

function setRaiz(nodo : NodoDialogo){
raiz = nodo;
nodoActual = raiz;
}

function  getNodoActual():NodoDialogo{

return nodoActual;
}

function setNodoActual(nodo : NodoDialogo){
 nodoActual = nodo;

}

}