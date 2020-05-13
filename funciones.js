				// Funciones

	function mostrar_emp(i){	
		
		$.ajax({
			type:"POST",
			url:"datos_empresa.php",
			
			success:function(r){
				
				$(i).html(r);
				
						
			}

		});
		
	}
		
	function mostrar_emp2(i){	
		
		$.ajax({
			type:"POST",
			url:"datos_empresa_2.php",
			
			success:function(r){
				
				$(i).html(r);
				
						
			}

		});
		
	}
// Funcion que Limpia cualquier cantidad de Elementos

function limpiar(...elementos){
	for (let elemento of elementos) {
		$(elemento).val("");

	}
}


function ir_a_menuCFT(){
	//window.location="menu_CFT.php";
	alert("Hola");

}
function get_fecha(){
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f=new Date();
var fecha = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
return fecha;
}
function get_hora(){
	var h=new Date();
    var hora = h.getHours()+ ':'+ h.getMinutes();
	return hora;
}