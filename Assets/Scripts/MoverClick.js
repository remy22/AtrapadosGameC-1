#pragma strict
//Mueve el objeto hacia la posición donde se hizo click con el mouse

private var mover:boolean = false;// Determina la posibilidad de moverse o no
private var targetPosition:Vector3;//Posición a la cual moverse
var speed:float; // Determina la velocidad de movimiento
var bounceDistance: float;


function Awake(){
	targetPosition = Vector3.zero;
}

function Update () {

	if(Input.GetButton ("Fire1")&& mover){
		//Crea un raycast hasta la posición deseada
		var playerPlane = new Plane(Vector3.up, transform.position);
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hitdist = 0.0;
		
		if (playerPlane.Raycast (ray, hitdist)) {
			
			targetPosition = ray.GetPoint(hitdist);
		}
		
		
		var relativePos = targetPosition - transform.position;
		var rotation = Quaternion.LookRotation(relativePos);
		
		if(rotation.eulerAngles.y> 45 && rotation.eulerAngles.y <135){
			SendMessage("DoAnim","caminar izq");	
		}else if(rotation.eulerAngles.y> 225 && rotation.eulerAngles.y <315) {
			SendMessage("DoAnim","caminar");	
		}
		else if(rotation.eulerAngles.y> 135 && rotation.eulerAngles.y <225){
			SendMessage("DoAnim","espalda");
		}else if(rotation.eulerAngles.y> 315 || rotation.eulerAngles.y <45){
			SendMessage("DoAnim","caminar");;
		}		
	}
	
	if(transform.position == targetPosition && mover){
		SendMessage("StopAnim");
	}
	
	//Interpola la posición hasta llegar al destino
	if(targetPosition != Vector3.zero){
		transform.position = Vector3.MoveTowards(transform.position, targetPosition, Time.deltaTime * speed);
	}
}

function OnCollisionEnter(){
	SendMessage("StopAnim");
	transform.position = Vector3.MoveTowards(transform.position, targetPosition, -bounceDistance);
	targetPosition = Vector3.zero;
	rigidbody.angularVelocity = Vector3.zero;
	rigidbody.velocity = Vector3.zero;	
}


function SetTargetPosition(nTarget : Vector3){
	targetPosition = nTarget;
}


function MoverOff(){
	targetPosition = Vector3.zero;
	print("se desactiva movimiento");
	mover = false;
	SendMessage("StopAnim");
}

function MoverOn(){
print("se activa movimiento");
	mover = true;
}



