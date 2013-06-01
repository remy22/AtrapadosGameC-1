#pragma strict

public class Item{



// ================================================================================
// Variables
// ================================================================================
private var textura : Texture2D;
private var id :int ;
private var nombre : String;


// ================================================================================
// Constructores
// ================================================================================

function Item(text: Texture2D , idArg : int){
textura= text;
id = idArg;


}
function Item(text: Texture2D , idArg : int, nom : String){
textura= text;
id = idArg;
nombre = nom;


}
// ================================================================================
// Metodos
// ================================================================================


// ================================================================================
// Getters y Setters
// ================================================================================

function getTextura():Texture2D{

return textura;

}

function getNombre():String{

return nombre;

}

function getId(): int {

return id;
}

}