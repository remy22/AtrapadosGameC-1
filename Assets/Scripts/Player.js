#pragma strict
public class Player{

// ================================================================================
// Variables
// ================================================================================

private var nombre : String;
private var id : int;
private var textura : Texture2D;
private var gameObject : GameObject;
private var cursor : Texture2D;

// ================================================================================
// Constructores
// ================================================================================
function Player(text: Texture2D , idArg : int, nom : String, cur : Texture2D ){

gameObject = GameObject.Find(nom);
nombre = nom;
id = idArg;
textura = text;
cursor = cur;

}

// ================================================================================
// Metodos
// ================================================================================


// ================================================================================
// Getters y Setters
// ================================================================================
function getId(): int{
return id;
}
function getNombre(): String{
return nombre;
}
function getTextura(): Texture2D{
return textura;
}
function getCursor(): Texture2D{
return cursor;
}
function getGameObject(): GameObject{
return gameObject;
}


}

