#pragma strict
public class Loot{


// ================================================================================
// Variables
// ================================================================================
private var items : Item[] = new Item[3];

private var id : int ;
// ================================================================================
// Constructores
// ================================================================================

function Loot(it : Item[], idArg : int){
items = it;

}

// ================================================================================
// Metodos
// ================================================================================
//Tomar item de contenedor
function tomarItem(id:int ){

var tempItems: Item[] = new Item[3];
var encontro: boolean = false;
for(var i:int = 0 ; i <items.Length ; i++){


	if(items[i]){
	
		
		if(encontro){
		
			tempItems[i-1] = items[i];
			
			
		}	
		
		if (items[i].getId() == id && !encontro){

			encontro = true;
		}else if(!encontro){
		tempItems[i] = items[i];
		}
		
		
	
	}
}

items = tempItems;

}

// ================================================================================
// Getters y Setters
// ================================================================================
function getItems(): Item[]{

return items;
}



}