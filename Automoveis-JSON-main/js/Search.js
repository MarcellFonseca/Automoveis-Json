function getSearch(){
	$result = document.getElementById('search').value;
	
	$("#TableData").html("");
	$.getJSON("js/automoveis.json", function(data){
			if($result == ""){
				for(var i = 0; i < data['automoveis'].length; i++){
					$("#TableData").append("<tr>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['MARCA'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CARRO'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
					$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
					$("#TableData").append("</tr>");
				}
			}else{
				
				for(var i = 0; i < data['automoveis'].length; i++){
					if(data['automoveis'][i]['MARCA'].indexOf($result.toUpperCase())==0 || data['automoveis'][i]['CARRO'].indexOf($result.toUpperCase())==0){
						$("#TableData").append("<tr>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['MARCA'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CARRO'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_DIANTEIRO_MIN'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_DIANTEIRO_MAX'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CASTER_DIANTEIRO_MIN'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CASTER_DIANTEIRO_MAX'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MIN'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_DIANTEIRA_MAX'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_TRASEIRA_MIN'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CAMBER_TRASEIRA_MAX'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MIN'] + "</td>");
						$("#TableData").append("<td scope='col'>"+ data['automoveis'][i]['CONVERGENCIA_TRASEIRA_MAX'] + "</td>");
						$("#TableData").append("</tr>");
					}
				}
			}
	});	
}
