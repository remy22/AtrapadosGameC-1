#pragma strict
// Interfaz que comunica los Interactors con todos los scripts Manager# que
// implementen estos métodos

// Evento que maneja las acciones relacionadas a Interactor_switch
function Switch(objName : String){
	SendMessage("EventSwitch", objName);
}
//
//// Evento que maneja las acciones realcionadas a Interactor trigger
function Trigger(objName : String){
	SendMessage("EventTrigger", objName);
}


function DialogSwitch(obj : int){
	SendMessage("EventDialog", obj);
}