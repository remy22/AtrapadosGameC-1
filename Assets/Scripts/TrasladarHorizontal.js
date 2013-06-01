#pragma strict
var vel : float;
private var mover : boolean = false;

function Update () {
	if(mover)
		transform.position.x += vel;
}

function activar(){
	mover = true;
}

function desactivar(){
	mover = false;
}