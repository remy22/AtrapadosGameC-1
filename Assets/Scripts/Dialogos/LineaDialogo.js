public class LineaDialogo{
	
private var textoLinea : String;

private var quienHabla : int;



function LineaDialogo(texto: String , quien: int){
textoLinea = texto;
quienHabla = quien;

}

function getTextoLinea(): String{
return textoLinea;

}

function getQuienHabla(): int{
return quienHabla;

}

}